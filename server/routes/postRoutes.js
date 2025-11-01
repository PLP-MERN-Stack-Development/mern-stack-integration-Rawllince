import express from 'express';

const router = express.Router();

// Example routes
router.get('/', (req, res) => {
  res.send('Get all posts');
});

router.post('/', (req, res) => {
  res.send('Create a new post');
});

export default router;
