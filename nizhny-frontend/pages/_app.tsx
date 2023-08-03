import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { AppProps } from 'next/app';
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
