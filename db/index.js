const Sequelize = require('sequelize');
const debug = require('debug')('sql')

// destructure credentials from .env file
const { DB_NAME, DB_ADDRESS, DB_PORT, DB_USER, DB_PASSWORD } = process.env;

// construct db connection URL
const commercedbURL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_ADDRESS}:${DB_PORT}/${DB_NAME}`;

// test db connection
const testDbConnection = async (dbName, strValue) => {
    try {
        await dbName.authenticate();
        console.log(`Connected to ${strValue} succesfully!`);
    } catch (error) {
        console.error(`Unable to connect to the ${strValue}:`, error);
    }
}

// construct Sequelize instance 
const commercedb = new Sequelize(commercedbURL, {
    logging: debug, // export DEBUG=sql in the environment to get SQL queries
    define: {
        underscored: true,       // use snake_case rather than camelCase column names
        freezeTableName: true,   // don't change table names from the one specified
        timestamps: true,        // automatically include timestamp columns
    }
});

testDbConnection(commercedb, "commercedb");

// syncronize commercedb
function syncDeltaDb(retries = 0, maxRetries = 5) {
    return commercedb.sync({ force: false })
}
commercedb.didSync = syncDeltaDb();

module.exports = commercedb;
