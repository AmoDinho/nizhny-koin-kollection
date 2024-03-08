'use client';
import { CheckCircleIcon } from '@heroicons/react/16/solid';
import { TypographyWrapper } from '@/components/typography';
import { IFeatureArray } from '@/types/types';
import { Button } from '@/components/ui/button';

export default function PageTwo() {
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
      <Button className="mt-5">Next</Button>
      <Button varaint="secondary" className="mt-5">
        previous
      </Button>
    </>
  );
}
