const labels = require('../data/labels');
const Label = require('../model/labelModel');

const storeLabels = async (req, res) => {
  try {
    const data = await Label.create(labels);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
};
module.exports = { storeLabels };
