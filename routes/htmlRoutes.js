var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Category.findAll({}).then(function(dbExamples) {
      res.render("home", {
        array:[
          {
            url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
            title: "music",
            text: "the best music",
            date: "may",
          },
          {
            url: "https://images.unsplash.com/photo-1492044715545-15ddedd84e5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
            title: "general",
            text: "the best music",
            date: "may",
          },
          {
            url: "https://images.unsplash.com/photo-1492044715545-15ddedd84e5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
            title: "tech",
            text: "the best music",
            date: "may",
          },
          {
            url: "https://images.unsplash.com/photo-1492044715545-15ddedd84e5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
            title: "music",
            text: "the best music",
            date: "may",
          }
        ]
      });
    });
  });
  app.get("/login", function(req, res) {
    db.Category.findAll({}).then(function(dbExamples) {
      res.render("login", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  app.get("/signup", function(req, res) {
    db.Category.findAll({}).then(function(dbExamples) {
      res.render("signup", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Category.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
