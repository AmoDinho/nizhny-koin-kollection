import { useSupabase } from '@/lib/useSupabase';
import type {
  IGetPaginatedPlayers,
  IGetplayerCountResponse,
  IGetPaginatedPlayersResponse,
} from '@/types/types';
const getPaginatedPlayers = async ({
  from,
  to,
  limit,
}: IGetPaginatedPlayers): Promise<IGetPaginatedPlayersResponse> => {
  let { data: players, error } = await useSupabase
    .from('Players')
    .select('*')
    .range(from, to)
    .limit(limit);
  return { players, error };
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
