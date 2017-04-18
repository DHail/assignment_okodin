var express = require("express");
var router = express.Router();

// ----------------------------------------
// Index
// ----------------------------------------
router.get("/", (req, res) => {

  res.render("login");
  // User.find({})
  //   .then(users => {
  //     res.render("users/login", {users});
  //   })
  //   .catch(e => res.status(500).send(e.stack));
});

router.get("/login", (req, res) => {
  console.log(req.body)
  
  // User.find({})
  //   .then(users => {
  //     res.render("users/login", {users});
  //   })
  //   .catch(e => res.status(500).send(e.stack));
});

// router.get("/:id", (req, res) => {
//   userID = req.params.id;
//   User.findById(userID, function(err, user) {
//     console.log(user);
//     res.render("users/show", {user});
//   });
// });



module.exports = router;