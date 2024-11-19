const http = require("http");
http
  .createServer((req, res) => {
    res.write("<h1>Hi My Name Is Dishant Sangani</h1>");
    res.end();
  })
  .listen(2700);

// Otherway
// const http = require("http");
// function dev(req, res) {
//   res.write("<h1>Hi My Name Is Dishant Sangani</h1>");
//   res.end();
// }
// http.createServer(dev).listen(2700);
