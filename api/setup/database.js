<<<<<<< HEAD:api/setup/database.js
import mysql, { Connection } from "mysql2";
import databaseConfig from "../config/database";

const connection = mysql.createConnection({
    host: databaseConfig.development.host,
    user: databaseConfig.development.username,
    password: databaseConfig.development.password,
    database: databaseConfig.development.database,
    port: databaseConfig.development.port
});

//Connecting to database
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

export default connection;
=======
import mysql, { Connection } from 'mysql2';
import databaseConf from '../config/database';

export const databaseName = databaseConf.database;

export const database = {
  connect: () =>
    mysql.createConnection(databaseConf, err => {
      if (err) throw err;
    }),
};

export const noDatabase = {
  connect: () =>
    mysql.createConnection(
      {
        host: databaseConf.host,
        port: databaseConf.port,
        user: databaseConf.user,
        password: databaseConf.password,
      },
      err => {
        if (err) throw err;
      },
    ),
};
>>>>>>> master:src/setup/database.js
