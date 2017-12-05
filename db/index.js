"use strict";
const { database } = require("config");
const Sequelize = require("sequelize");
console.log(database);
const sequelize = new Sequelize(
  database.database,
  database.user,
  database.password,
  database.opts
);

module.exports = {
  selectDummy
}

async function selectDummy() {
  const r = await sequelize.query("select * from t1", { type: Sequelize.QueryTypes.SELECT });
  console.log(r);
  return r;
}
