import { SessionProvider } from 'next-auth/react';
import ResetStyle from '@/styles/ResetStyle';
import GlobalStyle from '@/styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ResetStyle />
      <GlobalStyle />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;