"use client";
import { useRef, useState } from "react";
import { Plus, ArrowRight, ArrowLeft, HelpCircle } from "lucide-react";
import { BiGridVertical } from "react-icons/bi";
import Carousel from "./Carousel";
import pizza from "@/public/pizza.jpg";
import pizza2 from "@/public/pizza2.jpg";
import pizza3 from "@/public/pizza3.jpg";
import pizza4 from "@/public/pizza4.jpg";

export default function Gallery() {
  const [images, setImages] = useState([pizza, pizza2, pizza3, pizza4]);

  const fileInputRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="bg-[#363c43] rounded-2xl p-6 px-10 shadow-lg w-full h-full relative overflow-hidden">
      <button className="absolute top-4 left-2 text-gray-500 hover:text-white transition-colors">
        <HelpCircle size={22} />
      </button>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-semibold bg-[#171717] text-white px-8 py-3 rounded-2xl shadow-lg">
          Gallery
        </h2>

        <div className="flex items-center gap-4">
          <input
            type="file"
            accept="image/*"
            multiple
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            onClick={handleAddImageClick}
            className="flex items-center gap-2 bg-[#464c52] hover:bg-[#3A4149] text-white text-xs font-medium px-4 py-3 rounded-full transition-all shadow-[8px_8px_16px_#1a1d21,-4px_-4px_12px_#434b55] hover:shadow-[4px_4px_8px_#1a1d21,-2px_-2px_6px_#434b55]"
          >
            <Plus size={18} strokeWidth={2.5} /> ADD IMAGE
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="p-3 rounded-full bg-linear-to-br from-[#303439] to-[#1F2327] text-gray-300 hover:text-white transition-all shadow-[6px_6px_12px_#1a1d21,-4px_-4px_10px_#3d454f] hover:shadow-[3px_3px_6px_#1a1d21,-2px_-2px_5px_#3d454f] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft size={18} strokeWidth={2.5} />
            </button>
            <button
              onClick={scrollRight}
              disabled={currentIndex >= images.length - 3}
              className="p-3 rounded-full bg-linear-to-br from-[#303439] to-[#1F2327] text-gray-300 hover:text-white transition-all shadow-[6px_6px_12px_#1a1d21,-4px_-4px_10px_#3d454f] hover:shadow-[3px_3px_6px_#1a1d21,-2px_-2px_5px_#3d454f] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <button className="absolute top-1/2 left-1 text-gray-500 hover:text-white transition-colors">
        <BiGridVertical size={30} />
      </button>

      <Carousel images={images} currentIndex={currentIndex} />
    </div>
  );
}
