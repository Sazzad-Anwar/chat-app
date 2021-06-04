//External Imports
const express = require("express");
const router = express.Router();

//Internal Imports
const { getInbox } = require("../controllers/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtml");

//Login
router.route("/").get(decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
