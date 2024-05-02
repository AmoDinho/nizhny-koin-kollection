import { useSupabase } from '@/lib/useSupabase';
import type {
  IGetPlayersInATeamResponse,
  ICreatePlayerUserTeamsProps,
  IAddPlayerUserTeamResponse,
} from '@/types/types';

const addPlayersUserTeam = async ({
  userTeamID,
  players,
}: ICreatePlayerUserTeamsProps): Promise<IAddPlayerUserTeamResponse> => {
  interface IFinalPlayerArray {
    userTeamID: number | undefined | null;
    playerID: number | undefined | null;
  }
  const createPayload = (): IFinalPlayerArray[] => {
    let finalPlayerArray: IFinalPlayerArray[] = [];
    // console.log('players', players);

    players.map((player) =>
      finalPlayerArray.push({
        userTeamID: userTeamID,
        playerID: player,
      })
    );

    // console.log('finalPlayerArray', finalPlayerArray);
    return finalPlayerArray;
  };

  let { data, error } = await useSupabase
    .from('Players_UserTeams')
    .insert(createPayload() as unknown as IFinalPlayerArray[])
    .select();

  return { data, error };
};

const getPlayersInATeam = async (
  userTeamID: string
): Promise<IGetPlayersInATeamResponse> => {
  let { data, error } = await useSupabase
    .from('Players')
    .select(
      'playerName,playerSurname,imageUrl,playerID,userTeamName Players_UserTeams!inner(userTeamID)'
    )
    .eq('Players_UserTeams.userTeamID', userTeamID);

  console.log('data', data);
  return { data, error };
};

export { addPlayersUserTeam, getPlayersInATeam };
