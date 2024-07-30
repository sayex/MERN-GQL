const {Posts, Users} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
	Query: {
		getPosts: async function (parent, args, context){
			// if(!context.user){
			// 	throw new Error('You must be logged in')
			// }
			return await Posts.find()
		},
		getUser: async function (parent,args, context){
				if(!context.user){
				throw new Error('You must be logged in')
			}
			return await Users.findById(context.user._id)
				}
	},
	Mutation: {
		addPost: async function(parent, args){
			return await Posts.create(args)
		},
		addUser: async function(parent, args){
			const user = await Users.create(args);
			const token = signToken(user);
			return {token, user}
		},
		login: async function(parent, {email, password}) {
			const user = await Users.findOne({email});
			 if(!user){
				throw AuthenticationError
			 }
			const correctPassword = await user.isCorrectPassword(password)

			if(!correctPassword){
				throw AuthenticationError
			}

			const token = signToken(user);
			return {token, user}
		}
	},
}


module.exports = resolvers