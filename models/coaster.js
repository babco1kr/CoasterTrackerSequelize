module.exports = function(sequelize, DataTypes) {
    var Coaster = sequelize.define("Coaster", {
        coaster_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rode: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Coaster;
}
