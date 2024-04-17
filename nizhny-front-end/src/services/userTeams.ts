import { useSupabase } from '@/lib/useSupabase';
import type { ICreateTeamResponse, ICreateTeamProps } from '@/types/types';

const createUserTeam = async ({
  userTeamName,
  userID,
}: ICreateTeamProps): ICreateTeamResponse => {
  let { data, error } = await useSupabase
    .from('UserTeams')
    .insert({ userID: userID, userTeamName: userTeamName })
    .select();

  return { status: data.status, statusText: data.statusText };
};

export { createUserTeam };
