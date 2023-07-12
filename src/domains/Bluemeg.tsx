
//  import  {MembersList}  from '@github/domains/Memebers/MembersList';
import { BluemegPageQuery as BluemegPageQueryTypes } from '@github/relay/__generated__/BluemegPageQuery.graphql';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';

export const BluemegPageQuery = graphql`
query BluemegPageQuery {
  organization(login: "GitstartHQ") {
   hustle: team(slug: "team-hustle") {
      repositories(query: "bluemeg") {
        nodes {
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
    bluemeg: team(slug: "bluemeg-team") {
      repositories(query: "bluemeg") {
        nodes {
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

interface BluemegPageProps {
  queryRef: PreloadedQuery<BluemegPageQueryTypes>;
}

export const Bluemeg = ({ queryRef }: BluemegPageProps) => {

  const data = usePreloadedQuery(BluemegPageQuery, queryRef);
  // const repos = viewer?.organization?.team?.repositories?.nodes?.filter((repo) => ( !repo?.isArchived )) || [];
console.log(JSON.stringify(data))

const Hustel = data.organization?.hustle?.repositories?.nodes?.map(repos => repos?.pullRequests.nodes)
console.log("Hustel:", Hustel)
  return (
    <div className='App'>
      <h1>repos</h1>
      <p> @JD Wilson </p>
      {Hustel?.flatMap( (repos) => 
      repos?.map(prs =>{
            return(
              <p>
                {prs?.createdAt}
                {prs?.labels}
                {prs?.url}
              </p>
            )}))} 
      </div>
  );
}
