const xlsx = require("xlsx");
const { extractUrls } = require("../utils/extractUrls");

const isValidUrl = (url) => {
    try {
        const parsed = new URL(url);
        return ["http:", "https:"].includes(parsed.protocol);
    } catch {
        return false;
    }
};

exports.handleFileUpload = (req, res) => {
    try {
        const filePath = req.file.path;
        console.log("FILE:", req.file); // 🔥 debug
        if (!req.file) {
            return res.status(400).json({ error: "No file received" });
        }

        const workbook = xlsx.readFile(filePath);
        const sheetName = workbook.SheetNames[0];

        const data = xlsx.utils.sheet_to_json(
            workbook.Sheets[sheetName]
        );

        const urls = extractUrls(data).filter(isValidUrl);

        res.json({ urls });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error processing file" });
    }
};