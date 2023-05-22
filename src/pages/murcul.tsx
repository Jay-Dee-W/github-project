import type { NextPage } from 'next';
import Head from 'next/head';
import { useQueryLoader } from '@github/relay/useQueryLoader';
import { MurculPageQuery as MurculPageQueryTypes } from '@github/relay/__generated__/MurculPageQuery.graphql';
import { Murcul, MurculPageQuery } from "../domains/Murcul";



const MurculPage: NextPage = () => {
 
  const { queryRef } = useQueryLoader<MurculPageQueryTypes>(
    MurculPageQuery,
    { fetchPolicy: 'store-and-network' }
  );


  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      {queryRef ? <Murcul queryRef={queryRef} /> : null}
    </>
  );
};

export default MurculPage;
