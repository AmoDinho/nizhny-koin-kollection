'use client';
import { useEffect, useState, useMemo } from 'react';
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
  const team = useRecoilValue(createTeamState);
  const searchParams = useSearchParams();
  const { handleRouteChange } = useRouterUtil();
  const [opened, { open, close }] = useDisclosure(false);
  // useEffect(() => {
  //   console.log('opened', opened);
  //   opened
  //     ? handleRouteChange(`modalOpen`, searchParams, 'modalState')
  //     : handleRouteChange(searchParams, 'modalState');
  //   // handleRouteChange(`modalOpen`, searchParams, 'modalState');
  // }, [opened]);

  /*

1. get users team
2. deteemine how many empty koins to render
3.render existing players
4. render empty koins
  */

  const DetermineKoinsToRender = ({ usersTeams }) => {
    let localKoins = 0;
    const maxTeamSize = 5;
    let currentTeamSize = usersTeams.length;

    if (currentTeamSize < maxTeamSize) {
      localKoins = maxTeamSize - currentTeamSize;
    }

    return (
      <div
        className="grid gap-6 w-20"
        style={{
          rowGap: '1rem',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        }}
      >
        {usersTeams?.map((player, playerIndex) => (
          <ParentImage imagePath={player.imageUrl} key={playerIndex} />
        ))}
        <PlayerModal isOpened={opened} close={close} />
        {Array(localKoins)
          .fill('')
          .map((arrayItem, arrayIndex) => {
            return (
              <div key={arrayIndex}>
                <ParentImage imagePath={CoinHolder} onClick={open} />
              </div>
            );
          })}
      </div>
    );
  };

  return (
    <div className=" ">
      <TypographyWrapper
        WrapperTypes="HeadingOne"
        additonalClassNames="text-red-600 mt-5 mb-5"
      >
        Build your team
      </TypographyWrapper>

      <DetermineKoinsToRender usersTeams={team} />

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

/*

const DetermineKoinsToRender = ({ usersTeams }) => {
      const [emptyKoins, setEmptyKoins] = useState(0);
      const [opened, { open, close }] = useDisclosure(false);
      useEffect(() => {
        let localKoins = 0;
        const maxTeamSize = 5;
        let currentTeamSize = usersTeams.length;

        if (currentTeamSize < maxTeamSize) {
          localKoins = maxTeamSize - currentTeamSize;
        }

        setEmptyKoins(localKoins);
      }, []);

      return (
        <div
          className="grid gap-6 w-20"
          style={{
            rowGap: '1rem',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          }}
        >
          {usersTeams?.map((player, playerIndex) => (
            <ParentImage imagePath={player.imageUrl} key={playerIndex} />
          ))}
          <PlayerModal isOpened={opened} close={close} />
          {Array(emptyKoins)
            .fill('')
            .map((arrayItem, arrayIndex) => {
              return (
                <div key={arrayIndex}>
                  <ParentImage imagePath={CoinHolder} onClick={open} />
                </div>
              );
            })}
        </div>
      );

*/
