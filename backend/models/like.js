/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('like', {
    user_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    star_combi_star_combi_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'star_combi',
        key: 'star_combi_id'
      }
    }
  }, {
    tableName: 'like'
  });
};
