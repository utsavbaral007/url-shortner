const express = require("express");
const urlRouter = express.Router();
const {
  handleCreateShortUrl,
  handleRedirectLink,
} = require("../controller/url.controller");

urlRouter.route("/").post(handleCreateShortUrl);
urlRouter.route('/:shortId').get(handleRedirectLink)

module.exports = urlRouter;
