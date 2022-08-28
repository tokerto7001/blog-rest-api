const Sequelize = require('sequelize');
const commerdedb = require('../index');

const UserFavProduct = commerdedb.define(
    'user_fav_product',
    {

    }
);

module.exports = UserFavProduct;