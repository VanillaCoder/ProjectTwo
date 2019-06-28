var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/categories", function (req, res) {
   db.Category.findAll({}).then(function(categorydb) {
     res.json(categorydb);
   });
  });
  
  //not using atm
  // app.get("/api/create", function(req, res) {
  //   db.Category.create({
  //     catID: "coding"
  //   });
  //   db.Category.create({
  //     catID: "politics"
  //   });
  //   db.Category.create({
  //     catID: "general"
  //   });
  // });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};
