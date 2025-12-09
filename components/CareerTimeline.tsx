"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CareerPeriod {
  id: string;
  title: string;
  period: string;
  company: string;
  role: string;
  description: string;
  link: string;
  color: string;
}

const careerPeriods: CareerPeriod[] = [
  {
    id: "telecom",
    title: "电信开发",
    period: "2007-2012",
    company: "北电网络 / 爱立信",
    role: "开发者 / Domain Leader",
    description: "从事CDMA2000基站（BTS）开发工作",
    link: "/telecom",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "gaming",
    title: "游戏开发",
    period: "2012-2018",
    company: "魔龙网络科技有限公司",
    role: "合伙人",
    description: "从事游戏研发工作（包括网游和手游）",
    link: "/gaming",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "saas-blockchain",
    title: "SaaS/区块链",
    period: "2018-2020",
    company: "独立开发者",
    role: "独立开发者",
    description: "开发了SaaS商城和区块链项目",
    link: "/saas-blockchain",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "quant-trading",
    title: "量化交易",
    period: "2020-至今",
    company: "某证券公司",
    role: "量化交易",
    description: "从事量化交易工作",
    link: "/quant-trading",
    color: "from-orange-500 to-red-500",
  },
];

export default function CareerTimeline() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-orange-500 hidden md:block rounded-full" />
        
        <div className="space-y-8">
          {careerPeriods.map((period, index) => (
            <motion.div
              key={period.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <Link href={period.link}>
                <div className="md:flex items-start gap-8 group cursor-pointer">
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className={`absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r ${period.color} border-4 border-slate-900 z-10 hidden md:block shadow-lg`}
                  />
                  
                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`flex-1 bg-white/10 dark:bg-slate-800/10 backdrop-blur-md rounded-xl shadow-lg p-6 ml-0 md:ml-16 hover:shadow-2xl transition-all border border-white/10 hover:border-white/20`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white bg-gradient-to-r ${period.color} mb-3 shadow-lg`}>
                          {period.period}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {period.title}
                        </h3>
                        <p className="text-lg text-purple-200 font-semibold mb-1">
                          {period.company}
                        </p>
                        <p className="text-sm text-slate-300 mt-1">
                          {period.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-200 leading-relaxed mb-4">
                      {period.description}
                    </p>
                    <div className="flex items-center text-purple-300 font-semibold group-hover:text-white transition-colors">
                      探索这段经历
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="ml-2"
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

