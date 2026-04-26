const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      unique: true,
      required: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timeStamp: { type: Number },
        ip: { type: String },
        userAgent: { type: String },
      },
    ],
  },
  { timestamps: true },
);

const urlModel = mongoose.model("urls", urlSchema);

module.exports = { urlModel };
