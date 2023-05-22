
//  import  {MembersList}  from '@github/domains/Memebers/MembersList';
import { HomePageQuery as HomePageQueryTypes } from '@github/relay/__generated__/HomePageQuery.graphql';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';

export const HomePageQuery = graphql`
query HomePageQuery {
  organization(login: "GitstartHQ") {
    team(slug: "team-hustle") {
      repositories(first: 100) {
        nodes {
          name
          pullRequests(
            first: 100, 
            states: OPEN, 
            orderBy: { field: CREATED_AT, direction: ASC }
          ) {
            nodes {
              createdAt
              url
              labels(last: 1) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

interface HomePageProps {
  queryRef: PreloadedQuery<HomePageQueryTypes>;
}

export const Home = ({ queryRef }: HomePageProps) => {

  const data = usePreloadedQuery(HomePageQuery, queryRef);
  // const repos = viewer?.organization?.team?.repositories?.nodes?.filter((repo) => ( !repo?.isArchived )) || [];
console.log(data)

  return (
    <div className='App'>
      <h1>repos</h1>
      {/* <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Open PRs</th>
            <th>Closed PRs</th>
          </tr>
        </thead>
        <tbody>
          {repos.map( (repo) => (
            <tr key={repo?.id}>
            <td>{repo?.name}</td>
            <td>{repo?.openPRs?.nodes?.length}</td>
            <td>{repo?.ClosedPRs?.nodes?.length}</td>
          </tr>
          ))}
        </tbody>
      </table> */}
        {/* <MembersList members={viewer?.organization?.team } /> */}
    </div>
  );
}
