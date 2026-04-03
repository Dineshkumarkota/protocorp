const express = require("express");
const multer = require("multer");
const { handleFileUpload } = require("../controllers/uploadController");

const router = express.Router();
router.post("/upload", upload.single("file"), handleFileUpload);
const upload = multer({ dest: "uploads/" });

router.post("/upload-url", async (req, res) => {
  try {
    const { sheetUrl } = req.body;

    if (!sheetUrl) {
      return res.status(400).json({ error: "Sheet URL required" });
    }

    const response = await fetch(sheetUrl);

    if (!response.ok) {
      return res.status(400).json({ error: "Invalid sheet URL" });
    }

    const text = await response.text();

    // DEBUG
    console.log("RAW DATA:", text.slice(0, 200));

    const rows = text.split(/\r?\n/).map(r => r.split(","));

    const urls = rows
      .flat()
      .map(cell => (cell || "").replace(/"/g, "").trim())
      .filter(cell => {
        try {
          const u = new URL(cell);
          return ["http:", "https:"].includes(u.protocol);
        } catch {
          return false;
        }
      });

    console.log("Extracted URLs:", urls);

    if (urls.length === 0) {
      return res.status(400).json({ error: "No valid URLs found" });
    }

    res.json({ urls });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch sheet" });
  }
});


module.exports = router;