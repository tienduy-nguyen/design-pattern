import fetch from 'node-fetch'

// CACHE PROXY EXAMPLE
interface API {
  get(url: string): Promise<any>
}
class FetchAPI implements API {
  async get(url: string) {
    let res = await fetch(url)
    let data = await res.json();

    return data;
  }
}

class CachedFetchAPI implements API {
  api: API
  cache: {}
  constructor() {
    this.api = new FetchAPI();
    this.cache = {};
  }

  async get(url: string) {
    if (!this.cache[url]) {
      return this.api.get(url).then(data => {
        console.log('---- Requesting data')
        this.cache[url] = data
        return data;
      });
    } else {
      console.log('---- Rerving cached data')
      return this.cache[url]
    }
  }
}


console.log('EXAMPLE-2 Cache Proxy')
const api = new CachedFetchAPI();
api
  .get('https://jsonplaceholder.typicode.com/todos')
  .then(data => console.log(data[0]))

setTimeout(() => {
  api
    .get('https://jsonplaceholder.typicode.com/todos')
    .then(data => console.log(data[0]))
}, 1000)

// fixes Cannot redeclare block-scoped variable 'api'.
export { }