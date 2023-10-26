// 1. import json-server
const jsonserver = require('json-server')

// 2. Create a server for media app
const mediaAppServer = jsonserver.create()

// 3. set up path for db.json file
const router = jsonserver.router('db.json')

// 4. return a middleware used by the jsonserver
const middleware = jsonserver.defaults()

// 5. setup a port number
const port = process.env.PORT || 4000

// 6. use middleware in app
mediaAppServer.use(middleware)
mediaAppServer.use(router)

// 7. To listen for resolving requests from client


mediaAppServer.listen(port,()=>{
    console.log('listening on port' +port);
})