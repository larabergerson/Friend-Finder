// link routes to "data" sources.
var friendsData = require("../data/friends");

//  ROUTING

module.exports = function(app) {
  // API GET Requests -> Below code handles when users "visit" a page.

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  // API POST Requests -> user submits a form (data) to server.


  app.post("/api/friends", function(req, res) {
    
    if (friendsData.length < 10) {
      friendsData.push(req.body);
      res.json(true);
    }
    else {
      res.json(false);
    }
  });

//   // clear table

//   app.post("/api/clear", function(req, res) {
//     friendsData.length = 0;
  

//     res.json({ ok: true });
//   });
// };
}
