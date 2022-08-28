const Sequelize = require('sequelize');
const commerdedb = require('../index');

const Product = commerdedb.define(
    'product',
    {
        title: {
            type: Sequelize.STRING(200),
            allowNull: false,
            validate: {
                len: {
                    args: [2, 200],
                    msg: 'Product Title length must be between 2 and 200 characters'
                },
                notNull: {
                    msg: 'Product Title is required!'
                }
            }
        },
        description: {
            type: Sequelize.STRING(400),
            allowNull: false,
            validate: {
                len: {
                    args: [10, 400],
                    msg: 'Description length must be between 10 and 400 characters'
                },
                notNull: {
                    msg: 'Description is required!'
                }
            }
        },
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Price is required!'
                },
            }
        },
        img_url: {
            type: Sequelize.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Image URL is required!'
                },
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
    }
)

module.exports = Product;