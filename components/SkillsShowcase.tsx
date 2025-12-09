"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  category: string;
  level: number; // 1-5
  icon?: string;
}

const skills: Skill[] = [
  // 电信开发技能
  { name: "C/C++", category: "编程语言", level: 5 },
  { name: "嵌入式系统", category: "系统开发", level: 5 },
  { name: "CDMA2000", category: "通信协议", level: 5 },
  { name: "系统架构设计", category: "架构", level: 5 },
  { name: "团队管理", category: "管理", level: 4 },
  
  // 游戏开发技能
  { name: "游戏引擎", category: "游戏开发", level: 5 },
  { name: "Unity/Unreal", category: "游戏开发", level: 4 },
  { name: "服务器架构", category: "后端", level: 5 },
  { name: "网络编程", category: "网络", level: 5 },
  { name: "项目管理", category: "管理", level: 5 },
  
  // SaaS/区块链技能
  { name: "全栈开发", category: "开发", level: 5 },
  { name: "SaaS架构", category: "架构", level: 5 },
  { name: "区块链", category: "新兴技术", level: 4 },
  { name: "产品设计", category: "产品", level: 4 },
  { name: "独立创业", category: "创业", level: 5 },
  
  // 量化交易技能
  { name: "Python", category: "编程语言", level: 5 },
  { name: "量化策略", category: "金融", level: 5 },
  { name: "数据分析", category: "数据", level: 5 },
  { name: "算法交易", category: "金融", level: 5 },
  { name: "风险管理", category: "金融", level: 4 },
  { name: "机器学习", category: "AI/ML", level: 4 },
];

const categories = Array.from(new Set(skills.map(s => s.category)));

const getLevelColor = (level: number) => {
  if (level >= 5) return "from-purple-500 to-pink-500";
  if (level >= 4) return "from-blue-500 to-cyan-500";
  if (level >= 3) return "from-green-500 to-emerald-500";
  return "from-gray-400 to-gray-500";
};

const getLevelLabel = (level: number) => {
  if (level >= 5) return "专家";
  if (level >= 4) return "精通";
  if (level >= 3) return "熟练";
  return "了解";
};

export default function SkillsShowcase() {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          核心能力
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 text-lg">
          17年跨领域技术积累，从电信到金融的全面能力
        </p>
      </motion.div>

      {/* 技能云 */}
      <div className="flex flex-wrap gap-3 justify-center mb-16">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.03,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            className="relative group"
          >
            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} text-white font-semibold text-sm shadow-lg cursor-pointer transition-all duration-300`}>
              {skill.name}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-slate-900 text-white text-xs px-2 py-1 rounded">
                {getLevelLabel(skill.level)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 能力矩阵 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, catIndex) => {
          const categorySkills = skills.filter(s => s.category === category);
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                {category}
              </h3>
              <div className="space-y-3">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level * 20}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: catIndex * 0.1 + 0.2 }}
                          className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)}`}
                        />
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 w-8">
                        {skill.level}/5
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

