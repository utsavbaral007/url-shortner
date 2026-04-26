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
    const data = await urlModel.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timeStamp: Date.now(),
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

module.exports = { handleCreateShortUrl, handleRedirectLink };
