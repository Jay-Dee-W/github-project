import type { NextPage } from 'next';
import Head from 'next/head';
import { useQueryLoader } from '@github/relay/useQueryLoader';
import { BluemegPageQuery as BluemegPageQueryTypes } from '@github/relay/__generated__/BluemegPageQuery.graphql';
import { Bluemeg, BluemegPageQuery } from "../domains/Bluemeg";



const BluemegPage: NextPage = () => {
 
  const { queryRef } = useQueryLoader<BluemegPageQueryTypes>(
    BluemegPageQuery,
    { fetchPolicy: 'store-and-network' }
  );


  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      {queryRef ? <Bluemeg queryRef={queryRef} /> : null}
    </>
  );
};

export default BluemegPage;
