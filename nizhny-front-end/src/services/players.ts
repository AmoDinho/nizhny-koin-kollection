import { useSupabase } from '@/lib/useSupabase';

const getPaginatedPlayers = async () => {
  let { data: Players, error } = await useSupabase.from('Players').select('*');
  return { Players, error };
};

const getPlayerCount = async () => {
  let { data: Count, error: CountError } = await useSupabase
    .from('Players')
    .select('*');
  return { Count, CountError };
};
export { getPaginatedPlayers, getPlayerCount };
