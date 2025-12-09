"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// 风景图片数组
const backgroundImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop", // 山脉
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop", // 海洋
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop", // 森林
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop", // 沙漠
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop", // 湖泊
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2070&auto=format&fit=crop", // 草原
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070&auto=format&fit=crop", // 森林小径
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop", // 雪山
];

export default function BackgroundCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(0);

  // 随机选择初始图片
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setCurrentImageIndex(randomIndex);
    setNextImageIndex(randomIndex);
  }, []);

  // 自动切换背景（每20秒切换一次）
  useEffect(() => {
    const interval = setInterval(() => {
      setNextImageIndex((prev) => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * backgroundImages.length);
        } while (newIndex === prev && backgroundImages.length > 1);
        return newIndex;
      });
    }, 20000); // 20秒切换一次

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={nextImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className="absolute inset-0"
        >
          <Image
            src={backgroundImages[nextImageIndex]}
            alt={`Landscape ${nextImageIndex + 1}`}
            fill
            className="object-cover"
            priority={nextImageIndex === 0}
            quality={90}
            onLoad={() => {
              setCurrentImageIndex(nextImageIndex);
            }}
          />
        </motion.div>
      </AnimatePresence>
      
      {/* 渐变遮罩层，确保文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/40 to-white/50" />
      {/* 额外的光影效果 */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-200/30 via-transparent to-pink-200/30" />
    </div>
  );
}

