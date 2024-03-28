import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Link from 'next/link';
import type { Database } from '@/types/supabase';
import { TypographyWrapper } from '@/components/typography';
import { Button } from '@/components/ui/button';
export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log('session', session);
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
    </div>
  );
}
