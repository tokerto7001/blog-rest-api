const Sequelize = require('sequelize');
const commerdedb = require('../index');

const User = commerdedb.define(
    'user',
    {
        first_name: {
            type: Sequelize.STRING(50),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 20],
                    msg: 'First Name length must be between 2 and 20 characters'
                },
                notNull: {
                    msg: 'First Name is required!'
                }
            }
        },
        last_name: {
            type: Sequelize.STRING(50),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 30],
                    msg: 'Last Name length must be between 2 and 20 characters'
                },
                notNull: {
                    msg: 'Last Name is required!'
                }
            }
        },
        mail: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                isEmail: true,
                notNull: {
                    msg: 'Password is required!'
                }
            }
        },
        password: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Password is required!'
                }
            }
        }
    }
)

module.exports = User;