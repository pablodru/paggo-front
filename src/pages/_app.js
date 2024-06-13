import { SessionProvider } from 'next-auth/react';
import ResetStyle from '@/styles/ResetStyle';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ResetStyle />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;