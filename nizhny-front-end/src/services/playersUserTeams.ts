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
    console.log('players', players);

    players.map((player) =>
      finalPlayerArray.push({
        userTeamID: userTeamID,
        playerID: player,
      })
    );

    console.log('finalPlayerArray', finalPlayerArray);
    return finalPlayerArray;
  };

  let { data, error } = await useSupabase
    .from('Players_UserTeams')
    .insert(createPayload())
    .select();

  return { data, error };
};

export { addPlayersUserTeam };
