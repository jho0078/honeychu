/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('starmenu', {
    starmenu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    user_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    basic_menu: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tag1: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tag2: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    espresso_shot: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    decaf_espresso_shot: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    half_decaf_espresso_shot: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    frappuccino_roast_shot: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vanilla_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hazelnut_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    caramel_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dolche_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    classic_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    chocolat_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    toffeenut_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mocha_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    white_mocha_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    brown_sugur_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    frappuccino_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mint_chocolate_sauce: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    strawberry_mix: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    black_sesame_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    honey_grapefruit_sauce: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    chai_syrup: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    water_base: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vanilla_cream_base: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    black_tea_base: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    passion_tango_tea_base: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cool_lime_base: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lemonade_base: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ice: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    milk: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    milk_temp: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    milk_bubble: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    milk_quantity: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    general_whipping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    espresso_whipping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    cold_foam: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mugwort_whipping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    caramel_drizzle: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    chocolate_drizzle: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lemon_slice: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rosemary: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    grapefruit_slice: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    javachip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    javachip_and_topping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tong_javachip_topping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    toffeenut_topping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rice_topping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    black_soboro_topping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ricecake_topping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    topping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mugwort_powder_topping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    chocolat_topping: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    orange_essence: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    sparkling: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    green_tea_powder: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    rice_powder: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mugwort_powder: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    black_sesame_rice_cake: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mango_juice: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    signature_chocolate: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    hash: {
      type: DataTypes.STRING(200),
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'starmenu'
  });
};
