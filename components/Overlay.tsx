"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: 30% to 50%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [50, 0, -50]);

  // Section 3: 60% to 80%
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8], [50, 0, -50]);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-center items-center p-8 pointer-events-none z-10 text-white">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-end pb-32 md:pb-0 md:items-start md:justify-center text-center max-w-7xl mx-auto w-full px-4 md:px-8"
      >
        <div className="max-w-xs md:max-w-sm w-full">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Yuvanesh P
          </h1>
          <p className="text-lg md:text-xl text-white/70">
            Software Developer & AI Enthusiast.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex flex-col items-center justify-start pt-32 md:pt-0 md:items-end md:justify-center text-center max-w-7xl mx-auto w-full px-4 md:px-8"
      >
        <div className="max-w-xs md:max-w-sm w-full">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            I build intelligent apps.
          </h2>
          <p className="text-base md:text-lg text-white/70">
            Combining AI, backend architecture, and modern frontends to create impactful digital experiences.
          </p>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex flex-col items-center justify-end pb-32 md:pb-0 md:items-start md:justify-center text-center max-w-7xl mx-auto w-full px-4 md:px-8"
      >
        <div className="max-w-xs md:max-w-sm w-full">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Bridging logic and design.
          </h2>
          <p className="text-base md:text-lg text-white/70">
            B.Tech IT student with a focus on scalable systems and intuitive user interfaces.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
