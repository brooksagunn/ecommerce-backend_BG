const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, { status }) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [Product]
    });
    status(200).json(categoryData);
  } catch (err) {
    status(500).json(err);
  }
});

router.get('/:id', ({req}, { status }) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try{
    const categoryData = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    status(200).json(categoryData);
  } catch (err) {
    status(400).json(err);
  }
});

router.post('/', ({ body }, { status }) => {
  // create a new category
  try{
    const categoryData = Category.create(body);
    status(200).json(categoryData);
  } catch (err) {
    status(400).json(err);
  }
});

router.put('/:id', (req, { status }) => {
  // update a category by its `id` value
  try {
    const categoryData = Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    status(200).json(categoryData);
  } catch (err) {
    status(400).json(err);
  }
});

router.delete('/:id', (req, { status }) => {
  // delete a category by its `id` value
  try {
    const categoryData = Category.destroy({
      where: {
        id: req.params.id
      }
    });
    status(200).json(categoryData);
  } catch (error) {
    status(200).json(err);
  }
});

module.exports = router;
