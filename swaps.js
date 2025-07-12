const express = require('express');
const router = express.Router();
const { createSwap, getUserSwaps, updateSwapStatus, deleteSwap, giveFeedback } = require('../controllers/swapcontroller');

router.post('/', createSwap);
router.get('/:userId', getUserSwaps);
router.put('/:id/status', updateSwapStatus);
router.put('/:id/feedback', giveFeedback);
router.delete('/:id', deleteSwap);

module.exports = router;