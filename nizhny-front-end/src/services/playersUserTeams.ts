import { useSupabase } from '@/lib/useSupabase';
import type {
  IGenericResponseParent,
  ICreatePlayerUserTeamsProps,
} from '@/types/types';

const addPlayersUserTeam = async ({
  userTeamID,
  players,
}: ICreatePlayerUserTeamsProps): IGenericResponseParent => {
  const createPayload = (): Array<{}> => {
    let finalPlayerArray: [] = [];

    players.map((player) =>
      finalPlayerArray.push({
        userTeamID: userTeamID,
        playerID: player.playerID,
      })
    );

    return finalPlayerArray;
  };

  let { data, error } = await useSupabase
    .from('UserTeams')
    .insert(createPayload())
    .select();

  return { data, error };
};

export { addPlayersUserTeam };
