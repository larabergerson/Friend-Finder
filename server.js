// DEPENDENCIES
// Series of npm packages to give the server functionality
var express = require("express");

// Communicate to node that we need an "express" server
var app = express();

// Set initial port.
var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER - points server to "route" files -> maps out how server should respond
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER -> starts/initiated the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
