import type { PullRequestComponent_PullRequest$key } from '../../relay/__generated__/PullRequestComponent_PullRequest.graphql';

import { graphql, useFragment } from 'react-relay';

type Props = {
  PullRequest: PullRequestComponent_PullRequest$key,
};

export const PullRequest = (props: Props) => {
  const data = useFragment(
    graphql`
    fragment PullRequestFragment on PullRequest {
        title
        createdAt
        labels(first: 5 ) {
        nodes {
            name
            createdAt
            }
        }
    }
    `,
    props.PullRequest,
  );

  return (
    <div>
      - {data?.title}
      {data?.createdAt}
      {data?.labels?.nodes?.map((label, i) => {
        if (data?.labels?.nodes?.length) {
          return (i === data?.labels?.nodes?.length - 1 ? ` **${label?.name}** ` : ` ${label?.name} `);
        }
        return null;
      })};

    </div>
  );
}
