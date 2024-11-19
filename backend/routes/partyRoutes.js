const express = require("express");
const { addParty, getParties } = require("../controllers/partyController");
const router = express.Router();

router.route("/")
    .post(addParty)
    .get(getParties);

module.exports = router;
