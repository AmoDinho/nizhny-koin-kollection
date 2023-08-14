const fs = require('fs');
const path = require('path');

const localFolderPath = path.join(__dirname, 'teams');

const getName = (string) => string.replace(/\.png$/, '').split(' ');

const hasSurname = (string) => {
  if (string.split('').length > 0) {
    true;
  }
};

const uploadPictures = async () => {
  try {
    let players = [];

    const files = await fs.promises.readdir(localFolderPath);

    // console.log('files', files);
    files.map(async (folderPaths) => {
      const teamFolders = await fs.promises.readdir(
        `${__dirname}/teams/${folderPaths}`
      );
      //   console.log('fff', teamFolders);

      teamFolders.map(async (team) => {
        const playerImg = path.join(`${__dirname}/teams/${folderPaths}`, team);

        const playerData = await fs.promises.readFile(playerImg);
        const playerObject = {
          url: '',
          name: getName(team)[0].toLowerCase(),
          surname: hasSurname(team) ? getName(team)[1].toLowerCase() : null,
          country: folderPaths,
        };
        // console.log('playerObject', playerObject);

        players.push(playerObject);
      });
      console.log('playerData', players.length);

      //   const folderPathDir = path.join(__dirname, folderPaths);
      //   console.log('fff', folderPathDir);
      //   //   const filesDirectoryPaths = await path.join(__dirname, folderPathDir);
      //   const files = await fs.promises.readdir(`${__dirname}/${folderPathDir}`);
      //   console.log('fff-2', files);
    });
    console.log('players', JSON.stringify(players));
  } catch (e) {
    console.error('eeeror', e.message);
  }
};

uploadPictures();
