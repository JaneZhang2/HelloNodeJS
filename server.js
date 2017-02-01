const http = require('http');
const app = http.createServer((req, res) => {
  console.log("INCOMING REQUEST: " + req.method + " " + req.url);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(JSON.stringify({error: null}) + "\n");
});
app.listen(8080);
