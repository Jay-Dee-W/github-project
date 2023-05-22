import type { NextPage } from 'next';
import Head from 'next/head';
import { useQueryLoader } from '@github/relay/useQueryLoader';
import { HomePageQuery as HomePageQueryTypes } from '@github/relay/__generated__/HomePageQuery.graphql';
import { Home, HomePageQuery } from "../domains/Home";



const HomePage: NextPage = () => {
 
  const { queryRef } = useQueryLoader<HomePageQueryTypes>(
    HomePageQuery,
    { fetchPolicy: 'store-and-network' }
  );


  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      {queryRef ? <Home queryRef={queryRef} /> : null}
    </>
  );
};

export default HomePage;
