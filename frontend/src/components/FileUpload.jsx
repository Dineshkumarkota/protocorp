import axios from "axios";
import { useState } from "react";

function FileUpload({ setUrls, setCurrentIndex }) {
  const [loading, setLoading] = useState(false);
  const [sheetUrl, setSheetUrl] = useState("");

 const handleSheetSubmit = async () => {
  if (!sheetUrl.trim()) {
    alert("Please enter a Google Sheet URL");
    return;
  }

  if (!sheetUrl.includes("docs.google.com")) {
    alert("Enter a valid Google Sheet link");
    return;
  }

  try {
    const res = await axios.post(
      "https://protocorp.onrender.com/api/upload",
      { sheetUrl }
    );

    setUrls(res.data.urls);
    setCurrentIndex(0);
  } catch (err) {
    console.log(err);
    alert("Invalid sheet URL or no URLs found");
  }
};

  // File upload handler
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.name.match(/\.(xlsx|csv)$/)) {
      alert("Only Excel or CSV allowed");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/upload",
        formData
      );

      setUrls(res.data.urls);
      setCurrentIndex(0);
    } catch (error) {
      console.log(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-4">

      {/* Upload Box */}
      <label className="w-full cursor-pointer bg-gray-800 text-white border border-gray-600 rounded-lg p-4 text-center hover:bg-gray-700 transition">
        📁 Click to upload Excel / CSV
        <input type="file" onChange={handleUpload} className="hidden" />
      </label>

      {loading && (
        <p className="text-yellow-400 text-center animate-pulse">
          Uploading...
        </p>
      )}

      {/* Sheet Input */}
      <div className="flex gap-2 w-full">
        <input
          type="text"
          placeholder="Paste Google Sheet CSV link..."
          value={sheetUrl}
          onChange={(e) => setSheetUrl(e.target.value)}
          className="flex-1 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSheetSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
        >
          Load
        </button>
      </div>

    </div>
  );
}

export default FileUpload;