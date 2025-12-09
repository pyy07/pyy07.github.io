"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

interface Theme {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  gradient: string;
  link: string;
  highlights: string[];
}

const themes: Theme[] = [
  {
    id: "telecom",
    title: "通信",
    subtitle: "2007-2012",
    description: "CDMA2000基站系统开发，从底层协议到系统架构的全面技术积累",
    icon: "📡",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    link: "/telecom",
    highlights: [
      "CDMA2000基站开发",
      "系统架构设计",
      "Domain Leader经验"
    ]
  },
  {
    id: "gaming",
    title: "游戏",
    subtitle: "2012-2018",
    description: "网络游戏和手机游戏研发，从技术到管理的全方位实践",
    icon: "🎮",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    link: "/gaming",
    highlights: [
      "游戏引擎技术",
      "服务器架构",
      "团队管理"
    ]
  },
  {
    id: "saas-ecommerce",
    title: "SaaS电商",
    subtitle: "2018-2020",
    description: "独立开发SaaS商城系统，全栈技术栈的完整实践",
    icon: "🛒",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    link: "/saas-blockchain",
    highlights: [
      "SaaS平台架构",
      "全栈开发",
      "产品设计"
    ]
  },
  {
    id: "quant-trading",
    title: "量化交易",
    subtitle: "2020-至今",
    description: "量化交易策略开发与执行，金融与技术的深度融合",
    icon: "📊",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    link: "/quant-trading",
    highlights: [
      "量化策略开发",
      "算法交易",
      "数据分析"
    ]
  }
];

export default function ThemeCard({ theme, index }: { theme: Theme; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <Link href={theme.link}>
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative h-full overflow-hidden rounded-2xl bg-white shadow-lg p-1 cursor-pointer hover:shadow-xl transition-shadow"
        >
          {/* Gradient border with glow */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
            style={{ transform: "translateZ(0px)" }}
          />
          
          <motion.div
            className="relative h-full bg-white rounded-2xl p-8 flex flex-col"
            style={{ transform: "translateZ(20px)" }}
          >
            {/* Icon */}
            <div className="mb-6" style={{ transform: "translateZ(30px)" }}>
              <div className="text-6xl mb-4">
                {theme.icon}
              </div>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${theme.gradient} mb-3 shadow-md`}>
                {theme.subtitle}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{theme.title}</h2>
            </div>

            {/* Description */}
            <p className="text-slate-600 mb-6 leading-relaxed flex-1" style={{ transform: "translateZ(10px)" }}>
              {theme.description}
            </p>

            {/* Highlights with staggered 3D effect */}
            <div className="space-y-2 mb-6" style={{ transform: "translateZ(15px)" }}>
              {theme.highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + idx * 0.1 }}
                  className="flex items-center gap-2"
                  style={{ transform: `translateZ(${idx * 5}px)` }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${theme.gradient}`} />
                  <span className="text-sm text-slate-600">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA with 3D effect */}
            <div
              className="flex items-center justify-between pt-4 border-t border-slate-200"
              style={{ transform: "translateZ(25px)" }}
            >
              <span className="text-sm font-semibold text-slate-500 group-hover:text-purple-600 transition-colors">
                探索详情
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className={`text-xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent`}
              >
                →
              </motion.div>
            </div>

            {/* Hover effect overlay with 3D */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${theme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
              style={{ transform: "translateZ(5px)" }}
            />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-30"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.8) 45%, rgba(255,255,255,0.8) 50%, transparent 54%)",
                transform: "translateZ(30px)",
              }}
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export { themes };
