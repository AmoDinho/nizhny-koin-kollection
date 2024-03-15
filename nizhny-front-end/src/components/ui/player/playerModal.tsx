import * as React from 'react';
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
interface IPlayerModalProps {
  children: React.ReactNode;
}
const PlayerModal = ({ children }: IPlayerModalProps): React.JSX.Element => {
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
