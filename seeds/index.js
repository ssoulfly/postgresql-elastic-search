const services = require("../services");

module.exports = async () => {
  const registed = await services.users.register({
    email: "mhmmtykt76@gmail.com",
    fullname: "Muhammed Yikit",
    password: "StrongPassword.123",
    passwordAgain: "StrongPassword.123",
  });
  const user = await services.users.profile(registed.token);
  const createdPost = await services.posts.createPost({
    title: "Lorem Ipsum",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac elit mi. Donec vehicula, leo eu vestibulum venenatis, lectus ante egestas felis, et iaculis eros nulla vel lectus. Cras a magna dolor. Mauris lacinia convallis nisi sed viverra. Vivamus ac lorem vitae est aliquet lacinia. Aliquam sed leo vel purus scelerisque facilisis. Mauris id nisi non eros faucibus bibendum sed id nibh. Mauris libero risus, molestie ac augue eget, finibus viverra nibh. Aenean sem mauris, semper sit amet egestas ut, hendrerit in purus.
    Donec nec tempus quam. In ut lectus at sapien vehicula scelerisque. Phasellus nibh elit, tincidunt quis magna vitae, dignissim sodales ante. Integer auctor, tellus nec gravida posuere, dolor risus maximus enim, at consequat ipsum nibh nec mauris. Donec ac sapien tincidunt ligula mollis cursus. Proin tristique egestas lorem hendrerit consectetur. Pellentesque vehicula eget odio et accumsan. Morbi dolor ante, faucibus ac elit sed, sollicitudin interdum nisl. Donec eget lorem at magna finibus blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce vitae neque ac nibh consectetur molestie sed eget lacus. Fusce finibus elementum lectus, et tristique massa. Suspendisse potenti. Etiam a orci in nisl dictum tincidunt sit amet et velit. In hac habitasse platea dictumst. Aliquam cursus massa libero, et blandit mauris ultrices condimentum.
    Sed scelerisque ultrices lacus eu lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque eu purus ultrices, commodo mauris vitae, posuere est. Pellentesque eget nunc id urna pellentesque luctus sit amet ac dolor. Sed ac justo quis eros feugiat posuere. Proin quis purus sodales, aliquet neque non, mattis dolor. Nunc auctor aliquet velit vitae rhoncus. Nam et tortor risus. Nulla ut felis suscipit, congue nulla non, sodales nisl. Quisque malesuada, elit eget vestibulum elementum, lorem nunc condimentum tellus, quis ultricies ipsum erat vel urna. Praesent sed nisl risus. Vivamus eget diam non est vehicula finibus. Donec suscipit ex orci, ac tempus urna eleifend auctor.
    Praesent tincidunt augue ut suscipit vulputate. Pellentesque ac arcu tortor. Morbi aliquam consequat quam, eu sollicitudin justo maximus non. Donec euismod dui quis diam mollis lobortis. Maecenas libero mi, ornare vel tempor et, molestie ut magna. Phasellus tempor, ipsum ac ornare imperdiet, lectus lorem mattis metus, eget dictum turpis turpis eget nibh. Vestibulum porttitor quam at convallis aliquet. Pellentesque sollicitudin arcu quis lorem efficitur suscipit. Sed aliquam elit est, sit amet mattis purus convallis rutrum. Curabitur et aliquet velit. Aliquam et purus sapien. Ut faucibus fermentum velit vitae sodales.
    Nulla tempor tellus non lorem vulputate gravida. Donec ac lacus nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent lobortis arcu massa, convallis pretium libero bibendum quis. Integer eu vehicula enim. Sed aliquet lacinia tellus, vel tempus nibh mattis nec. Phasellus nunc nibh, lobortis sed quam eu, vulputate sodales tortor.`,
    category: "technology",
    userId: user.id,
  });
  const createdComment = await services.posts.createComment({
    postId: createdPost.id,
    userId: user.id,
    content: "That's looking goodddd.",
  });

  console.log("Example data inserted.", {
    registed,
    user,
    createdPost,
    createdComment,
  });
};
