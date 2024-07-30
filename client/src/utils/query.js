import {gql} from "@apollo/client";

export const QUERY_POSTS = gql`
query Posts {
  getPosts {
    _id
    createdAt
    postText
    username
  }
}`