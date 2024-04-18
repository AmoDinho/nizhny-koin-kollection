import { useSupabase } from '@/lib/useSupabase';
import type { IGenericResponseParent, ICreateTeamProps } from '@/types/types';

const createUserTeam = async ({
  userID,
  userTeamName,
}: ICreateTeamProps): IGenericResponseParent => {
  let { data, error } = await useSupabase
    .from('UserTeams')
    .insert({ userID: userID, userTeamName: userTeamName })
    .select();

  return { data, error };
};

export { createUserTeam };
