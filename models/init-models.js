var DataTypes = require("sequelize").DataTypes;
var _card_messages = require("./card_messages");

function initModels(sequelize) {
  var card_messages = _card_messages(sequelize, DataTypes);


  return {
    card_messages,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
