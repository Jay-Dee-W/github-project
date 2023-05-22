import React from 'react';
import type { AppProps } from 'next/app';
import { ErrorBoundary } from '../elements/ErrorBoundary';
import { x } from '@xstyled/emotion';
import { useRouter } from 'next/router';
import { Providers } from '../elements/Providers';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';


function MyApp(
  { Component, pageProps }: AppProps,
  session: Session | null | undefined
) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      <Providers>
        {router.asPath === '/' ? (
          // Auth page (login or signup)
          <Component {...pageProps} />
        ) : (
          <x.div h="100vh" display="flex">
            {/* <Sidebar /> */}
            <x.div h="full" overflowY="auto" flex={1}>
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
            </x.div>
          </x.div>
        )}
      </Providers>
    </SessionProvider>
  );
}

export default MyApp;
