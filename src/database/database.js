import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "swapping_db", // db name,
  "admin", // username
  "admin1234", // password
  {
    host: "aalkn4k0u3zaju.cwbnhf5xbmai.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
