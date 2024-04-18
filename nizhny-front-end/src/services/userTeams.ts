import { useSupabase } from '@/lib/useSupabase';
import type { ICreateTeamResponse, ICreateTeamProps } from '@/types/types';

const createUserTeam = async ({
  userID,
  userTeamName,
}: ICreateTeamProps): ICreateTeamResponse => {
  let { data, error } = await useSupabase
    .from('UserTeams')
    .insert({ userID: userID, userTeamName: userTeamName })
    .select();

  return { data, error };
};

export { createUserTeam };
