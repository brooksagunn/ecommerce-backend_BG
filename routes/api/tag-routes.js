const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [Product]
    });
    status(200).json(tagData);
  } catch (err) {
    status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tagData = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    status(200).json(tagData);
  } catch (err) {
    status(400).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  try{
    const tagData = Tag.create(body);
    status(200).json(tagData);
  } catch (err) {
    status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    status(200).json(tagData);
  } catch (err) {
    status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
