'use client';
import { useState } from 'react';
import isAuth from '@/components/hocs/isAuth';
import { TypographyWrapper } from '@/components/typography';
import { IPlayersInTeam } from '@/types/types';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { getPlayersInATeam } from '@/services/playersUserTeams';
import ParentImage from '@/components/image/parentImage';

function ViewTeam() {
  const searchParams = useParams();

  const [currentTeam, setCurrentTeam] = useState<IPlayersInTeam[] | [] | null>(
    []
  );
  console.log(`currentTabState:`, searchParams);

  const fetchUsersTeam = async () => {
    const params: string = searchParams.id as unknown as string;
    const players = await getPlayersInATeam(params);
    setCurrentTeam(players.data);
  };
  useEffect(() => {
    if (searchParams?.id && currentTeam?.length === 0) {
      fetchUsersTeam();
    }
  });
  return (
    <>
      <TypographyWrapper WrapperTypes="HeadingOne">Your Team</TypographyWrapper>

      <div className="grid grid-cols-2 gap-4">
        {currentTeam?.map((player, playerIndex) => (
          <ParentImage imagePath={player?.imageUrl} key={playerIndex} />
        ))}
      </div>
    </>
  );
}

export default isAuth(ViewTeam);
