'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TypographyWrapper } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { getAUsersTeams } from '@/services/userTeams';
import type { IUserTeam } from '@/types/types';
import TeamCard from '@/components/ui/teamCard';
import isAuth from '@/components/hocs/isAuth';
import { getUserID } from '@/lib/utils';
const Dashboard = () => {
  // const session = useRecoilValue(cookieUserSession);

  // const supabase = createClient();
  const router = useRouter();

  const [currentUserTeams, setCurrentUserTeams] = useState<IUserTeam>([]);

  const getUsersTeams = async (userID: string) => {
    const teams = await getAUsersTeams(userID);
    setCurrentUserTeams(teams.data);
  };

  useEffect(() => {
    // getPlayers();
    // checkSession();

    const fetchUserID = async () => {
      const userID = await getUserID();
      console.log('userID', userID);
      if (currentUserTeams?.length === 0) {
        getUsersTeams(userID);
      }
    };
    fetchUserID();
  }, [currentUserTeams]);
  return (
    <div className="grid justify-items-center">
      <TypographyWrapper
        WrapperTypes="HeadingOne"
        additonalClassNames="text-red-600"
      >
        Your Team Dashboard
      </TypographyWrapper>
      <div className="grid grid-cols-1">
        <TypographyWrapper WrapperTypes="HeadingThree">
          Please start with creating a team
        </TypographyWrapper>

        <Button>
          <Link href={`/team/create?tabState=one`}>Create new team</Link>
        </Button>
      </div>
      <div className="mt-10">
        <TypographyWrapper
          WrapperTypes="HeadingTwo"
          additonalClassNames="text-red-600"
        >
          Your Teams
        </TypographyWrapper>
        <div className="grid grid-cols-2 gap-4">
          {currentUserTeams?.map((team, teamIndex) => (
            <TeamCard
              key={teamIndex}
              teamName={team.userTeamName}
              onClick={() => router.push(`/view-team/${team.userTeamID}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default isAuth(Dashboard);
