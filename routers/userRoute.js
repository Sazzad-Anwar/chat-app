//External Imports
const express = require("express");
const router = express.Router();

//Internal Imports
const { getUser } = require("../controllers/userController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtml");

//Login
router.route("/").get(decorateHtmlResponse("Users"), getUser);

module.exports = router;
