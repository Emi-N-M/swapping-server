import { Image } from "../models/Image.js";

export async function createImage(req, res) {
  try {
    const { url, itemId } = req.body;
    const newImage = await Image.create({
      url,
      itemId,
    });
    res.json(newImage);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getImages(req, res) {
  try {
    const images = await Image.findAll({
      //attributes: ["id", "projectId", "name", "done"],
      order: [["id", "DESC"]],
    });
    res.json(images);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateImage(req, res) {
  const { id } = req.params;
  // const { projectid, name, done } = req.body;
  try {
    // const updatedTask = await Task.update(
    //   { name, done, projectid },
    //   { where: { id } }
    // );

    const image = await Image.findOne({
      attributes: ["name", "projectId", "done", "id"],
      where: { id },
    });

    image.set(req.body);

    await task.save();

    res.json(image);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteImage(req, res) {
  const { id } = req.params;
  try {
    await Image.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getImage(req, res) {
  const { id } = req.params;
  try {
    const image = await Image.findOne({
      where: { id },
      attributes: ["id", "projectId", "name", "done"],
    });
    res.json(image);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
