/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like', {
    like_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    like_starmenu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'starmenu',
        key: 'starmenu_id'
      }
    }
  }, {
    tableName: 'like'
  });
};
