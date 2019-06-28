module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
      // Giving the Author model a name of type STRING
      URL: DataTypes.STRING,
      title: DataTypes.STRING,
      text: DataTypes.STRING
    });
    return Category;
};
