module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
      // Giving the Author model a name of type STRING
      catID: DataTypes.STRING
    });
    return Category;
};
  