console.log("Hello via Bun!")

const server = Bun.serve({
  routes: {
    '/': () => {
      return Response.json("ok")
    }
  }
})

console.log(`Serving server in ${ server.hostname }:${ server.port }`)