import { supabaseHelper } from '@/lib/useSupabase';
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
  let { data: players, error } = await supabaseHelper()
    .from('Players')
    .select('*')
    .range(from, to)
    .limit(limit);
  return { players, error };
};

const getPlayerCount = async (): Promise<IGetplayerCountResponse> => {
  let { count, error: CountError } = await supabaseHelper()
    .from('Players')
    .select('*', { count: 'exact', head: true });

  /*

COUNT(*) as all_counts
    */
  return { count, CountError };
};
export { getPaginatedPlayers, getPlayerCount };
