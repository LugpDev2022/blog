import { google } from 'googleapis';

// authenticates the service account to be used in this context
const auth = new google.auth.GoogleAuth({
  // your credentials to authenticate
  keyFile: process.cwd() + '/credentials.json',
  // the actions you are permissed to perform using this API, in this case
  // all CRUD operations are permissed, check out
  // [ https://developers.google.com/drive/api/guides/api-specific-auth ]
  // for more advice on scopes
  scopes: ['https://www.googleapis.com/auth/drive'],
});

export const getFileById = async (id: string) => {
  const drive = google.drive({ version: 'v3', auth });
  try {
    const file = await drive.files.get({
      fileId: id,
      alt: 'media',
    });

    return file.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
