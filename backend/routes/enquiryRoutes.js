const express = require("express");
const { addEnquiry, getEnquiries, updateEnquiry } = require("../controllers/enquiryController");
const router = express.Router();

router.route("/")
    .post(addEnquiry)
    .get(getEnquiries);
router.route("/:id").put(updateEnquiry);

module.exports = router;
