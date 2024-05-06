import { supabaseHelper } from '@/lib/useSupabase';
import type {
  ICreateUserTeamResponse,
  ICreateTeamProps,
  IUserTeamResponse,
} from '@/types/types';

const createUserTeam = async ({
  userID,
  userTeamName,
}: ICreateTeamProps): Promise<ICreateUserTeamResponse> => {
  let { data, error } = await supabaseHelper()
    .from('UserTeams')
    .insert({ userID: userID, userTeamName: userTeamName })
    .select();

  return { data, error };
};
const getAUsersTeams = async (userID: string): Promise<IUserTeamResponse> => {
  let { data, error } = await supabaseHelper()
    .from('UserTeams')
    .select('*')
    .eq('userID', userID);

  return { data, error };
};
export { createUserTeam, getAUsersTeams };
