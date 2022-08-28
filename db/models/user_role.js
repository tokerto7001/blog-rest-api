const Sequelize = require('sequelize');
const commerdedb = require('../index');

const UserRole = commerdedb.define(
    'user_role',
    {
        role_name: {
            type: Sequelize.TEXT
        }
    }
);

module.exports = UserRole;