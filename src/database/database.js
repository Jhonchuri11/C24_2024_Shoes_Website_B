import { createPool } from "mysql2/promise";

import config from "./../config";

const connection = createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database,
});

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
};