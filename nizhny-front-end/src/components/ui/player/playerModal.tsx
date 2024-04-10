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

type IPlayer = Database['public']['Tables']['Players'];
type IPlayers = Array<IPlayer>;
const PlayerModal = ({ children }: IPlayerModalProps): React.JSX.Element => {
  const [players, setPlayers] = useState<IPlayers | null>(null);
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
  return (
    <Dialog>
      <DialogTrigger>
        <ParentImage imagePath={CoinHolder} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Select your Players</DialogHeader>
        <div></div>
      </DialogContent>
    </Dialog>
  );
};

export { PlayerModal };
