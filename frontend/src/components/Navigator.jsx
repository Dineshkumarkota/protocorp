import { useEffect } from "react";

function Navigator({ currentIndex, setCurrentIndex, total }) {

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" && currentIndex < total - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, total]);

  return (
   <div className="flex items-center justify-center gap-6 mt-2">

  <button
    onClick={() => setCurrentIndex(prev => prev - 1)}
    disabled={currentIndex === 0}
    className="bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600 disabled:opacity-30"
  >
    ⬅ Prev
  </button>

  <span className="text-gray-300 font-medium">
    {currentIndex + 1} / {total}
  </span>

  <button
    onClick={() => setCurrentIndex(prev => prev + 1)}
    disabled={currentIndex === total - 1}
    className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-500 disabled:opacity-30"
  >
    Next ➡
  </button>

</div>
  );
}

export default Navigator;