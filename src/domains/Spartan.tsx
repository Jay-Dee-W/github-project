
//  import  {MembersList}  from '@github/domains/Memebers/MembersList';
import { SpartanPageQuery as SpartanPageQueryTypes } from '@github/relay/__generated__/SpartanPageQuery.graphql';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';

export const SpartanPageQuery = graphql`
query SpartanPageQuery {
  organization(login: "GitstartHQ") {
    team(slug: "Coherent_Team") {
      repositories(first: 100) {
        nodes {
          name
          pullRequests(
            first: 100, 
            states: OPEN, 
            orderBy: { field: CREATED_AT, direction: ASC }
          ) {
            nodes {
              title
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

interface SpartanPageProps {
  queryRef: PreloadedQuery<SpartanPageQueryTypes>;
}

export const Spartan = ({ queryRef }: SpartanPageProps) => {

  const data = usePreloadedQuery(SpartanPageQuery, queryRef);
  const repos = data.organization?.team?.repositories?.nodes;
console.log(JSON.stringify(repos))
let totalPR = 0 
  return (
    <div className='App'>
      <h1>repos</h1>
      <p>
      {repos?.map( repos => {
        if (repos?.pullRequests?.nodes?.length) totalPR=totalPR + repos?.pullRequests?.nodes?.length 

        return(
          <div>
          <p>
         {repos?.name}  {repos?.pullRequests?.nodes?.length}
          </p>
          {/* {repos?.pullRequests.nodes?.map(pr => 
                <div>
                  
                - [ {pr?.title} ]({pr?.url})
                      {pr?.labels?.nodes?.map((label, i) => {
                  if (pr?.labels?.nodes?.length) {
                    return (i === pr?.labels?.nodes?.length -1 ? ` **${label?.name}** ` : ` ${label?.name} `);
                  }
                return null; 
              })}
              {Math.floor( (new Date().getTime() -  new Date(pr?.createdAt.split('T')[0]).getTime())/ (1000 * 60 * 60 * 24) )}days
              </div>
            )} */}
          </div>
        ) }
         ) }
      </p>
      <p>Total Open PR's {totalPR}</p>
    </div>
  );
}
