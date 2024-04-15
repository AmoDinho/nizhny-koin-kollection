import React, { useState, useLayoutEffect } from 'react';
import DefaultModal from '../defaultModal';
import CoinHolder from '@/static/images/coin.svg';
import ParentImage from '@/components/image/parentImage';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { getPaginatedPlayers, getPlayerCount } from '@/services/players';
import type { Database } from '@/types/supabase';
import type { IRenderLastItemsProps } from '@/types/types';
interface IPlayerModalProps {
  isOpened: boolean;
  close: () => void;
  children: React.ReactNode;
}
/*
TO-DO:

1. sort out active state of pagination
2. sort out typing
*/
type IPlayer = Database['public']['Tables']['Players']['Row'] | null;
type IPlayers = Array<IPlayer> | null;
const PlayerModal = ({
  isOpened,
  close,
}: IPlayerModalProps): React.JSX.Element => {
  const [players, setPlayers] = useState<IPlayers | null>([]);
  const [pages, setPages] = useState<number | null>(0);
  const [currentPage, setCurrentPage] = useState<number | null>(1);
  let pageSize = 2;
  // const [players, setPlayers] = useState([]);

  const getPagination = (page, size) => {
    const limit = size ? +size : 2;
    const from = page ? page * limit : 0;
    const to = page ? from + size : size;

    return { from, to };
  };

  const sumNumbers = (numberOne: number, numberTwo: number): number =>
    numberOne + numberTwo;
  const getPlayers = async (currentPageNumber: number): Promise<void> => {
    try {
      const { from, to } = getPagination(currentPageNumber, pageSize);
      const { Players } = await getPaginatedPlayers({ from, to, limit: 2 });

      console.log('Players', Players);

      setCurrentPage(currentPageNumber);
      setPlayers(Players);
    } catch (error) {
      alert('throw new error');
    }
  };

  const setPageCount = async (): Promise<void> => {
    const { count } = await getPlayerCount();
    setPages(count / 2);
  };

  useLayoutEffect(() => {
    getPlayers(currentPage);
    setPageCount();
  }, [isOpened]);
  console.log('Players-state', players, pages);

  const RenderLastItems = ({ itemType }: IRenderLastItemsProps) => {
    console.log('itemType', itemType);
    const componentRegistry = {
      next: () => (
        <PaginationNext onClick={() => getPlayers(currentPage + 1)} />
      ),
      previous: () => (
        <PaginationPrevious onClick={() => getPlayers(currentPage - 1)} />
      ),
    };

    const TargetComponent = componentRegistry[`${itemType}`];
    return (
      <PaginationItem>
        <TargetComponent />
      </PaginationItem>
    );
  };

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
      <Pagination>
        <RenderLastItems itemType="previous" />
        <PaginationContent>
          {/* render the amount of buttons based on the data fromt he db*/}
          {Array(pages)
            .fill('')
            .map((pageNumber, pageIndex) => (
              <PaginationItem key={pageIndex}>
                <p className="text-black"></p>
                <PaginationLink
                  className="bg-black text-white"
                  isActive={
                    currentPage === sumNumbers(pageIndex, 1) ? true : false
                  }
                  onClick={() => getPlayers(sumNumbers(pageIndex, 1))}
                >
                  {sumNumbers(pageIndex, 1)}
                </PaginationLink>
              </PaginationItem>
            ))}
        </PaginationContent>
        <RenderLastItems itemType="next" />
      </Pagination>
    </DefaultModal>
  );
};

export { PlayerModal };
