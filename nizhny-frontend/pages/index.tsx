import App from '../components/App';
import { initializeApollo, addApolloState } from '../lib/apolloClient';
import { GET_PLAYERS } from '../graphql/players';
const IndexPage = () => (
  <App>
    <p>hi</p>
  </App>
);

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const players = await apolloClient.query({
    query: GET_PLAYERS,
  });
  return addApolloState(apolloClient, {
    props: {
      players,
    },
    revalidate: 1,
  });
}

export default IndexPage;
