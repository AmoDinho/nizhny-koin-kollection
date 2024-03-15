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

const PlayerModal: React.FunctionComponent = () => {
  return (
    <DialogContent>
      <DialogHeader>Select your Players</DialogHeader>
    </DialogContent>
  );
};

export { PlayerModal, DialogTrigger };
