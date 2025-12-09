## Top Level Await

since es2022 we can now use **await** keyword ouside of async function. but only in modules

```js
const getLastPost = async function (params) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // <>
  const data = await res.json();

  return {
    title: data.at(-1).title, //
    text: data.at(-1).body,
  };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not Clean
// lastPost.then((res) => console.log(res));

const lastPost2 = await getLastPost();
console.log(lastPost2);
```
