const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, { status }) => {
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

router.get('/:id', async ({req}, { status }) => {
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

router.post('/', async ({ body }, { status }) => {
  // create a new category
  try{
    const categoryData = await Category.create(body);
    status(200).json(categoryData);
  } catch (err) {
    status(400).json(err);
  }
});

router.put('/:id', async (req, { status }) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    status(200).json(categoryData);
  } catch (err) {
    status(400).json(err);
  }
});

router.delete('/:id', async (req, { status }) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
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
