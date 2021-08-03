const postsResolvers = require('./posts');
const usersResolvers = require('./user');
const commentsResolvers = require('./comments');


module.exports = {
    // whenenver a post is returned, it will go thru this modifier 
    // and apply these modifications
    Post: {
        likeCount(parent){
            // console.log(parent);
            return parent.likes.length;
        },

        commentCount(parent){
            return parent.comments.length;
        }


    },

    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation
    },

    // Subscription: {
    //     ...postsResolvers.Subscription
    // }
};