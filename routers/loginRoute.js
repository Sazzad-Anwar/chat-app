//External Imports
const express = require("express");
const router = express.Router();
const decorateHtmlResponse = require("../middlewares/common/decorateHtml");

//Internal Imports
const { getLogin } = require("../controllers/loginController");

//Login
router.route("/").get(decorateHtmlResponse("Login"), getLogin);

module.exports = router;
