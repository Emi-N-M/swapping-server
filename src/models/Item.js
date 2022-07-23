import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Image } from "./Image.js";

export const Item = sequelize.define(
  "items",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    ownerName: {
      type: DataTypes.STRING,
    },
    likes: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

Item.hasMany(Image, {
  foreinkey: "itemId",
  sourceKey: "id",
});
Image.belongsTo(Item, { foreinkey: "itemId", targetId: "id" });
