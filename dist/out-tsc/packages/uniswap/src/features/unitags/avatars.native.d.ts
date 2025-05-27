import { SignMessageFunc } from 'uniswap/src/data/utils';
import { UnitagAvatarUploadCredentials, UnitagGetAvatarUploadUrlResponse } from 'uniswap/src/features/unitags/types';
export declare function isLocalFileUri(imageUri: string): boolean;
export declare function uploadFileToS3(imageUri: string, creds: UnitagAvatarUploadCredentials): Promise<{
    success: boolean;
}>;
/**
 * Uploads an image to S3 and updates the avatar for a given username and address.
 * Expects imageUri to be a local file, it uploads the file to S3 and updates the avatar URL in the metadata.
 *
 * @param {string} username - The newly claimed unitag.
 * @param {Address} address - The address of the unitag.
 * @param {string} imageUri - The URI of the new avatar image (either a local file or external url).
 * @param {(message: string) => Promise<string>} signMessage - The function to call to sign the message to verify the address.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating whether the avatar was successfully updated.
 */
export declare function uploadAndUpdateAvatarAfterClaim({ username, imageUri, address, signMessage, }: {
    username: string;
    imageUri: string;
    address: string;
    signMessage: SignMessageFunc;
}): Promise<{
    success: boolean;
}>;
export declare const tryUploadAvatar: ({ avatarImageUri, avatarUploadUrlResponse, avatarUploadUrlLoading, }: {
    avatarImageUri: string | undefined;
    avatarUploadUrlResponse: UnitagGetAvatarUploadUrlResponse | undefined;
    avatarUploadUrlLoading: boolean;
}) => Promise<{
    success: boolean;
    skipped: boolean;
}>;
//# sourceMappingURL=avatars.native.d.ts.map