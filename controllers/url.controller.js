const { nanoid } = require("nanoid");
const { urlModel } = require("../models/url.model");

const handleCreateShortUrl = async (req, res) => {
  const { body } = req;
  if (!body.redirectUrl)
    return res.status(400).json({ message: "URL is required" });
  const shortId = nanoid(8);
  try {
    await urlModel.create({
      shortId: shortId,
      redirectUrl: body.redirectUrl,
    });
    return res.status(200).json({ shortId });
  } catch (err) {
    console.error("Error creating short URL:", err);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

const handleRedirectLink = async (req, res) => {
  const shortId = req.params.shortId;
  if (!shortId) return res.status(400).json({ message: "ID not found" });
  try {
    const userAgent = req.get("user-agent");
    const data = await urlModel.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timeStamp: Date.now(),
            ip: req.ip,
            userAgent: userAgent,
          },
        },
      },
    );
    return res.redirect(data?.redirectUrl);
  } catch (err) {
    console.error("Error redirecting link:", err);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

const handleUrlAnalytics = async (req, res) => {
  const { params } = req;
  const shortId = params.shortId;
  if (!shortId) return res.status(400).json({ message: "Link ID not present" });
  try {
    const response = await urlModel.findOne({ shortId });
    return res.status(200).json({
      originalUrl: response.redirectUrl,
      clicks: response.visitHistory.length,
      visitHistory: response.visitHistory,
    });
  } catch (err) {
    console.log(`Error fetching analytics ${err}`);
    return res.status(400).json({ message: "Error fetching analytics data" });
  }
};

module.exports = {
  handleCreateShortUrl,
  handleRedirectLink,
  handleUrlAnalytics,
};
