'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { TypographyWrapper } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { getPlayersInATeam } from '@/services/playersUserTeams';
import { supabaseHelper } from '@/lib/useSupabase';
export default function Dashboard() {
  // const session = useRecoilValue(cookieUserSession);

  // const supabase = createClient();

  const checkSession = async () => {
    const session = await supabaseHelper().auth.getSession();
    console.log('getPlayers', session);

    if (session.data.session?.user.aud !== 'authenticated') {
      redirect('/');
    }
  };

  const getPlayers = async () => {
    return await getPlayersInATeam('2');
  };

  useEffect(() => {
    // getPlayers();
    checkSession();
    getPlayers();
  }, []);
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
      </div>
    </div>
  );
}
