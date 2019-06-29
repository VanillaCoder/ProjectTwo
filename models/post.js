module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // Giving the Author model a name of type STRING
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [25, 1000]
  }
  });
  Post.associate = function (models) {
    Post.hasMany(models.Reply, {
      onDelete: "cascade"
    });
  };

  return Post;
};
