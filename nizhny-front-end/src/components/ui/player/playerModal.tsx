import React, { useState, useEffect, useCallback } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
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
import { createTeamState } from '@/state/atom';
interface IPlayerModalProps {
  isOpened: boolean;
  close: () => void;
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
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const setTeamState = useSetRecoilState(createTeamState);
  const team = useRecoilValue(createTeamState);

  let pageSize = 2;
  // const [players, setPlayers] = useState([]);

  const getPagination = (page: number, size: number) => {
    const limit = size ? +size : 2;
    const from = page ? page * limit : 0;
    const to = page ? from + size : size;

    return { from, to };
  };

  const sumNumbers = (numberOne: number, numberTwo: number): number =>
    numberOne + numberTwo;

  const getPlayers = useCallback(
    async (currentPageNumber: number): Promise<void> => {
      try {
        const { from, to } = getPagination(currentPageNumber, pageSize);
        const { Players } = await getPaginatedPlayers({ from, to, limit: 2 });

        // console.log('Players', Players, source);
        setCurrentPage(currentPageNumber);
        setPlayers(Players);
      } catch (error) {
        alert('throw new error');
      }
    },
    [pageSize]
  );

  const setPageCount = async (): Promise<void> => {
    const { count } = await getPlayerCount();
    setPages(count / 2);
  };

  useEffect(() => {
    if (isOpened) {
      getPlayers(currentPage);
      // console.log('useeffect');
      setPageCount();
    }
  }, [isOpened, currentPage, getPlayers]);
  // console.log('Players-state', players, pages, isOpened);

  const RenderLastItems = ({ itemType }: IRenderLastItemsProps) => {
    // console.log('itemType', itemType);
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

  const addPlayerToTeam = (player) => {
    const targetPlayerID = player?.playerID;
    const exitingPlayer = team?.filter(
      (player) => player?.playerID === targetPlayerID
    );
    console.log('exitingPlayer', exitingPlayer, targetPlayerID);

    if (exitingPlayer[0]?.playerID === targetPlayerID) {
      alert('You cannot add the same player twice');
    } else {
      setTeamState((players) => [...players, player]);
    }
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
          <ParentImage
            imagePath={player?.imageUrl}
            key={playerIndex}
            onClick={() => addPlayerToTeam(player)}
          />
        ))}
      </div>
      <Pagination>
        <RenderLastItems itemType="previous" />
        <PaginationContent>
          {/* render the amount of buttons based on the data fromt he db*/}
          {Array(pages)
            .fill(0)
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
