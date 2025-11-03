import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-[#0E0F16] text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient Overlay - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0f1640] to-[#0E0F16]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,245,212,0.20),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,209,102,0.18),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(255,111,97,0.18),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs tracking-wide text-white/80 backdrop-blur-md ring-1 ring-white/10"
        >
          <span className="h-2 w-2 rounded-full bg-[#00F5D4] shadow-[0_0_12px_#00F5D4]" />
          Digital Zen • Fluid Futurism
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="bg-gradient-to-r from-[#00F5D4] via-[#FFD166] to-[#FF6F61] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Where Innovation Flows.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Jinzu Labs — The Golden River of Technology and Prosperity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-10"
        >
          <a
            href="#flow"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 text-base font-semibold text-[#0E0F16]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#00F5D4] via-[#FFD166] to-[#FF6F61] transition-[filter] duration-500 group-hover:blur-[6px]" />
            <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
            <span className="relative z-10">Start Flowing</span>
            {/* Ripple */}
            <span className="pointer-events-none absolute inset-0 animate-[pulse_2.6s_ease-in-out_infinite] rounded-full ring-2 ring-white/20" />
          </a>
        </motion.div>
      </div>

      {/* Subtle Infinite Wave at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0E0F16] to-transparent" />
    </section>
  );
};

export default Hero;
