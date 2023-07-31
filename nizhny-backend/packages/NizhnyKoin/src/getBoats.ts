import Players from '../data/players.json';
import { IPlayer } from '../types';
const getPlayers = (): Array<IPlayer> => {
  return Players;
};
export default getPlayers;
