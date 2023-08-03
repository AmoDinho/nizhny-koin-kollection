import App from '../components/App';
import Players from '../components/Players';
const IndexPage = () => (
  <App>
    <Players />
  </App>
);

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default IndexPage;
