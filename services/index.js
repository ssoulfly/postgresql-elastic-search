module.exports = {
  users: {
    register: require("./user/register").register,
    all: require("./user/all").all,
    login: require("./user/login").login,
    profile: require("./user/profile").profile,
    update: require("./user/update").update,
    delete: require("./user/delete").delete,
    getPosts: require("./post/getUserPosts").getUserPosts,
    getComments: require("./post/getUserComments").getUserComments,
  },
  statistics: {
    getUserStats: require("./statistics/userStats").getUserStats,
    getCategoryStats: require("./statistics/categoryStats").getCategoryStats,
    getAnnualyBlogStats: require("./statistics/getAnnualyBlogStats")
      .getAnnualyBlogStats,
    getMonthlyBlogStats: require("./statistics/getMonthlyBlogStats")
      .getMonthlyBlogStats,
    getWeeklyBlogStats: require("./statistics/getWeeklyBlogStats")
      .getWeeklyBlogStats,
  },
  posts: {
    createPost: require("./post/createPost").createPost,
    getAllPosts: require("./post/getAllPosts").getAllPosts,
    getUser: require("./post/getUserPosts").getUserPosts,
    deletePost: require("./post/deletePost").deletePost,
    getPost: require("./post/getPost").getPost,
    updatePost: require("./post/updatePost").updatePost,
    getComments: require("./post/getPostComments").getPostComments,
    createComment: require("./post/createComment").createComment,
    deleteComment: require("./post/deleteComment").deleteComment,
  },
};
