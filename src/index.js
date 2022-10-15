// require("./config/index");
const app = require("./app");
const server = require("https").createServer(app);
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`server listen in port: ${PORT}`);
});
