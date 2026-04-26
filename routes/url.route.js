const express = require("express");
const urlRouter = express.Router();
const {
  handleCreateShortUrl,
  handleRedirectLink,
  handleUrlAnalytics,
} = require("../controllers/url.controller");

urlRouter.route("/").post(handleCreateShortUrl);
urlRouter.route("/:shortId").get(handleRedirectLink);
urlRouter.route("/analytics/:shortId").get(handleUrlAnalytics);

module.exports = urlRouter;
