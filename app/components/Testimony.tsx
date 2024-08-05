"use client"
import React, { useEffect, useRef } from 'react';

const AutoScrollSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return;

    const scrollContentWidth = scrollContainer.scrollWidth / 2; // Width of original content (not duplicated content)

    function autoScroll() {
      if (scrollContainer.scrollLeft >= scrollContentWidth) {
        scrollContainer.scrollLeft -= scrollContentWidth; // Reset to start of content
      } else {
        scrollContainer.scrollLeft += 1;
      }
    }

    const scrollInterval = setInterval(autoScroll, 20); // Adjust speed as needed

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <div ref={scrollContainerRef} className="w-full overflow-hidden bg-gray-200 h-24 relative">
      <div className="flex whitespace-nowrap">
        <div className="flex-shrink-0 w-full h-24 bg-red-500 flex items-center justify-center text-white">Item 1</div>
        <div className="flex-shrink-0 w-full h-24 bg-blue-500 flex items-center justify-center text-white">Item 2</div>
        <div className="flex-shrink-0 w-full h-24 bg-green-500 flex items-center justify-center text-white">Item 3</div>
        <div className="flex-shrink-0 w-full h-24 bg-yellow-500 flex items-center justify-center text-white">Item 4</div>
        {/* Duplicate the items for seamless scrolling */}
        <div className="flex-shrink-0 w-full h-24 bg-red-500 flex items-center justify-center text-white">Item 1</div>
        <div className="flex-shrink-0 w-full h-24 bg-blue-500 flex items-center justify-center text-white">Item 2</div>
        <div className="flex-shrink-0 w-full h-24 bg-green-500 flex items-center justify-center text-white">Item 3</div>
        <div className="flex-shrink-0 w-full h-24 bg-yellow-500 flex items-center justify-center text-white">Item 4</div>
      </div>
    </div>
  );
}

export default AutoScrollSection;
