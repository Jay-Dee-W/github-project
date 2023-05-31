import { TeamPageQuery as TeamPageQueryTypes } from '@github/relay/__generated__/TeamPageQuery.graphql';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { PullRequest } from './PullRequests/PullRequestFragment';

export const TeamPRFragment = graphql`
fragment TeamPRs on PullRequest {
  title
  createdAt
  labels(first: 5 ) {
    nodes {
      name
      createdAt
    }
  }
}
`

export const TeamPageQuery = graphql`
query TeamPageQuery {
  JDWilson: search(
    query: "org:GitStartHQ assignee:jay-dee-w type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ...TeamPRs
    }
  }
}
`

interface TeamPageProps {
    queryRef: PreloadedQuery<TeamPageQueryTypes>;
  }
  
  export const Team = ({ queryRef }: TeamPageProps) => {
  
    const data = usePreloadedQuery(TeamPageQuery, queryRef);
   
    return (
      <div className='App'>
        <p> @JD Wilson </p>
        <p>
            {JSON.stringify(data)}
        {data.JDWilson.nodes?.map(pr => {
          return(
            
              <PullRequest props={pr} />
            })}
            
          )})}
          </p>
          </div>
          );
        }

// export {}