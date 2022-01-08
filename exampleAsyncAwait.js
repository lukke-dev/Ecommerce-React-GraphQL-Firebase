fetch("endpoint.com/users")
  .then((resp) => resp.json())
  .then((users) => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch("endpoint.com/posts?userid=" + firstUser.id);
  })
  .then((resp) => resp.json)
  .then((posts) => console.log(posts));

const myAsynAwayFunction = async () => {
  const usersResponse = await fetch("endpoint.com/users");
  const users = await usersResponse.json();
  const firstUser = users[0];
  const postsResponse = await fetch(
    "endpoint/com/posts?userId=" + firstUser.id
  );
  const postsFirstUser = await postsResponse.json();
  return postsFirstUser;
};
