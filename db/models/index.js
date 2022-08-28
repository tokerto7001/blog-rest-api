const Product = require('./product');
const Shop = require('./shop');
const UserCard = require('./user_card');
const UserFavProduct = require('./user_fav_product');
const UserFavShop = require('./user_fav_shop');
const UserRole = require('./user_role');
const User = require('./user');

Shop.belongsTo(User);

UserRole.hasMany(User);
User.belongsTo(UserRole);

Shop.hasMany(Product);
Product.belongsTo(Shop);

User.belongsToMany(Product, { through: UserFavProduct });
Product.belongsToMany(User, { through: UserFavProduct });

User.belongsToMany(Product, { through: UserCard });
Product.belongsToMany(User, { through: UserCard });

User.belongsToMany(Shop, { through: UserFavShop });
Shop.belongsToMany(User, { through: UserFavShop });

module.exports = {
    Product,
    Shop,
    UserCard,
    UserFavProduct,
    UserFavShop,
    UserRole,
    User
}