import { useSupabase } from '@/lib/useSupabase';
import type {
  IGetPaginatedPlayers,
  IGetplayerCountResponse,
} from '@/types/types';
const getPaginatedPlayers = async ({
  from,
  to,
  limit,
}: IGetPaginatedPlayers) => {
  let { data: Players, error } = await useSupabase
    .from('Players')
    .select('*')
    .range(from, to)
    .limit(limit);
  return { Players, error };
};

const getPlayerCount = async (): Promise<IGetplayerCountResponse> => {
  let { count, error: CountError } = await useSupabase
    .from('Players')
    .select('*', { count: 'exact', head: true });

  /*

COUNT(*) as all_counts
    */
  return { count, CountError };
};
export { getPaginatedPlayers, getPlayerCount };
