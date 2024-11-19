const express = require("express");
const { addVendor, getVendors } = require("../controllers/vendorController");
const router = express.Router();

router.route("/").get(getVendors).post(addVendor);

module.exports = router;
