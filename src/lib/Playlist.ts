/**
 * Playlist lib file
 */

import { MissingParamError, UnexpectedError } from "../Error";
import Spotify from "../Spotify";

/**
 * Class of all methods related to playlists
 */
class Playlist extends Spotify {

    /**
     * @param id Id of the playlist
     * 
     * **Example:**
     * ```js
     * const playlist = await spotify.playlists.get("id"); // Get playlist data by id
     * ```
     */
    async get(id: string): Promise<any> {

        return new Promise(async (resolve, reject) => {
            if (!id) reject(new MissingParamError("missing id"));

            try {
                const res = await this.fetch({
                    link: `v1/playlists/${id}`,
                    params: {
                        market: "US",
                    },
                });
                res.codeImg = `https://scannables.scdn.co/uri/plain/jpeg/e8e6e6/black/1080/${res.uri}`;
                resolve(res);
            } catch (e) {
                reject(new UnexpectedError(e));
            }
        });

    };

    /**
     * @param id Id of the playlist
     * @param options Options to configure your search
     * 
     * **Example:**
     * ```js
     * const tracks = await spotify.playlists.getTracks("id", { limit: 1 }); // Get all tracks in an album by id. Has advanced option too...
     * ```
     */
    async getTracks(
        id: string,
        options?: {
            limit?: null | string | number;
            advanced?: boolean;
        }
    ): Promise<any> {

        return new Promise(async (resolve, reject) => {
            if (!id) reject(new MissingParamError("missing id"));
            if (!options) options = {};

            try {
                const res = await this.fetch({
                    link: `v1/playlists/${id}/tracks`,
                    params: {
                        market: "US",
                        limit: options.limit || 20,
                    },
                });

                let items = res.items;

                if (options.advanced) {
                    for (let i = 0; i < items.length; i++) {
                        let data = await this.getCodeImage(items[i].uri);
                        items[i].codeImage = data.image;
                        items[i].dominantColor = data.dominantColor;
                    };
                };

                resolve(items);
            } catch (e) {
                reject(new UnexpectedError(e));
            }
        });
    };

    async getCoverImage(id: string): Promise<any> {

        return new Promise(async(resolve, reject) => {
            try{
                if(!id) reject(new MissingParamError('missing playlist id'));

                resolve(
                    await this.fetch({
                        link: `v1/me/playlists/${id}/images`
                    })
                );
            }catch(e){
                reject(new UnexpectedError(e));
            };
        });

    };

    async follows(id: string, userIds: string[]): Promise<any> {

        return new Promise(async(resolve, reject) => {
            try{
                if(!id) reject(new MissingParamError('missing playlist id'));
                if(!userIds || !Array.isArray(userIds)) reject(new MissingParamError('missing user ids'));

                resolve(
                    await this.fetch({
                        link: `v1/me/playlists/${id}/followers/contains`,
                        params: {
                            ids: userIds.join(',')
                        }
                    })
                );
            }catch(e){
                reject(new UnexpectedError(e));
            };
        });

    };

};

export default Playlist;