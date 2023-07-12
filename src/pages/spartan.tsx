import type { NextPage } from 'next';
import Head from 'next/head';
import { useQueryLoader } from '@github/relay/useQueryLoader';
import { SpartanPageQuery as SpartanPageQueryTypes } from '@github/relay/__generated__/SpartanPageQuery.graphql';
import { Spartan, SpartanPageQuery } from "../domains/Spartan";



const SpartanPage: NextPage = () => {
 
  const { queryRef } = useQueryLoader<SpartanPageQueryTypes>(
    SpartanPageQuery,
    { fetchPolicy: 'store-and-network' }
  );


  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      {queryRef ? <Spartan queryRef={queryRef} /> : null}
    </>
  );
};

export default SpartanPage;
