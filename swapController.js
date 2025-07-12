const Swap = requireconst  = require('../models/models1');

exports.createSwap = async (req, res) => {
  try {
    const swap = await Swap.create(req.body);
    res.status(201).json(swap);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getUserSwaps = async (req, res) => {
  try {
    const swaps = await Swap.find({ $or: [ { from: req.params.userId }, { to: req.params.userId } ] });
    res.json(swaps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSwapStatus = async (req, res) => {
  try {
    const swap = await Swap.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(swap);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.giveFeedback = async (req, res) => {
  try {
    const swap = await Swap.findByIdAndUpdate(req.params.id, { feedback: req.body.feedback }, { new: true });
    res.json(swap);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteSwap = async (req, res) => {
  try {
    await Swap.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};