const http = require("http");
const plate = require("./plate");

const hostname = "127.0.0.1";
const port = process.env.PORT || 4000;
const template = "./template/index.html";

const server = http.createServer(async(req, res) => {
  const data = await plate(template, {name: "Ada the pro"})
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(data);
}); 

server.listen(port,hostname, () => {
  console.log(`Server is running on ${hostname}:${port}`);
});