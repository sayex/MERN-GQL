const typeDefs = `

type User {
	_id: ID
	username: String!
	email: String!
	password: String!
	posts: [Post]
}

type Auth {
	token: ID!
	user: User
	}

type Post {
	_id: ID
	createdAt: String
	postText: String!
	username: String!
}
type Query {
	getPosts: [Post]             
	getUser: User
}

type Mutation {
 addPost(postText: String!, username: String!): Post
 addUser(username: String!, email: String!, password: String!): Auth
 login(email: String!, password: String!): Auth
}
`;





module.exports = typeDefs