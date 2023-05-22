
//  import  {MembersList}  from '@github/domains/Memebers/MembersList';
import { MurculPageQuery as MurculPageQueryTypes } from '@github/relay/__generated__/MurculPageQuery.graphql';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';

export const MurculPageQuery = graphql`
query MurculPageQuery {
  organization(login: "GitstartHQ") {
    team(slug: "team-hustle") {
      repositories(query: "Murcul") {
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
              labels(first: 5) {
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

interface MurculPageProps {
  queryRef: PreloadedQuery<MurculPageQueryTypes>;
}

export const Murcul = ({ queryRef }: MurculPageProps) => {

  const data = usePreloadedQuery(MurculPageQuery, queryRef);
  // const repos = viewer?.organization?.team?.repositories?.nodes?.filter((repo) => ( !repo?.isArchived )) || [];
console.log(JSON.stringify(data))

  return (
    <div className='App'>
      <h1>repos</h1>
      <p>
      {JSON.stringify(data)}
      </p>
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
