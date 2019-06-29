var db = require("../models");
db.Post.hasMany(db.Reply);


module.exports = function (app) {
  // Get all examples
  app.get("/api/categories", function (req, res) {
    db.Category.findAll({}).then(function (categorydb) {
      res.json(categorydb);
    });
  });
  app.get("/api/posts", function (req, res) {
    db.Post.findAll({}).then(function (postsdb) {
      res.json(postsdb);
    });
  });
  app.get("/api/replys", function (req, res) {
    db.Post.findAll({}).then(function (replydb) {
      res.json(replydb);
    });
  });

  app.post("api/post/create", function (req, res) {
    db.Post.create({
      category: req.body.category,
      title: req.body.title,
      body: req.body.body
    })
      .then(console.log("post created"));
  });

  //not using atm
  app.get("/api/create", function (req, res) {
    db.Post.create({
      category: "coding",
      title: "Need help with this code",
      body: "lately i've been running into a lot of trpouble with EVERYTHING."
    });
    db.Post.create({
      category: "videogames",
      title: "new game coming out",
      body: "man this new game coming out is going to be so cool, i cant wait!"
    });
    db.Post.create({
      category: "videogames",
      title: "games are for nerds",
      body: "all games are for nerds change my mind"
    });
    db.Reply.create({
      userID: "Jack",
      body: "Your ideas suck",
      PostId: 1
    });

  });

  // Create a new example
  app.post("/api/examples/:post", function (req, res) {
    db.Reply.create({
      text: req.body.id,
      postid: req.params.post
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
