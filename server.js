var express = require("express");
var path = require("path");
var CoinMarketCap = require("node-coinmarketcap-rest-api");

var coinmarketcap = new CoinMarketCap();
var app = express();

//CORS middleware
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};

//app.configure(function() {
//app.use(express.favicon());
//app.use(express.logger("dev"));
app.use(allowCrossDomain);
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
//app.use(express.static(path.join(__dirname, "public")));
//});

/**
 * Root
 */
app.get("/api/", function(req, res) {
  res.set("Content-Type", "text/plain");
  res.send("CoinMarketCap API is running...");
});

app.get("/api/cryptocurrency", function(req, res) {
  coinmarketcap.getAllTickers(coins => {
    res.send(coins.getTop(100));
  });
});

app.get("/api/cryptocurrency/:symbol", function(req, res) {
  coinmarketcap.getAllTickers(coins => {
    res.send(coins.get(req.params.symbol));
  });
});

app.get("/api/global_data", function(req, res) {
  coinmarketcap.getGlobalData(data => {
    res.send(data);
  });
});

app.use(express.static(__dirname + "./dist/CryptoWatcher/"));
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "./dist/CryptoWatcher/index.html"));
});

app.listen(process.env.PORT || 8080);
