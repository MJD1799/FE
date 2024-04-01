
/* Client Code 

let sse = new EventSource("http://localhost:8080/stream");
sse.onmessage = console.log

*/

const app = require('express')();

let i = 0;
function send(res) {
  res.write("data: " + `hello from ${serverName} ---- [${i++}]\n\n`);
  setTimeout(() => send(res), 1000);
}

app.get('/', (req, res) => {
  res.send('Hello Server Sent Example!!!');
});

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  send(res);
});


const port = process.env.PORT || 8888;
const serverName = process.env.SERVER_NAME || "sample";

app.listen(port);
console.log(`Listening on ${port}`)