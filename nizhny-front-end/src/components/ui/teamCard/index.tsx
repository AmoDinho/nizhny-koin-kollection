import React from 'react';
import { Card, CardContent } from '../card';
import { ITeamCard } from '@/types/types';
import { TypographyWrapper } from '@/components/typography';
const TeamCard = ({ teamName, onClick }: ITeamCard): React.JSX.Element => {
  return (
    <Card
      onClick={onClick}
      className="bg-white dark:bg-gray-950 rounded-lg p-4 shadow-sm cursor-point"
    >
      <CardContent className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
        <TypographyWrapper WrapperTypes="HeadingThree">
          {teamName}
        </TypographyWrapper>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
