# realtime-nodejs-server-example
A real-time node.js server example build with typescript

**This example of a real-time node.js server is built with socket.io and express.**

It contains the server and the static frontend, just pure html and js.
When starting the server and open in the browser accessing port 3000 the connection is established and it is possible to see in the server logs the id information of this client that has connected.

Download the project dependencies by running:
`yarn` or `npm install` on terminal

Start the server with the command:
```
yarn dev:server
``` 
or
```
npm run dev:server
```

After starting the [server](http://localhost:3000) and accessing it. The connection is established.

It is possible to send a message to the server, and the server will transmit the message **instantly** to all connected clients. You can see the result in the **frontend**. The messages are added to a div 'responses'.

Submit a **post** at the endpoint: `http://localhost:3000/send-msg.`
Send a JSON with the desired message:
```json
{
	"msg": "Your message is here"
}
```