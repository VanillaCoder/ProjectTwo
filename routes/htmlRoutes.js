var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Category.findAll({}).then(function (cldb) {
      res.render("home", { category: cldb });
    });
  });


  app.get("/login", function (req, res) {
    db.Category.findAll({}).then(function (cldb) {
      res.render("login", {
        msg: "Welcome!",
        examples: cldb
      });
    });
  });


  app.get("/signup", function (req, res) {
    db.Category.findAll({}).then(function (cldb) {
      res.render("signup", {
        msg: "Welcome!",
        examples: cldb
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/category/:category", function (req, res) {
    db.Post.findAll({ where: { category: req.params.category } }).then(function (cldb) {
      res.render("category", {
        category: cldb
      });
      // res.json(cldb);
    });
  });
  app.get("/category/post/:id", function (req, res) {
    db.Post.findAll({
      where: { id: req.params.id },
      include: [{
        model: db.Reply
      }],
      order: [db.sequelize.col("id")]
    })
      .then(function (cldb) {
        res.render("post", {
          post: cldb
        });
        
        // res.json(cldb);
      });
  });

  app.get("/category/:title/:id", function (req, res) {
    db.Category.findOne({ where: { title: req.params.title } }).then(function (cldb) {
      res.render("post", {
        category: cldb
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
