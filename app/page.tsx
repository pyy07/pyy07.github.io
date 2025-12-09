"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeCard, { themes } from "@/components/ThemeCard";
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

export default function Home() {
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
    <main className="min-h-screen relative overflow-hidden">
      {/* 背景风景图 - 支持切换动画 */}
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

      {/* 3D 光影特效 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {/* 浮动光球 */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/30 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* 光线效果 */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
          }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
        
        {/* 粒子效果 */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <Header />
      
      <div className="relative z-20">
        {/* Four Themes Section with 3D grid */}
        <section className="container mx-auto px-4 py-16 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {themes.map((theme, index) => (
              <ThemeCard key={theme.id} theme={theme} index={index} />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
