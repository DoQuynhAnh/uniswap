import { NotImplementedError } from 'utilities/src/errors';
export function isLocalFileUri(_imageUri) {
    throw new Error('Not implemented');
}
export async function uploadFileToS3(_imageUri, _creds) {
    throw new NotImplementedError('uploadFileToS3');
}
export async function uploadAndUpdateAvatarAfterClaim(_params) {
    throw new NotImplementedError('uploadAndUpdateAvatarAfterClaim');
}
export async function tryUploadAvatar(_params) {
    throw new NotImplementedError('tryUploadAvatar');
}
//# sourceMappingURL=avatars.web.js.map