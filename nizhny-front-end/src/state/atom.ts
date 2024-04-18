import { atom } from 'recoil';
import type { Database } from '@/types/supabase';
import type { IUserSession } from '@/types/types';
const createTeamState = atom<
  Array<Database['public']['Tables']['Players']['Row']>
>({
  key: 'createTeamState',
  default: [],
});

const userSession = atom<IUserSession | {}>({
  key: 'userSession',
  default: {},
});
export { createTeamState, userSession };
