import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="flow" className="relative w-full overflow-hidden bg-[#0E0F16] py-24 text-white">
      {/* Water-light background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(0,245,212,0.12),transparent),radial-gradient(800px_400px_at_10%_80%,rgba(255,209,102,0.09),transparent),radial-gradient(700px_400px_at_90%_70%,rgba(255,111,97,0.09),transparent)]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'1440\' height=\'320\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3ClinearGradient id=\'g\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'0%25\'%3E%3Cstop offset=\'0%25\' stop-color=\'%2300F5D4\' stop-opacity=\'0.2\'/%3E%3Cstop offset=\'50%25\' stop-color=\'%23FFD166\' stop-opacity=\'0.18\'/%3E%3Cstop offset=\'100%25\' stop-color=\'%23FF6F61\' stop-opacity=\'0.2\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d=\'M0 160 C 120 140 240 180 360 160 C 480 140 600 100 720 120 C 840 140 960 220 1080 200 C 1200 180 1320 120 1440 140 V 320 H 0 Z\' fill=\'url(%23g)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl font-bold sm:text-4xl"
        >
          Built to Flow. Designed to Evolve.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mt-6 max-w-3xl text-center text-white/80"
        >
          Born from the concept of the Golden River, Jinzu Labs merges spirituality, design, and technology. We build systems that adapt, evolve, and endure — technology that flows with human potential.
        </motion.p>

        {/* Feature chips expressing Metal → Water → Wood balance */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span className="rounded-full bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur ring-1 ring-white/10">Metal · <span className="text-[#FFD166]">Cyber Gold</span></span>
          <span className="rounded-full bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur ring-1 ring-white/10">Water · <span className="text-[#00F5D4]">Aqua Flow</span></span>
          <span className="rounded-full bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur ring-1 ring-white/10">Wood · <span className="text-emerald-300">Living Growth</span></span>
        </div>
      </div>
    </section>
  );
};

export default About;
