import { useSupabase } from '@/lib/useSupabase';

const getPaginatedPlayers = async () => {
  let { data: Players, error } = await useSupabase.from('Players').select('*');
  return { Players, error };
};
export { getPaginatedPlayers };
