import { useRef, useState } from "react";

export default function Carousel({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const CARD_WIDTH = 311 + 12 ;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50 && currentIndex > 0) {
        // 오른쪽으로 스와이프: 이전 카드
      setCurrentIndex((prev) => prev - 1);
    } else if (
      deltaX < -50 &&
      currentIndex < containerRef.current.children.length - 1
    ) {
      // 왼쪽으로 스와이프: 다음 카드
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex pl-32 gap-12 pr-32"
        style={{
          transform: `translateX(-${currentIndex * CARD_WIDTH}px)`,
          transition: "transform 0.3s ease-out",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    </div>
  );
}
