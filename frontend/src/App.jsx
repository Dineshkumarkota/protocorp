import { useState } from "react";
import FileUpload from "./components/FileUpload";
import Viewer from "./components/viewer";
import Navigator from "./components/Navigator";

function App() {
  const [urls, setUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">

  {/* Header */}
  <div className="w-full bg-gray-900 border-b border-gray-700 py-4 text-center">
    <h1 className="text-3xl font-bold">🌐 Website Navigator</h1>
    <p className="text-gray-400 text-sm mt-1">
      Upload a file or paste a Google Sheet link
    </p>
  </div>

  <h1 className="text-red-500 text-4xl">TEST</h1>

  {/* Content */}
  <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center">
    <FileUpload setUrls={setUrls} setCurrentIndex={setCurrentIndex} />

    {urls.length === 0 && (
      <p className="mt-6 text-gray-500">Upload a file to begin</p>
    )}

    {urls.length > 0 && (
      <div className="w-full mt-6 space-y-4">
        <Viewer url={urls[currentIndex]} />
        <Navigator
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          total={urls.length}
        />
      </div>
    )}
  </div>

</div>
  );
}

export default App;
