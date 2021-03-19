import Artist from '../structures/Artist';
import BaseManager from './BaseManager';
import { GetMultipleOptions, Paging, PagingOptions, SearchOptions } from '../Types';
import Album from '../structures/Album';
import Track from '../structures/Track';
/**
 * All artist api methods managed!
 */
export default class ArtistManager extends BaseManager {
    /**
     * Search artists
     *
     * @param query Your query to search
     * @param options Basic SearchOptions but no `type` field should be provided!
     * @example await client.artists.search('some query');
     */
    search(query: string, options?: Omit<SearchOptions, 'type'>): Promise<Paging<Artist>>;
    /**
     * Get a spotify artist information by spotify id!
     *
     * @param id Spotify artist id
     * @param force If true, will directly fetch else will search for cache first!
     * @example await client.artists.get('id');
     */
    get(id: string, force?: boolean, market?: string): Promise<Artist | null>;
    /**
     * Get multiple artists at one fetch!
     *
     * @param options Basic GetMultipleOptions
     * @example await client.artists.getMultiple({
     *     ids: ['123456789']
     * })
     */
    getMultiple(options: GetMultipleOptions): Promise<Artist[]>;
    /**
     * Returns the albums of the artist
     *
     * @param id ID of the artist
     * @param options Basic PagingOptions
     * @example await client.artists.getAlbums('id');
     */
    getAlbums(id: string, options?: PagingOptions): Promise<Paging<Album>>;
    /**
     * Returns the top tracks of the artist
     *
     * @param id ID of the artist
     * @param options Basic PagingOptions
     * @example await client.albums.getTopTracks('id');
     */
    getTopTracks(id: string, options?: PagingOptions): Promise<Track[]>;
    /**
     * Returns artists realted to the artist of whose id is provided!
     *
     * @param id ID of the artist
     * @param options Basic PagingOptions
     * @example await client.albums.getRelatedArtists('id');
     */
    getRelatedArtists(id: string, options?: PagingOptions): Promise<Artist[]>;
}
export type { Artist };
