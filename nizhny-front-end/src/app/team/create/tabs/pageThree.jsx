'use client';
import { useEffect } from 'react';
import { TypographyWrapper } from '@/components/typography';
import { useDisclosure } from '@mantine/hooks';
import { Button } from '@/components/ui/button';
import useRouterUtil from '@/lib/useRouterUtil';
import { useSearchParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { createTeamState } from '@/state/atom';
import ParentImage from '@/components/image/parentImage';
import CoinHolder from '@/static/images/coin.svg';
import { PlayerModal } from '@/components/ui/player/playerModal';
export default function PageThree() {
  const [opened, { open, close }] = useDisclosure(false);
  const team = useRecoilValue(createTeamState);
  const searchParams = useSearchParams();
  const { handleRouteChange } = useRouterUtil();

  // useEffect(() => {
  //   console.log('opened', opened);
  //   opened
  //     ? handleRouteChange(`modalOpen`, searchParams, 'modalState')
  //     : handleRouteChange(searchParams, 'modalState');
  //   // handleRouteChange(`modalOpen`, searchParams, 'modalState');
  // }, [opened]);

  return (
    <div className=" ">
      <TypographyWrapper
        WrapperTypes="HeadingOne"
        additonalClassNames="text-red-600 mt-5 mb-5"
      >
        Build your team
      </TypographyWrapper>

      {team.length === 0 && (
        <div
          className="grid gap-6 w-20"
          style={{
            rowGap: '1rem',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          }}
        >
          <PlayerModal isOpened={opened} close={close} />
          <ParentImage imagePath={CoinHolder} onClick={open} />
          <ParentImage imagePath={CoinHolder} />
          <ParentImage imagePath={CoinHolder} />
        </div>
      )}
      <div className="bg-white rounded-lg  ">
        {team.length >= 1 &&
          team.map((players, playerIndex) => (
            <>
              {players.Insert.teamID === null ? (
                <ParentImage imagePath={CoinHolder} />
              ) : (
                <p>Here is your player</p>
              )}
            </>
          ))}
      </div>

      <span>
        <Button className="mt-5">Next</Button>
        <Button
          varaint="secondary"
          className="mt-5"
          onClick={() => handleRouteChange(`two`, searchParams, 'tabState')}
        >
          previous
        </Button>
      </span>
    </div>
  );
}
