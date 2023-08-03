import { gql } from '@apollo/client';

export const GET_PLAYERS = gql`
  query getPlayers {
    getPlayers {
        playerID
  }
`;
