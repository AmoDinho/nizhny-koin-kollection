const fs = require('fs');
const path = require('path');

const localFolderPath = path.join(__dirname, 'images');

const uploadPictures = async () => {
  try {
    const files = await fs.promises.readdir(localFolderPath);

    files.map(async (file) => {
      const filePath = path.join(localFolderPath, file);
      const fileData = await fs.promises.readFile(filePath);

      console.log('file', file, fileData);
    });
  } catch (e) {
    console.error('eeeror', e.message);
  }
};

uploadPictures();
