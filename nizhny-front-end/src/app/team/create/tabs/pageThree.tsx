'use client';
import { useEffect } from 'react';
import { XCircleIcon } from '@heroicons/react/16/solid';
import { TypographyWrapper } from '@/components/typography';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@/components/ui/button';
import useRouterUtil from '@/lib/useRouterUtil';
import { useSearchParams } from 'next/navigation';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { createTeamState } from '@/state/atom';
import ParentImage from '@/components/image/parentImage';
import CoinHolder from '@/static/images/coin.svg';
import { PlayerModal } from '@/components/ui/player/playerModal';
import { createUserTeam } from '@/services/userTeams';
import { addPlayersUserTeam } from '@/services/playersUserTeams';
import { getUserID } from '@/lib/utils';
import type { ITeam, IUserTeam, ICreateUserTeamPayload } from '@/types/types';
export default function PageThree() {
  const team = useRecoilValue(createTeamState);
  // const user = useRecoilValue(cookieUserSession);

  const setTeamState = useSetRecoilState(createTeamState);
  const searchParams = useSearchParams();
  const { handleRouteChange, router } = useRouterUtil();
  const [opened, { open, close }] = useDisclosure(false);

  type IRemovePlayerProps = {
    playerID: Number;
  };
  const removePlayerFromTeam = ({ playerID }: IRemovePlayerProps) => {
    let cloneTeamState = [...team];

    const updatedTeamState = cloneTeamState.filter(
      (player) => player?.playerID !== playerID
    );
    // console.log('updatedTeamState', updatedTeamState, playerID);
    setTeamState(updatedTeamState);
  };

  const createUsersTeam = async (): Promise<void> => {
    /*

1. get the users ID
2. create the user's team
3. get the player IDs that the user selected
4. insert the players into the players_userteams table
    */

    const userID: string = await getUserID();

    // console.log('user', user);
    const userTeamName = searchParams.get('teamName');

    let userTeamID: number | undefined = 0;
    try {
      const { data } = (await createUserTeam({
        userID,
        userTeamName,
      })) as unknown as ICreateUserTeamPayload;
      //@ts-ignore
      userTeamID = data[0].userTeamID;
    } catch (error) {
      alert(error);
    }
    const playerIDs = team.map((player) => player?.playerID);
    // console.log('userTeamID', userTeamID);

    try {
      await addPlayersUserTeam({
        players: playerIDs,
        userTeamID: userTeamID,
      });
      //add notification
      alert('success! you have created a new team');
      // route the user to the dashboard
      router.push('/team/dashboard');
    } catch (error) {
      alert(error);
    }
  };

  // useEffect(() => {
  //   console.log('team', team);
  // }, [team]);

  const DetermineKoinsToRender: React.FC<ITeam> = ({
    usersTeams,
  }): React.JSX.Element => {
    let localKoins = 0;
    const maxTeamSize = 5;
    let currentTeamSize = usersTeams.length;

    if (currentTeamSize < maxTeamSize) {
      localKoins = maxTeamSize - currentTeamSize;
    }

    return (
      <div
        className="grid gap-6 w-20"
        style={{
          rowGap: '1rem',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        }}
      >
        {usersTeams?.map((player, playerIndex) => (
          <div key={playerIndex}>
            <XCircleIcon
              className="h-10 w-10"
              onClick={() =>
                removePlayerFromTeam({ playerID: player.playerID })
              }
            />
            <ParentImage imagePath={player.imageUrl} />
          </div>
        ))}
        <PlayerModal isOpened={opened} close={close} />
        {Array(localKoins)
          .fill('')
          .map((arrayItem, arrayIndex) => {
            return (
              <div key={arrayIndex}>
                <ParentImage imagePath={CoinHolder} onClick={open} />
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className=" ">
      <TypographyWrapper
        WrapperTypes="HeadingOne"
        additonalClassNames="text-red-600 mt-5 mb-5"
      >
        Build your team
      </TypographyWrapper>

      {/*@ts-ignore*/}
      <DetermineKoinsToRender usersTeams={team} />

      <span>
        <Button className="mt-5" onClick={() => createUsersTeam()}>
          Next
        </Button>
        <Button
          variant="secondary"
          className="mt-5"
          onClick={() =>
            handleRouteChange(`two`, searchParams.toString(), 'tabState')
          }
        >
          previous
        </Button>
      </span>
    </div>
  );
}
