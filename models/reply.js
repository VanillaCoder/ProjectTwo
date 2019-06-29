module.exports = function (sequelize, DataTypes) {
    var Reply = sequelize.define("Reply", {
        userID: DataTypes.STRING,
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1, 700]
        }
    });

    // Add a belongsTo association to Authors here
    // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
    Reply.associate = function (models) {
        Reply.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Reply;
};
