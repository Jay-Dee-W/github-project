import Head from 'next/head';
import type { NextPage } from 'next';
import { signOut } from 'next-auth/react';


const AuthPage: NextPage = () => {

  return (
    <>
    <Head>
      <title>Githhub Project</title>
    </Head>
    <button onClick={() => signOut()}>sign out</button>
  </>

  );
};

export default AuthPage;
