"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 计算页面滚动位置
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // 当滚动到接近底部（距离底部100px以内）时显示 Footer
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      
      if (distanceFromBottom < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 初始检查，如果页面内容不足一屏，直接显示 Footer
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <motion.footer
      initial={{ y: "100%" }}
      animate={{ y: isVisible ? 0 : "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-slate-200 text-slate-700 py-4"
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} LukePan. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
