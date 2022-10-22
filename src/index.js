require("./config/index");
const app = require("./app");
const server = require("http").createServer(app);
const PORT = process.env.PORT ||8080;
server.listen(PORT, () => {
  console.log(`server listen in port: ${PORT}`);
});
