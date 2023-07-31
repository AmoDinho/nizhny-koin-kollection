import Boats from '../data/boats.json';
import { IBoat } from '../types';
const getBoats = (): Array<IBoat> => {
  return Boats;
};
export default getBoats;
