import type { NextPage } from 'next';
import Head from 'next/head';
import { useQueryLoader } from '@github/relay/useQueryLoader';
import { TeamPageQuery as TeamPageQueryTypes } from '@github/relay/__generated__/TeamPageQuery.graphql';
import { Team, TeamPageQuery } from "../domains/Team";



const TeamPage: NextPage = () => {
 
  const { queryRef } = useQueryLoader<TeamPageQueryTypes>(
    TeamPageQuery,
    { fetchPolicy: 'store-and-network' }
  );


  return (
    <>
      <Head>
        <title>GitStart Team Hustle</title>
      </Head>
      {queryRef ? <Team queryRef={queryRef} /> : null}
    </>
  );
};

export default TeamPage;
