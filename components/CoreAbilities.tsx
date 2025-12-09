"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Ability {
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  achievements: string[];
}

const coreAbilities: Ability[] = [
  {
    title: "系统架构设计",
    description: "17年跨领域系统设计经验，从电信基站到量化交易系统",
    icon: "🏗️",
    color: "from-blue-500 to-cyan-500",
    link: "/telecom",
    achievements: [
      "CDMA2000基站系统架构",
      "游戏服务器集群设计",
      "SaaS平台微服务架构",
      "量化交易系统架构"
    ]
  },
  {
    title: "全栈开发",
    description: "从前端到后端，从移动端到服务端的完整技术栈",
    icon: "💻",
    color: "from-purple-500 to-pink-500",
    link: "/saas-blockchain",
    achievements: [
      "嵌入式C/C++开发",
      "Web全栈开发",
      "移动应用开发",
      "区块链应用开发"
    ]
  },
  {
    title: "团队领导",
    description: "从技术专家到团队Leader，具备丰富的管理经验",
    icon: "👥",
    color: "from-green-500 to-emerald-500",
    link: "/gaming",
    achievements: [
      "Domain Leader (爱立信)",
      "合伙人 (魔龙网络)",
      "独立创业",
      "跨职能团队管理"
    ]
  },
  {
    title: "量化交易",
    description: "结合金融与技术的量化策略开发与执行",
    icon: "📊",
    color: "from-orange-500 to-red-500",
    link: "/quant-trading",
    achievements: [
      "量化策略开发",
      "算法交易系统",
      "风险管理系统",
      "数据分析与建模"
    ]
  }
];

export default function CoreAbilities() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          核心能力矩阵
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          四大核心能力领域，覆盖技术、管理、金融全维度
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coreAbilities.map((ability, index) => (
          <motion.div
            key={ability.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group"
          >
            <Link href={ability.link}>
              <div className="relative h-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* 背景渐变 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ability.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-5xl">{ability.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {ability.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {ability.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wide">
                      核心成就
                    </h4>
                    <ul className="space-y-2">
                      {ability.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${ability.color}`} />
                          <span className="text-sm">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    了解更多
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

