import express from 'express';
import path from 'path';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
//uses json on response/request (s)
app.use(express.json());
//uses static path to the frontend
app.use(express.static(path.resolve(__dirname, '../public')));

//create http server
const httpServer = createServer(app);
//create io connection w server
const io = new Server(httpServer);

//array to save clients/sockets
let clients: Socket[] = [];

//event to monitoring clients: connection/disconnect
io.on("connection", (socket: Socket) => {
  console.log('💡️ client connected!', socket.id);
  clients.push(socket);

  socket.on("disconnect", (reason) => {
    console.log('🚨️ Client disconnected!', reason);
    clients.splice(clients.indexOf(socket), 1);
    clients = clients.filter(client => client.id !== socket.id);
  });
});

app.post('/send-msg', (request, response) => {
  const { msg } = request.body;

  for(const client of clients) {
    client.emit('msg', msg);
  }

  response.send();
});

//httpServer listen
httpServer.listen(3000, () => {
  console.log('🚀️ Server is working!');
});