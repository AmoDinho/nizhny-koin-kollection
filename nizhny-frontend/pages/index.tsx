import App from '../components/App';

import { initializeApollo, addApolloState } from '../lib/apolloClient';

const IndexPage = () => (
  <App>
    <p>hi</p>
  </App>
);

export async function getStaticProps() {
  return {
    props: {},
  };
  // const apolloClient = initializeApollo()
  // await apolloClient.query({
  //   query: ALL_POSTS_QUERY,
  //   variables: allPostsQueryVars,
  // })
  // return addApolloState(apolloClient, {
  //   props: {},
  //   revalidate: 1,
  // })
}

export default IndexPage;
