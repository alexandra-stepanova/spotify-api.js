import type { Client } from "../Client";
import type { CamelCaseObjectKeys } from "../Interface";
import type { Playlist } from "../structures/Playlist";
import { SpotifyAPIError } from "../Error";
import { createCacheStructArray } from "../Cache";
import type { 
    SpotifyType, 
    Image, 
    ExternalUrl, 
    UserProductType, 
    ExplicitContentSettings, 
    PrivateUser, 
    CreatePlaylistQuery
} from "api-types";

/**
 * The client which handles all the current user api endpoints and with the details of the current user.
 */
export class UserClient {

    /**
     * The spotify client for this UserClient to work with.
     */
    public readonly client!: Client;

    /** 
     * The name displayed on the user’s profile. null if not available. 
     */
    public displayName?: string | null;

    /** 
     * The Spotify user ID for the user.
     */
    public id?: string;

    /** 
     * The Spotify URI for the user. 
     */
    public uri?: string;

    /** 
     * The Spotify object type which will be 'user'.
     */
    public type?: SpotifyType = 'user';

    /** 
     * The user’s profile image. 
     */
    public images?: Image[];

    /** 
     * Information about the followers of the user. 
     */
    public totalFollowers?: number;

    /** 
     * Known external URLs for this user. 
     */
    public externalURL?: ExternalUrl;

    /**
     * The spotify subscription level of the user. If the user has the paticualr authorized scope for it.
     */
    public product?: UserProductType;

    /** 
     * The country of the user, as set in the user’s account profile. 
     */
    public country?: string;

    /** 
     * The user’s email address, as entered by the user when creating their account. 
     */
    public email?: string;
    
    /** 
     * The user’s explicit content settings. 
     */
    public explicitContent?: CamelCaseObjectKeys<ExplicitContentSettings>;

    /**
     * The client which handles all the current user api endpoints and with the details of the current user.
     * All the methods in this class requires the user authorized token.
     * 
     * @param client The spotify api client.
     * @example const user = new UserClient(client);
     */
    public constructor(client: Client) {
        Object.defineProperty(this, 'client', { value: client });
    }

    /**
     * Patches the current user details info to this manager.
     */
    public async patchInfo() {
        const data: PrivateUser = await this.client.fetch('/me');

        this.displayName = data.display_name;
        this.id = data.id;
        this.uri = data.uri;
        this.images = data.images;
        this.totalFollowers = data.followers.total;
        this.externalURL = data.external_urls;
        this.email = data.email;
        this.product = data.product;
        this.country = data.country;
        this.explicitContent = {
            filterEnabled: data.explicit_content.filter_enabled,
            filterLocked: data.explicit_content.filter_locked
        };
    }

    /**
     * Get the list of playlists of the current user.
     * 
     * @param options The limit, offset query parameter options.
     * @example const playlists = await client.user.getPlaylists();
     */
    public async getPlaylists(
        options: {
            limit?: number,
            offset?: number
        } = {}
    ): Promise<Playlist[]> {
        const fetchedData = await this.client.fetch(`/me/playlists`, { params: options });
        return fetchedData ? createCacheStructArray('playlists', this.client, fetchedData.items) : [];
    }

    /**
     * Create a playlist.
     * 
     * @param playlist The playlist details to set.
     * @example const playlist = await client.user.create({ name: 'My playlist' });
     */
    public create(playlist: CreatePlaylistQuery): Promise<Playlist | null> {
        if (!this.id) throw new SpotifyAPIError('[UserClient.id] is `undefined`. Most likely [UserClient] is not loaded yet.')
        return this.client.playlists.create(this.id, playlist);
    }

}