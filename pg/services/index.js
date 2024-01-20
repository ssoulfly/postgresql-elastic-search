module.exports = {
  users: {
    register: require("./user/register").register,
    all: require("./user/users").users,
    getUser: require("./user/getUser").getUser,
    updateUser: require("./user/updateUser").updateUser,
    deleteUser: require("./user/deleteUser").deleteUser,
  },
  post: {
    createPost: require("./post/createPost").createPost,
    deletePost: require("./post/deletePost").deletePost,
    getPost: require("./post/getPost").getPost,
    getPosts: require("./post/getPosts").getPosts,
    updatePost: require("./post/updatePost").updatePost,
    getComments: require("./post/getPostComments").getPostComments,
    createComment: require("./post/createComment").createComment,
    deleteComment: require("./post/deleteComment").deleteComment,
    getUserComments: require("./post/getUserComments").getUserComments,
  },
};
