/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('star_combi', {
    star_combi_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    extra_extra_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'extra',
        key: 'extra_id'
      }
    }
  }, {
    tableName: 'star_combi'
  });
};
