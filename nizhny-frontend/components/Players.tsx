import { useQuery } from '@apollo/client';
import { GET_PLAYERS } from '../graphql/players';
export const Players = () => {
  const { loading, error, data } = useQuery(GET_PLAYERS);

  if (error) return <p>errrorr</p>;
  if (loading) return <p>loading....</p>;
  return (
    <div>
      {data.getPlayers.map((player) => (
        <p>{player.playerID}</p>
      ))}
    </div>
  );
};

export default Players;
