/* Client Code 

const exampleSocket = new WebSocket("ws://localhost:8080");

// send data to server
exampleSocket.send("hello from client!!");

// recevie data from server
exampleSocket.onmessage = (event) => {
  console.log(event.data);
};
*/



const app = require('express')();
const { WebSocketServer } = require('ws');
const port = 8080;


app.get("/", (_, res) => {
  res.send('Web socket example');
});

const server = app.listen(port, () => {
  console.log('Server is lisening....', port);
});



const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log('data come from client:%s', data);
    ws.send('ACK from server');
  });
});