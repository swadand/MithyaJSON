[![.github/workflows/render-publish.yml](https://github.com/swadand/mithya-json/actions/workflows/render-publish.yml/badge.svg)](https://github.com/swadand/mithya-json/actions/workflows/render-publish.yml)

# Dummy Json Data Api


A partial __MVC__ project inspired from <a href="https://dummyjson.com/">DummyJson</a>.

## Usage

```js
//Just use fetch()
async function Fetch(){
  const data = await fetch("http://localhost:8080/users/").then(response => response.json());
  console.log(data);
  }
Fetch();
```
