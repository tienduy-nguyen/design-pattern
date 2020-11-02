/*
  Proxy Design Pattern
  Proxy is an object which works as a placeholder or substitute to any other object.
  proxy provides a similar interface to original object but extends the behaviour 
  of how the object will react to changes.
  
  There are mainly 5 types of proxies.
  - Remote Proxy
  - Virtual Proxy
  - Cache Proxy
  - Protection Proxy
  - Smart Proxy
  ▶️ Remote proxy acts as a translator between two remote origins and
    you can do stuff like logging the requests.
  ▶️ Cache proxy improves performance by caching any long running
    operation's results and serving the cached results instead of
    request the data every time from the original source.
  ▶️ Virtual proxy object is a default placeholder proxy that can be
    lazily initiated, we can think of it as a skeleton object which
    acts as the original object until the data loads.
  ▶️ Protection proxies mainly acts as a authentication layer for the
    original object. restricting unauthorized access to the object.
  ▶️ Smart proxies adds extra behaviours to the original object, for 
    example sending the data to any third-party API or logging the data
*/

interface IServer{
  request(url: string): void
}
class Server implements IServer{
  request(url: string){
    console.log("------");
    console.log("loading:    ", url);
    console.log("completed:  ", url);
    console.log("------");
  }
}
class ProtectedServer implements IServer{
  api: IServer;
  bannedWebsites: string[];
  constructor() {
    this.api = new Server();
    this.bannedWebsites = [
      "https://fakesite.com",
      "https://spamming.com",
      "https://harmfulsiteyoushouldvisit.com",
    ];
  }
  request(url: string) {
    if (this.bannedWebsites.includes(url)) {
      console.log("------");
      console.log("BANNED:    ", url);
      console.log("------");
    } else {
      this.api.request(url)
    }
  }
}

const server = new ProtectedServer();
console.log('Example1 Protedted proxy');
server.request('https://google.com')
server.request('https://fakesite.com')
server.request('https://facebook.com')