import { useSupabase } from '@/lib/useSupabase';
import type { ICreateUserTeamResponse, ICreateTeamProps } from '@/types/types';

const createUserTeam = async ({
  userID,
  userTeamName,
}: ICreateTeamProps): ICreateUserTeamResponse => {
  let { data, error } = await useSupabase
    .from('UserTeams')
    .insert({ userID: userID, userTeamName: userTeamName })
    .select();

  return { data, error };
};

export { createUserTeam };
