// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

const uri =
  "mongodb+srv://dharmareddypandem92:bunny087@cluster0.jfnoy.mongodb.net/ocr_database";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const ocrResultSchema = new mongoose.Schema({
  image_name: String,
  text: [String],
  image_base64: String,
});

const OcrResult = mongoose.model("detection_results", ocrResultSchema);

app.get("/api/ocr-results", async (req, res) => {
  try {
    const results = await OcrResult.find();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
