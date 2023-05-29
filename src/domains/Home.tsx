
//  import  {MembersList}  from '@github/domains/Memebers/MembersList';
import { HomePageQuery as HomePageQueryTypes } from '@github/relay/__generated__/HomePageQuery.graphql';
import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';

export const HomePageQuery = graphql`
query HomePageQuery {
  JDWilson: search(
    query: "org:GitStartHQ assignee:jay-dee-w type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ... on PullRequest {
        title
        createdAt
        labels(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  }
  WajihaNiazi: search(
    query: "org:GitStartHQ assignee:WajihaNiazi type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ... on PullRequest {
        title
        createdAt
        labels(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  }
  Janvier: search(
    query: "org:GitStartHQ assignee:Mjanuary type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ... on PullRequest {
        title
        createdAt
        labels(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  }
  Fred_Rwagatenga: search(
    query: "org:GitStartHQ assignee:rwagatenga type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ... on PullRequest {
        title
        createdAt
        labels(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  }
  Aqida: search(
    query: "org:GitStartHQ assignee:AqidaHaidari type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ... on PullRequest {
        title
        createdAt
        labels(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  }
  Sayed: search(
    query: "org:GitStartHQ assignee:FaridQattali type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ... on PullRequest {
        title
        createdAt
        labels(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  }
  Pascal: search(
    query: "org:GitStartHQ assignee:passy4ucj type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ... on PullRequest {
        title
        createdAt
        labels(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  }
  Sheldon: search(
    query: "org:GitStartHQ assignee:sheldon-welinga type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ... on PullRequest {
        title
        createdAt
        labels(first: 5) {
          nodes {
            name
          }
        }
      }
    }
  }
  Hashim: search(
    query: "org:GitStartHQ assignee:hashimaziz46 type:pr state:open created:>2023-03-01 "
    type: ISSUE
    first: 100
  ) {
    nodes {
      ... on PullRequest {
        title
        createdAt
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
      <p> @JD Wilson </p>
      <p>
      {/* {JSON.stringify(data.JDWilson.nodes)} */}
      {data.JDWilson.nodes?.map(pr => {
        return(
          <p>- {pr?.title} {pr?.createdAt} {pr?.labels?.nodes?.map(lable => ` **${lable?.name}** `) }</p>
        )
        })}
      </p>
      <p> @Wajiha Niazi </p>
      <p>
      {/* {JSON.stringify(data.WajihaNiazi.nodes)} */}
      {data.WajihaNiazi.nodes?.map(pr => {
        return(
          <p>- {pr?.title} {pr?.createdAt} {pr?.labels?.nodes?.map(lable => ` **${lable?.name}** `) }</p>
        )
        })}
      </p>
      <p> @Hashim </p>
      <p>
      {/* {JSON.stringify(data.Hashim.nodes)} */}
      {data.Hashim.nodes?.map(pr => {
        return(
          <p>- {pr?.title} {pr?.createdAt} {pr?.labels?.nodes?.map(lable => ` **${lable?.name}** `) }</p>
        )
        })}
      </p>
      <p> @Sheldon </p>
      <p>
      {/* {JSON.stringify(data.Sheldon.nodes)} */}
      {data.Sheldon.nodes?.map(pr => {
        return(
          <p>- {pr?.title} {pr?.createdAt} {pr?.labels?.nodes?.map(lable => ` **${lable?.name}** `) }</p>
        )
        })}
      </p>
      <p> @Janvier </p>
      <p>
      {/* {JSON.stringify(data.Janvier.nodes)} */}
      {data.Janvier.nodes?.map(pr => {
        return(
          <p>- {pr?.title} {pr?.createdAt} {pr?.labels?.nodes?.map(lable => ` **${lable?.name}** `) }</p>
        )
        })}
      </p>
      <p> @Aqida </p>
      <p>
      {/* {JSON.stringify(data.Aqida.nodes)} */}
      {data.Aqida.nodes?.map(pr => {
        return(
          <p>- {pr?.title} {pr?.createdAt} {pr?.labels?.nodes?.map(lable => ` **${lable?.name}** `) }</p>
        )
        })}
      </p>
      <p> @Sayed </p>
      <p>
      {/* {JSON.stringify(data.Sayed.nodes)} */}
      {data.Sayed.nodes?.map(pr => {
        return(
          <p>- {pr?.title} {pr?.createdAt} {pr?.labels?.nodes?.map(lable => ` **${lable?.name}** `) }</p>
        )
        })}
      </p>
      <p> @Pascal </p>
      <p>
      {/* {JSON.stringify(data.Pascal.nodes)} */}
      {data.Pascal.nodes?.map(pr => {
        return(
          <p>- {pr?.title} {pr?.createdAt} {pr?.labels?.nodes?.map(lable => ` **${lable?.name}** `) }</p>
        )
        })}
      </p>
      <p> @Fred_Rwagatenga </p>
      <p>
      {/* {JSON.stringify(data.Fred_Rwagatenga.nodes)} */}
      {data.Fred_Rwagatenga.nodes?.map(pr => {
        return(
          <p>- {pr?.title} {pr?.createdAt} {pr?.labels?.nodes?.map(lable => ` **${lable?.name}** `) }</p>
        )
        })}
      </p>
    </div>
  );
}
