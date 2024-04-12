import { useSupabase } from '@/lib/useSupabase';

const getPaginatedPlayers = async () => {
  let { data: Players, error } = await useSupabase.from('Players').select('*');
  return { Players, error };
};

const getPlayerCount = async () => {
  let { count, error: CountError } = await useSupabase
    .from('Players')
    .select('*', { count: 'exact', head: true });

  return { count, CountError };
};
export { getPaginatedPlayers, getPlayerCount };
