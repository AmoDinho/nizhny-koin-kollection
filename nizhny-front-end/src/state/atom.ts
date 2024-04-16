import { atom } from 'recoil';
import type { Database } from '@/types/supabase';
const createTeamState = atom<
  Array<Database['public']['Tables']['Players']['Row']>
>({
  key: 'createTeamState',
  default: [],
});

export { createTeamState };
