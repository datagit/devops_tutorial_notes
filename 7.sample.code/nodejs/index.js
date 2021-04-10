const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT;

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 5000);
  });

  let result = await promise; // wait until the promise resolves (*)

  return result;
}
console.log("start call 1");
// f().then(r => {
// console.log("func f:", r);  
// });

const isF = f();
if (isF) {
  // this is ERROR, because it always run here
  console.log('this is ERROR, because it always run here');
}

console.log("start call 2.");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello 123 World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
