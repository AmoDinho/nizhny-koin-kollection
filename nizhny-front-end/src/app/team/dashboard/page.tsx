import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import type { Database } from '@/types/supabase';
import { TypographyWrapper } from '@/components/typography';
export default async function Dashboard() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

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
    </div>
  );
}
