
//  import  {MembersList}  from '@github/domains/Memebers/MembersList';
import { PabioPageQuery as PabioPageQueryTypes } from '@github/relay/__generated__/PabioPageQuery.graphql';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';

export const PabioPageQuery = graphql`
query PabioPageQuery {
    search(
      query: "repo:GitstartHQ/client-pabio-firstquadrant-ai is:pr is:open"
      type: ISSUE
      first: 100
    ) {
      nodes {
        ... on PullRequest {
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
`;

interface PabioPageProps {
  queryRef: PreloadedQuery<PabioPageQueryTypes>;
}

export const Pabio = ({ queryRef }: PabioPageProps) => {

  const data = usePreloadedQuery(PabioPageQuery, queryRef);
  // const repos = viewer?.organization?.team?.repositories?.nodes?.filter((repo) => ( !repo?.isArchived )) || [];
console.log(data)

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
