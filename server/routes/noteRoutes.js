const express = require('express');
const { getNotes, createNote, updateNote, deleteNote } = require('../controllers/noteController');
// const { isAuthenticated } = require('../middleware/authMiddleware');

const router = express.Router();
// router.use(isAuthenticated); 

router.get('/', getNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;