"use client";

import React, { useEffect, useRef } from "react";
import { TrendingUp, Lightbulb, ThumbsUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nunito, Cabin } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "700", "800", "900"] });
const cabin = Cabin({ subsets: ["latin"] });

const statsData = [
  {
    id: 1,
    icon: <TrendingUp className="w-8 h-8 text-[#00735C]" />,
    value: 98,
    suffix: "%",
    label: "Beneficiaries Reached",
  },
  {
    id: 2,
    icon: <Lightbulb className="w-8 h-8 text-[#00735C]" />,
    value: 1265,
    suffix: "+",
    label: "Families Benefited",
  },
  {
    id: 3,
    icon: <ThumbsUp className="w-8 h-8 text-[#00735C]" />,
    value: 36,
    suffix: "k",
    label: "Students Supported",
  },
];

export default function StatsSection() {
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const stats = statsRefs.current;

    stats.forEach((stat, index) => {
      if (!stat) return;

      const targetValue = statsData[index].value;
      const counterObj = { val: 0 };
      const counterDisplay = stat.querySelector(".counter-value");

      gsap.to(counterObj, {
        val: targetValue,
        duration: 2,
        scrollTrigger: {
          trigger: stat,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (counterDisplay) {
            counterDisplay.textContent = Math.floor(counterObj.val).toString();
          }
        },
      });

      // Fade in and slide up animation for the card
      gsap.fromTo(stat,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-24">
      {statsData.map((stat, index) => (
        <div
          key={stat.id}
          ref={(el) => { statsRefs.current[index] = el; }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full border-2 border-[#00735C]/30 flex items-center justify-center mb-6 shadow-sm">
            {stat.icon}
          </div>

          <div className={`${nunito.className} text-4xl md:text-5xl font-black text-[#1A2E35] mb-2 flex items-baseline`}>
            <span className="counter-value">0</span>
            <span>{stat.suffix}</span>
          </div>

          <p className={`${cabin.className} text-gray-500 font-bold uppercase tracking-wider text-xs md:text-sm`}>
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
