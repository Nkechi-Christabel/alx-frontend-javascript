import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);

  try {
    return { photo, user };
  } catch (err) {
    return { photo: null, user: null };
  }
}