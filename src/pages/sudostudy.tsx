import type { NextPage } from 'next';
import Head from 'next/head';
import { useQueryLoader } from '@github/relay/useQueryLoader';
import { SudostudyPageQuery as SudostudyPageQueryTypes } from '@github/relay/__generated__/SudostudyPageQuery.graphql';
import { Sudostudy, SudostudyPageQuery } from "../domains/Sudostudy";



const SudostudyPage: NextPage = () => {
 
  const { queryRef } = useQueryLoader<SudostudyPageQueryTypes>(
    SudostudyPageQuery,
    { fetchPolicy: 'store-and-network' }
  );


  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      {queryRef ? <Sudostudy queryRef={queryRef} /> : null}
    </>
  );
};

export default SudostudyPage;
