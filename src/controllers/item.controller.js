import { Item } from "../models/Item.js";
import { Image } from "../models/Image.js";

export async function getItems(req, res) {
  try {
    //Get items
    const items = await Item.findAll({
      include: {
        model: Image,
        attributes: ["url"],
      },
    });

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createItem(req, res) {
  const { name, address, description, ownerName, likes } = req.body;

  try {
    let newItem = await Item.create({
      name,
      address,
      description,
      ownerName,
      likes,
    });
    return res.json(newItem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getItem(req, res) {
  const { id } = req.params;
  try {
    //Get item
    const item = await Item.findOne({
      where: {
        id,
      },
    });

    //Get images from item
    const images = await Image.findAll({
      where: { itemId: id },
    });

    //Add images url to item
    item.dataValues.images = images;

    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, description, ownerName, likes } = req.body;

    const item = await Item.findByPk(id);
    item.name = name;
    item.address = address;
    item.description = description;
    item.ownerName = ownerName;
    item.likes = likes;

    await item.save();

    res.json(item);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteItem(req, res) {
  const { id } = req.params;
  try {
    await Image.destroy({
      where: {
        itemId: id,
      },
    });
    await Item.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getItemImages(req, res) {
  const { id } = req.params;
  try {
    const images = await Image.findAll({
      where: { itemId: id },
    });
    res.json(images);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
