import React, { useState, useLayoutEffect } from 'react';
import DefaultModal from '../defaultModal';
import CoinHolder from '@/static/images/coin.svg';
import ParentImage from '@/components/image/parentImage';
import { getPaginatedPlayers, getPlayerCount } from '@/services/players';
import type { Database } from '@/types/supabase';
interface IPlayerModalProps {
  isOpened: boolean;
  close: () => void;
  children: React.ReactNode;
}
/*
TO-DO: https://mantine.dev/guides/next/
*/
type IPlayer = Database['public']['Tables']['Players']['Row'] | null;
type IPlayers = Array<IPlayer> | null;
const PlayerModal = ({
  isOpened,
  close,
}: IPlayerModalProps): React.JSX.Element => {
  const [players, setPlayers] = useState<IPlayers | null>([]);
  const [pages, setPages] = useState<number | null>(0);

  // const [players, setPlayers] = useState([]);

  const getPlayers = async () => {
    try {
      const { Players } = await getPaginatedPlayers();

      console.log('Players', Players);

      setPlayers(Players);
    } catch (error) {
      alert('throw new error');
    }
  };

  const setPageCount = async () => {
    const { count } = await getPlayerCount();
    setPages(count);
  };

  useLayoutEffect(() => {
    getPlayers();
    setPageCount();
  }, [isOpened]);
  console.log('Players-state', players, pages);

  return (
    <DefaultModal isOpened={isOpened} close={close} size="55%">
      <div
        className="grid"
        style={{
          rowGap: '1rem',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        }}
      >
        {players?.map((player, playerIndex) => (
          <ParentImage imagePath={player?.imageUrl} key={playerIndex} />
        ))}
      </div>
      Here are your players
    </DefaultModal>
  );
};

export { PlayerModal };
