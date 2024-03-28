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
interface IPlayerModalProps {
  children: React.ReactNode;
}
const PlayerModal = ({ children }: IPlayerModalProps): React.JSX.Element => {
  const getPlayers = async () => {
    try {
      const { Players } = await getPaginatedPlayers();

      console.log('Players', Players);
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
      </DialogContent>
    </Dialog>
  );
};

export { PlayerModal };
