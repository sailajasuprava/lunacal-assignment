"use client";

import Image from "next/image";

export default function Carousel({ images, currentIndex }) {
  return (
    <div className="relative w-full max-w-xl mx-auto overflow-hidden">
      <div
        className="flex gap-6 transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (150 + 24)}px)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="relative min-w-[170px] h-[150px] rounded-3xl overflow-hidden bg-linear-to-br from-[#3A3F45] to-[#2B3036] shrink-0 cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-3 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.03),8px_8px_16px_#1a1d21] hover:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.03),12px_12px_24px_#1a1d21]"
          >
            <Image
              src={src}
              alt={`carousel-${i}`}
              fill
              sizes="180px"
              className="object-cover transition-all duration-300 grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
