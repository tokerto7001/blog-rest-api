const Sequelize = require('sequelize');
const commerdedb = require('../index');

const Shop = commerdedb.define(
    'shop',
    {
        shop_name: {
            type: Sequelize.STRING(200),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 200],
                    msg: 'Shop Name length must be between 2 and 200 characters'
                },
                notNull: {
                    msg: 'Shop Name is required!'
                }
            }
        },
        shop_description: {
            type: Sequelize.STRING(400),
            allowNull: false,
            validate: {
                len: {
                    args: [10, 400],
                    msg: 'Shop Description length must be between 10 and 400 characters'
                },
                notNull: {
                    msg: 'Shop Description is required!'
                }
            }
        },
        img_url: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Image URL is required!'
                }
            }
        },
        fav: {
            type: Sequelize.BIGINT,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0,
                notNull: {
                    msg: 'Fav is required!'
                }
            }
        }
    });

module.exports = Shop;