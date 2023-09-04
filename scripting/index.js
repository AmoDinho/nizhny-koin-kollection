const fs = require('fs');
const path = require('path');
const uploadFile = require('./supabase');
const localFolderPath = path.join(__dirname, 'teams');

const getName = (string) => string.replace(/\.png$/, '').split(' ');

const hasSurname = (string) => {
  // console.log('hasSurname-string', getName(string));
  if (getName(string).length > 1) {
    return true;
  }
};

const uploadPictures = async () => {
  let players = [];

  try {
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
        const { data } = await uploadFile({
          fileData: playerData,
          filePath: `${folderPaths}/${team}`,
        });
        // console.log('data', data);

        if (data && data.path) {
          const playerObject = {
            url: data.path,
            name: getName(team)[0].toLowerCase(),
            surname: hasSurname(team) ? getName(team)[1].toLowerCase() : null,
            country: folderPaths,
          };
          // console.log('playerObject', playerObject);

          players.push(playerObject);
        }

        console.log('players', JSON.stringify(players));
      });

      // console.log('playerData', players.length);
    });
  } catch (e) {
    console.error('eeeror', e.message);
  }

  console.log('players', JSON.stringify(players));
};

uploadPictures();
