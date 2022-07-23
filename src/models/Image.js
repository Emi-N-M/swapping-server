import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Image = sequelize.define(
  "images_url",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
