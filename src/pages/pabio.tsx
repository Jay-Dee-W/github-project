import type { NextPage } from 'next';
import Head from 'next/head';
import { useQueryLoader } from '@github/relay/useQueryLoader';
import { PabioPageQuery as PabioPageQueryTypes } from '@github/relay/__generated__/PabioPageQuery.graphql';
import { Pabio, PabioPageQuery } from "../domains/Pabio";



const PabioPage: NextPage = () => {
 
  const { queryRef } = useQueryLoader<PabioPageQueryTypes>(
    PabioPageQuery,
    { fetchPolicy: 'store-and-network' }
  );


  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      {queryRef ? <Pabio queryRef={queryRef} /> : null}
    </>
  );
};

export default PabioPage;
