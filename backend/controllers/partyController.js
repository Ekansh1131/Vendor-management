const Party = require("../models/Party");

const addParty = async (req, res) => {
    try {
        // Check if a party with the same name already exists
        const existingParty = await Party.findOne({ name: req.body.name });
        if (existingParty) {
            return res.status(400).json({ message: "Party already exists" });
        }

        // Create a new party if it doesn't exist
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
