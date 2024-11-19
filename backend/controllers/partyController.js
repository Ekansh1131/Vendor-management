const Party = require("../models/Party");

const addParty = async (req, res) => {
    try {
        const party = new Party(req.body);
        await party.save();
        res.status(201).json(party);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getParties = async (req, res) => {
    try {
        const parties = await Party.find();
        res.json(parties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addParty, getParties };
