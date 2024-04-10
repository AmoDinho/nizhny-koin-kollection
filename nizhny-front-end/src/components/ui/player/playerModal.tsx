import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import CoinHolder from '@/static/images/coin.svg';
import ParentImage from '@/components/image/parentImage';
import { getPaginatedPlayers } from '@/services/players';
import type { Database } from '@/types/supabase';
interface IPlayerModalProps {
  children: React.ReactNode;
}
/*
TO-DO: https://mantine.dev/guides/next/
*/
type IPlayer = Database['public']['Tables']['Players']['Row'];
type IPlayers = Array<IPlayer>;
const PlayerModal = ({ children }: IPlayerModalProps): React.JSX.Element => {
  const [players, setPlayers] = useState<IPlayers | []>([]);
  const getPlayers = async () => {
    try {
      const { Players } = await getPaginatedPlayers();

      console.log('Players', Players);
      setPlayers(players);
    } catch (error) {
      alert('throw new error');
    }
  };
  useEffect(() => {
    getPlayers();
  }, []);
  console.log('Players-state', players);

  return (
    <Dialog>
      <DialogTrigger>
        <ParentImage imagePath={CoinHolder} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Select your Players</DialogHeader>
        <DialogDescription>
          <p>hi</p>
          {players?.map((player, playerIndex) => (
            <>
              <p>{player.playerName}</p>
              <ParentImage imagePath={player.imageUrl} key={playerIndex} />
            </>
          ))}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export { PlayerModal };
