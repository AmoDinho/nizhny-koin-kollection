'use client';

import { TypographyWrapper } from '@/components/typography';
import { Button } from '@/components/ui/button';
import useRouterUtil from '@/lib/useRouterUtil';
import { useSearchParams } from 'next/navigation';
export default function PageOne() {
  const searchParams = useSearchParams();
  const { handleRouteChange } = useRouterUtil();

  return (
    <div className="grid justify-center ">
      <TypographyWrapper
        WrapperTypes="HeadingOne"
        additonalClassNames="text-red-600 mt-5 mb-5"
      >
        Build your team
      </TypographyWrapper>

      <div>
        <div className="bg-white rounded-lg h-10 w-10">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <Button className="mt-5">Next</Button>
      <Button
        varaint="secondary"
        className="mt-5"
        onClick={() => handleRouteChange(`two`, searchParams)}
      >
        previous
      </Button>
    </div>
  );
}
