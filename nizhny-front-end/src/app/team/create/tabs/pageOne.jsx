'use client';

import { TypographyWrapper } from '@/components/typography';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useRouterUtil from '@/lib/useRouterUtil';
import { useSearchParams } from 'next/navigation';
export default function PageOne() {
  const searchParams = useSearchParams();
  const { handleRouteChange } = useRouterUtil();
  console.log('searchParams', searchParams.toString());
  return (
    <div className="grid justify-center ">
      <TypographyWrapper
        WrapperTypes="HeadingOne"
        additonalClassNames="text-red-600 mt-5 mb-5"
      >
        What is your Team name?
      </TypographyWrapper>

      <Input placeholder="Argentina FC" />

      <Button
        className="mt-5"
        onClick={() => handleRouteChange(`two`, searchParams, 'tabState')}
      >
        Next
      </Button>
    </div>
  );
}
