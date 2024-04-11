import React, { useState, useLayoutEffect } from 'react';
import DefaultModal from '../defaultModal';
import CoinHolder from '@/static/images/coin.svg';
import ParentImage from '@/components/image/parentImage';
import { getPaginatedPlayers } from '@/services/players';
import type { Database } from '@/types/supabase';
interface IPlayerModalProps {
  isOpened: boolean;
  close: () => void;
  children: React.ReactNode;
}
/*
TO-DO: https://mantine.dev/guides/next/
*/
type IPlayer = Database['public']['Tables']['Players']['Row'];
type IPlayers = Array<IPlayer>;
const PlayerModal = ({
  isOpened,
  close,
}: IPlayerModalProps): React.JSX.Element => {
  const [players, setPlayers] = useState<IPlayers>([]);
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

  useLayoutEffect(() => {
    getPlayers();
  }, [isOpened]);
  console.log('Players-state', players);

  return (
    <DefaultModal isOpened={isOpened} close={close}>
      <div>
        {players?.map((player, playerIndex) => (
          <ParentImage imagePath={player?.imageUrl} key={playerIndex} />
        ))}
      </div>
      Here are your players
    </DefaultModal>
  );
};

export { PlayerModal };
