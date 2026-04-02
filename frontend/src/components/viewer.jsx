function Viewer({ url }) {
  // Prevent loading your own app inside iframe
  if (!url || url.includes("localhost")) {
    return (
      <div className="bg-gray-800 p-4 rounded text-center text-red-400">
        Invalid or unsafe URL
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4">

      <div className="mb-2 text-sm text-gray-400 truncate">
        {url}
      </div>

      <div className="bg-black rounded-lg overflow-hidden border border-gray-700">
        <iframe
          key={url}
          src={url}
          title="viewer"
          className="w-full h-[450px]"
        />
      </div>

      <div className="text-center mt-3">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          Open in new tab ↗
        </a>
      </div>

    </div>
  );
}

export default Viewer;