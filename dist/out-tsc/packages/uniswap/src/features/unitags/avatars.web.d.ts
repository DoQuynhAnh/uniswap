import { SignMessageFunc } from 'uniswap/src/data/utils';
import { UnitagAvatarUploadCredentials, UnitagGetAvatarUploadUrlResponse } from 'uniswap/src/features/unitags/types';
export declare function isLocalFileUri(_imageUri: string): boolean;
export declare function uploadFileToS3(_imageUri: string, _creds: UnitagAvatarUploadCredentials): Promise<{
    success: boolean;
}>;
export declare function uploadAndUpdateAvatarAfterClaim(_params: {
    username: string;
    imageUri: string;
    address: string;
    signMessage: SignMessageFunc;
}): Promise<{
    success: boolean;
}>;
export declare function tryUploadAvatar(_params: {
    avatarImageUri: string | undefined;
    avatarUploadUrlResponse: UnitagGetAvatarUploadUrlResponse | undefined;
    avatarUploadUrlLoading: boolean;
}): Promise<{
    success: boolean;
    skipped: boolean;
}>;
//# sourceMappingURL=avatars.web.d.ts.map