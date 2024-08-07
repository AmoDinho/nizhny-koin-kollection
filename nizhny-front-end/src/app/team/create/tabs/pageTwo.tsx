'use client';
import { CheckCircleIcon } from '@heroicons/react/16/solid';
import { TypographyWrapper } from '@/components/typography';
import { IFeatureArray } from '@/types/types';
import { Button } from '@/components/ui/button';
import useRouterUtil from '@/lib/useRouterUtil';
import { useSearchParams } from 'next/navigation';
export default function PageTwo() {
  const searchParams = useSearchParams();
  const { handleRouteChange } = useRouterUtil();
  const renderIcon = () => (
    <CheckCircleIcon className="h-10 w-10 text-green-500" />
  );
  const featuresArray: IFeatureArray = [
    {
      id: '1',
      label: '$300 for players',
      icon: renderIcon(),
    },
    {
      id: '2',
      label: '5 players in the squad',
      icon: renderIcon(),
    },
    {
      id: '3',
      label: 'Access to main league',
      icon: renderIcon(),
    },
  ];
  return (
    <>
      <TypographyWrapper
        WrapperTypes="HeadingOne"
        additonalClassNames="text-red-600"
      >
        What you get
      </TypographyWrapper>

      <div className="grid grid-cols-1 mt-10">
        {featuresArray.map((feature, featureIndex) => (
          <span key={featureIndex} className="flex flex-row">
            {feature.icon}{' '}
            <TypographyWrapper
              WrapperTypes="HeadingThree"
              additonalClassNames="text-xl"
            >
              {feature.label}
            </TypographyWrapper>
          </span>
        ))}
      </div>

      <Button
        variant="secondary"
        className="mt-5"
        onClick={() =>
          handleRouteChange(`one`, searchParams.toString(), 'tabState')
        }
      >
        previous
      </Button>
      <Button
        className="mt-5"
        onClick={() =>
          handleRouteChange(`three`, searchParams.toString(), 'tabState')
        }
      >
        Next
      </Button>
    </>
  );
}
