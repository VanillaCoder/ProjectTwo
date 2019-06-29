var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Category.findAll({}).then(function (categorydb) {
      console.log(categorydb);
      res.render("home", { category: categorydb });
    });
  });


  app.get("/login", function (req, res) {
    db.Category.findAll({}).then(function (dbExamples) {
      res.render("login", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });


  app.get("/signup", function (req, res) {
    db.Category.findAll({}).then(function (dbExamples) {
      res.render("signup", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/category/:title", function (req, res) {
    db.Category.findOne({ where: { title: req.params.title } }).then(function (dbExample) {
      res.render("category", {
        category: dbExample
      });
    });
  }); 

  app.get("/category/:title/:id", function (req, res) {
    db.Category.findOne({ where: { title: req.params.title } }).then(function (dbExample) {
      res.render("post", {
        category: dbExample
      });
    });
  }); 

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
