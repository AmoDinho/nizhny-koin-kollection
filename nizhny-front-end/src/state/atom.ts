import { atom } from 'recoil';
import type { Database } from '@/types/supabase';
import type { IUserSession, IPlayer } from '@/types/types';
const createTeamState = atom<Array<IPlayer>>({
  key: 'createTeamState',
  default: [],
});

const userSession = atom<IUserSession | {} | null>({
  key: 'userSession',
  default: {},
});
export { createTeamState, userSession };
