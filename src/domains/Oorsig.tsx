
//  import  {MembersList}  from '@github/domains/Memebers/MembersList';
import { OorsigPageQuery as OorsigPageQueryTypes } from '@github/relay/__generated__/OorsigPageQuery.graphql';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';

export const OorsigPageQuery = graphql`
query OorsigPageQuery {
  organization(login: "GitstartHQ") {
    team(slug: "team-hustle") {
      repositories(query: "Oorsig") {
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

interface OorsigPageProps {
  queryRef: PreloadedQuery<OorsigPageQueryTypes>;
}

export const Oorsig = ({ queryRef }: OorsigPageProps) => {

  const data = usePreloadedQuery(OorsigPageQuery, queryRef);
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
