import gql from "graphql-tag";

const getPullRequest = gql`
  query(
    $login: String!
    $repo: String!
    $pullRequestsCount: Int
  ) {
    organization(login: $login) {
      name
      url
      login
      repository(name: $repo) {
        name
        pullRequests(last: $pullRequestsCount) {
          edges {
            node {
              id
              title
              createdAt
              author {
                url
                avatarUrl
              }
   
            }
          }
        }
      }
    }
  }
`

export {getPullRequest};