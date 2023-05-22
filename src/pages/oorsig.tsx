import type { NextPage } from 'next';
import Head from 'next/head';
import { useQueryLoader } from '@github/relay/useQueryLoader';
import { OorsigPageQuery as OorsigPageQueryTypes } from '@github/relay/__generated__/OorsigPageQuery.graphql';
import { Oorsig, OorsigPageQuery } from "../domains/Oorsig";



const OorsigPage: NextPage = () => {
 
  const { queryRef } = useQueryLoader<OorsigPageQueryTypes>(
    OorsigPageQuery,
    { fetchPolicy: 'store-and-network' }
  );


  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      {queryRef ? <Oorsig queryRef={queryRef} /> : null}
    </>
  );
};

export default OorsigPage;
