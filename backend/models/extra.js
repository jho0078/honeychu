/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('extra', {
    extra_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    espresso_shot: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    decaf: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'extra'
  });
};
