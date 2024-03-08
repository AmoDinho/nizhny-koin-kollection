'use client';
import { CheckCircleIcon } from '@heroicons/react/16/solid';
import { TypographyWrapper } from '@/components/typography';
import { IFeatureArray } from '@/types/types';
export default function PageTwo() {
  const featuresArray: IFeatureArray = [
    {
      id: '1',
      label: '$300 for players',
      icon: <CheckCircleIcon />,
    },
    {
      id: '2',
      label: '5 players in the squad',
      icon: <CheckCircleIcon />,
    },
    {
      id: '3',
      label: 'Access to main league',
      icon: <CheckCircleIcon />,
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

      <div>
        {featuresArray.map((feature, featureIndex) => (
          <span key={featureIndex}>
            {feature.icon} <p>{feature.label}</p>
          </span>
        ))}
      </div>
    </>
  );
}
