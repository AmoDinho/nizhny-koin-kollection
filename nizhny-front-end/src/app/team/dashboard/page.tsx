'use client';
import { redirect } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import Link from 'next/link';
import { TypographyWrapper } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { userSession } from '@/state/atom';
export default function Dashboard() {
  const session = useRecoilValue(userSession);

  console.log('session', JSON.stringify(session));
  if (!session) {
    redirect('/');
  }

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
