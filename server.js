const express = require("express");
const serverStatic = require("express-serve-static-core");
const enforce = require("express-sslify");
const history = require("connect-history-api-fallback");

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(serverStatic(__dirname + "/dist"));
app.use(history());

const app = express();
app.listen(process.env.PORT || 5000);

process.on("uncaughtException", err => {
  console.log(err);
})