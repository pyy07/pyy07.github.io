"use client";

export default function SaasDiagram() {
  return (
    <div className="w-full overflow-x-auto rounded-lg bg-slate-50 border border-slate-200 shadow-lg">
      <div className="w-full min-w-[800px] md:min-w-0" style={{ aspectRatio: "800/500" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 500"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
          style={{ backgroundColor: "#f8fafc", fontFamily: "'Segoe UI', sans-serif" }}
        >
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="1.5" floodOpacity="0.2" />
            </filter>

            {/* 1. 包裹定义 (24x20) */}
            <g id="real-parcel">
              <g transform="translate(0, 0)">
                <rect x="-12" y="-10" width="24" height="20" rx="2" fill="#d97706" stroke="#92400e" strokeWidth="1.5" />
                <rect x="-3" y="-10" width="6" height="20" fill="#fcd34d" opacity="0.9" />
                <rect x="-12" y="-3" width="24" height="6" fill="#fcd34d" opacity="0.9" />
                <rect x="2" y="-6" width="7" height="8" fill="#fff" />
              </g>
            </g>

            {/* 2. 订单信号图标 (B2B2C 专用) */}
            <g id="order-signal">
              <circle r="10" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
              <path d="M-5,-2 L0,4 L5,-6" fill="none" stroke="#fff" strokeWidth="2" />
            </g>

            <linearGradient id="coinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* 连线层 */}
          <g fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6,4">
            <path d="M120,120 L300,250" />
            <path d="M120,380 L300,250" />
            <path d="M300,250 L500,250" />
            <path d="M500,250 L680,250" />
          </g>

          {/* ==================== 角色绘制 ==================== */}

          {/* 供应商 (S) */}
          <g transform="translate(120, 120)" filter="url(#shadow)">
            <path d="M-30,0 L-30,-30 L0,-45 L30,-30 L30,0 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" />
            <rect x="-12" y="-15" width="24" height="15" fill="#94a3b8" />
            <text y="25" fontSize="12" fill="#64748b" fontWeight="bold" textAnchor="middle">供应商 (S)</text>
          </g>

          {/* 平台方 (PB) */}
          <g transform="translate(120, 380)" filter="url(#shadow)">
            <rect x="-20" y="-40" width="40" height="60" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="2" />
            <rect x="-12" y="-30" width="24" height="30" fill="#93c5fd" />
            <text y="35" fontSize="12" fill="#1e40af" fontWeight="bold" textAnchor="middle">平台方 (PB)</text>
            <text y="50" fontSize="10" fill="#3b82f6" textAnchor="middle">(商场/流量)</text>
          </g>

          {/* 商户 (B) */}
          <g transform="translate(300, 250)" filter="url(#shadow)">
            <rect x="-30" y="10" width="60" height="15" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
            <circle cx="0" cy="-15" r="15" fill="#fca5a5" stroke="#be123c" strokeWidth="2" />
            <path d="M-15,10 Q0,20 15,10 L15,25 L-15,25 Z" fill="#f43f5e" />
            <text y="45" fontSize="12" fill="#be123c" fontWeight="bold" textAnchor="middle">商户 (B)</text>
            <text y="60" fontSize="10" fill="#be123c" textAnchor="middle">(柜台/库存)</text>
          </g>

          {/* SaaS 系统 */}
          <g transform="translate(500, 250)" filter="url(#shadow)">
            <rect x="-35" y="-30" width="70" height="50" rx="6" fill="#1e293b" stroke="#0f172a" strokeWidth="3" />
            <rect x="-28" y="-23" width="56" height="36" fill="#0f172a" />
            <g transform="translate(-20, 8) scale(1, -1)">
              <rect x="0" y="0" width="6" height="10" fill="#22c55e">
                <animate attributeName="height" values="5;20;10;5" dur="1.5s" repeatCount="indefinite" />
              </rect>
              <rect x="10" y="0" width="6" height="15" fill="#3b82f6">
                <animate attributeName="height" values="15;5;25;15" dur="1.5s" repeatCount="indefinite" begin="0.3s" />
              </rect>
              <rect x="20" y="0" width="6" height="8" fill="#eab308">
                <animate attributeName="height" values="8;18;6;8" dur="1.5s" repeatCount="indefinite" begin="0.6s" />
              </rect>
              <rect x="30" y="0" width="6" height="12" fill="#f43f5e">
                <animate attributeName="height" values="12;8;22;12" dur="1.5s" repeatCount="indefinite" begin="0.9s" />
              </rect>
            </g>
            <path d="M0,-30 L0,-45" stroke="#1e293b" strokeWidth="2" />
            <circle cx="0" cy="-45" r="3" fill="#22c55e">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="0.8s" repeatCount="indefinite" />
            </circle>
            <text y="40" fontSize="12" fill="#1e293b" fontWeight="bold" textAnchor="middle">SaaS 中台</text>
          </g>

          {/* 消费者 (C) */}
          <g transform="translate(680, 250)" filter="url(#shadow)">
            <circle cx="0" cy="-20" r="15" fill="#d8b4fe" stroke="#6b21a8" strokeWidth="2" />
            <path d="M-15,0 Q0,10 15,0 L12,25 L-12,25 Z" fill="#a855f7" />
            <text y="45" fontSize="12" fill="#6b21a8" fontWeight="bold" textAnchor="middle">消费者 (C)</text>
            <g className="success-pop" transform="translate(0, -50)">
              <circle r="12" fill="#22c55e" stroke="#fff" strokeWidth="2" />
              <path d="M-6,0 L-2,4 L6,-4" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <g transform="translate(12, -12)">
                <circle r="7" fill="url(#coinGrad)" stroke="#b45309" strokeWidth="1" />
                <text y="3" fontSize="9" textAnchor="middle" fill="#78350f" fontWeight="bold">¥</text>
              </g>
            </g>
          </g>

          {/* ==================== 动画逻辑修正 ==================== */}
          <style>
            {`
              /* 1. B2C 模式 (0-4s) */
              .flow-b2c { animation: animB2C 12s infinite; }
              @keyframes animB2C {
                0% { opacity: 0; transform: translate(300px, 250px) scale(0); }
                1% { opacity: 1; transform: translate(300px, 250px) scale(1); }
                15% { transform: translate(500px, 250px) scale(1.1); } 
                25% { transform: translate(680px, 250px) scale(1); opacity: 1; }
                26% { opacity: 0; }
                100% { opacity: 0; }
              }

              /* 2. B2B2C 模式 (4-8s) */
              .signal-b2b2c { animation: signalMove 12s infinite; opacity: 0; }
              .parcel-b2b2c { animation: parcelMoveB2B2C 12s infinite; opacity: 0; }

              /* 信号动画: PB -> B */
              @keyframes signalMove {
                0% { opacity: 0; }
                33% { opacity: 0; transform: translate(120px, 380px) scale(0.5); }
                34% { opacity: 1; transform: translate(120px, 380px) scale(1); }
                38% { opacity: 1; transform: translate(300px, 250px) scale(1); }
                39% { opacity: 0; transform: translate(300px, 250px); }
                100% { opacity: 0; }
              }

              /* 包裹动画: B -> C */
              @keyframes parcelMoveB2B2C {
                0% { opacity: 0; }
                38% { opacity: 0; transform: translate(300px, 250px) scale(0); }
                39% { opacity: 1; transform: translate(300px, 250px) scale(1); }
                50% { transform: translate(500px, 250px) scale(1.1); } 
                60% { transform: translate(680px, 250px) scale(1); opacity: 1; }
                61% { opacity: 0; }
                100% { opacity: 0; }
              }

              /* 3. S2B2C 模式 (8-12s) */
              .flow-s2b2c { animation: animS2B2C 12s infinite; opacity: 0; }
              @keyframes animS2B2C {
                0% { opacity: 0; }
                66% { opacity: 0; transform: translate(120px, 120px) scale(0); }
                67% { opacity: 1; transform: translate(120px, 120px) scale(1); }
                75% { transform: translate(300px, 250px) scale(1); }
                85% { transform: translate(500px, 250px) scale(1.1); }
                95% { transform: translate(680px, 250px) scale(1); opacity: 1; }
                96% { opacity: 0; }
                100% { opacity: 0; }
              }

              /* 支付反馈 */
              .success-pop { opacity: 0; }
              .pop-b2c { animation: popUp 12s infinite 2.5s; }
              .pop-b2b2c { animation: popUp 12s infinite 6.0s; }
              .pop-s2b2c { animation: popUp 12s infinite 9.5s; }

              @keyframes popUp {
                0% { opacity: 0; transform: translate(0, -20px) scale(0.5); }
                10% { opacity: 1; transform: translate(0, -40px) scale(1.2); }
                20% { opacity: 1; transform: translate(0, -40px) scale(1); }
                30% { opacity: 0; transform: translate(0, -50px); }
                100% { opacity: 0; }
              }
              
              /* 标题切换 */
              .title { font-size: 18px; font-weight: bold; text-anchor: middle; opacity: 0; }
              .t1 { fill: #be123c; animation: showTitle 12s infinite 0s; }
              .t2 { fill: #1d4ed8; animation: showTitle 12s infinite 4s; }
              .t3 { fill: #b45309; animation: showTitle 12s infinite 8s; }

              @keyframes showTitle {
                0% { opacity: 0; transform: translateY(10px); }
                5% { opacity: 1; transform: translateY(0); }
                28% { opacity: 1; transform: translateY(0); }
                33% { opacity: 0; transform: translateY(-10px); }
                100% { opacity: 0; }
              }

              /* 响应式字体大小 */
              @media (max-width: 640px) {
                .title { font-size: 14px; }
                text { font-size: 10px !important; }
              }
            `}
          </style>

          {/* ==================== 实例化动画对象 ==================== */}

          {/* B2C */}
          <use href="#real-parcel" className="flow-b2c" />

          {/* B2B2C */}
          <use href="#order-signal" className="signal-b2b2c" />
          <use href="#real-parcel" className="parcel-b2b2c" />

          {/* S2B2C */}
          <use href="#real-parcel" className="flow-s2b2c" />

          {/* 支付反馈 */}
          <g transform="translate(680, 250)">
            <g className="success-pop pop-b2c">
              <circle r="12" fill="#22c55e" stroke="#fff" strokeWidth="2" />
              <path d="M-6,0 L-2,4 L6,-4" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <g transform="translate(12, -12)">
                <circle r="7" fill="url(#coinGrad)" stroke="#b45309" strokeWidth="1" />
                <text y="3" fontSize="9" textAnchor="middle" fill="#78350f" fontWeight="bold">¥</text>
              </g>
            </g>
            <g className="success-pop pop-b2b2c">
              <circle r="12" fill="#22c55e" stroke="#fff" strokeWidth="2" />
              <path d="M-6,0 L-2,4 L6,-4" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <g transform="translate(12, -12)">
                <circle r="7" fill="url(#coinGrad)" stroke="#b45309" strokeWidth="1" />
                <text y="3" fontSize="9" textAnchor="middle" fill="#78350f" fontWeight="bold">¥</text>
              </g>
            </g>
            <g className="success-pop pop-s2b2c">
              <circle r="12" fill="#22c55e" stroke="#fff" strokeWidth="2" />
              <path d="M-6,0 L-2,4 L6,-4" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <g transform="translate(12, -12)">
                <circle r="7" fill="url(#coinGrad)" stroke="#b45309" strokeWidth="1" />
                <text y="3" fontSize="9" textAnchor="middle" fill="#78350f" fontWeight="bold">¥</text>
              </g>
            </g>
          </g>

          {/* 标题 */}
          <g transform="translate(400, 50)">
            <rect x="-200" y="-25" width="400" height="40" rx="8" fill="#fff" stroke="#cbd5e1" strokeWidth="2" filter="url(#shadow)" />
            <text dy="5" className="title t1">B2C: 我自己开店卖货 (独门独户)</text>
            <text dy="5" className="title t2">B2B2C: 我在商场租柜台 (平台派单)</text>
            <text dy="5" className="title t3">S2B2C: 供应商给我供货 (供应链赋能)</text>
          </g>
        </svg>
      </div>
    </div>
  );
}

