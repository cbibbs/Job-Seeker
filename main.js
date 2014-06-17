var express     = require("express");
var cors        = require("utils/cors");
var jobSeekerRest     = require("services/jobSeekerRest");

// App instance
var app = express();

// Support JSON bodies
app.use(express.json());

// Enable cors
cors(app);

// Setup Rest interfaces
jobSeekerRest(app);

var server = app.listen(Number(process.env.PORT || 5757), function() {
  console.log("Listening on port %d", server.address().port);
});

