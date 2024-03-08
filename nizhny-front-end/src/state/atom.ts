import { atom } from 'recoil';
import type { Database } from '@/types/supabase';
const createTeamState = atom<Database['public']['Tables']['Players'][]>({
  key: 'createTeamState',
  default: [],
});

export { createTeamState };
