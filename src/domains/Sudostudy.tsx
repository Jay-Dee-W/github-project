
//  import  {MembersList}  from '@github/domains/Memebers/MembersList';
import { SudostudyPageQuery as SudostudyPageQueryTypes } from '@github/relay/__generated__/SudostudyPageQuery.graphql';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';

export const SudostudyPageQuery = graphql`
query SudostudyPageQuery {
    organization(login: "GitstartHQ") {
      team(slug: "team-hustle") {
        repositories(query: "Sudostudy") {
          nodes {
            pullRequests(
              first: 100
              states: OPEN
              orderBy: {field: CREATED_AT, direction: ASC}
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

interface SudostudyPageProps {
  queryRef: PreloadedQuery<SudostudyPageQueryTypes>;
}

export const Sudostudy = ({ queryRef }: SudostudyPageProps) => {

  const data = usePreloadedQuery(SudostudyPageQuery, queryRef);
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
