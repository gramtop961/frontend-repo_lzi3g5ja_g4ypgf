import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const creations = [
  {
    title: 'KyotoOS',
    desc: 'Adaptive edge computing system that learns your workload flow.',
  },
  {
    title: 'RiverSense',
    desc: 'IoT stream of intelligence for factories and farms.',
  },
  {
    title: 'Aurora UX',
    desc: 'Human-centered design system with living motion grammar.',
  },
  {
    title: 'GoldenPath AI',
    desc: 'Decision orchestration that aligns incentives with impact.',
  },
];

const team = [
  { name: 'Mika Tanaka', role: 'Systems Architect', img: 'https://i.pravatar.cc/200?img=12' },
  { name: 'Leo Park', role: 'Design Engineer', img: 'https://i.pravatar.cc/200?img=32' },
  { name: 'Aria Chen', role: 'Research Lead', img: 'https://i.pravatar.cc/200?img=48' },
  { name: 'Jon Rivera', role: 'ML Engineer', img: 'https://i.pravatar.cc/200?img=65' },
];

const Engage = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-[#0E0F16] pb-20 pt-10 text-white">
      {/* Showcase */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Our Creations</h3>
            <p className="mt-1 text-sm text-white/70">Explore the Flow →</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button onClick={() => scroll('left')} className="rounded-full bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/20">◀</button>
            <button onClick={() => scroll('right')} className="rounded-full bg-white/10 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/20">▶</button>
          </div>
        </div>

        <div ref={scrollRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10">
          {creations.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="relative h-56 w-80 shrink-0 snap-start overflow-hidden rounded-2xl bg-white/5 p-5 backdrop-blur ring-1 ring-white/10"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00F5D4]/10 via-transparent to-[#FFD166]/10" />
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{c.title}</h4>
                  <p className="mt-2 text-sm text-white/75">{c.desc}</p>
                </div>
                <button className="self-start rounded-full bg-white/10 px-4 py-2 text-xs ring-1 ring-white/10 transition hover:bg-white/20">Learn more</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mx-auto mt-20 max-w-6xl px-6">
        <h3 className="text-2xl font-semibold">The River Makers</h3>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-4 text-center backdrop-blur ring-1 ring-white/10"
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-1 ring-white/10">
                <img src={t.img} alt={t.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-white/70">{t.role}</div>
              {/* wave overlay */}
              <div className="pointer-events-none absolute -bottom-8 left-0 right-0 h-16 translate-y-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,245,212,0.18),transparent)] opacity-60 transition-transform duration-700 group-hover:translate-y-2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="mx-auto mt-24 max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-white/5 p-10 backdrop-blur-xl ring-1 ring-white/10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_300px_at_50%_-10%,rgba(0,245,212,0.16),transparent),radial-gradient(600px_200px_at_70%_120%,rgba(255,209,102,0.14),transparent),radial-gradient(600px_200px_at_30%_120%,rgba(255,111,97,0.14),transparent)]" />
          <h3 className="relative text-2xl font-semibold">Join the Flow</h3>
          <p className="relative mx-auto mt-3 max-w-2xl text-white/80">Let’s create something that flows — together.</p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-2 text-sm font-semibold text-[#0E0F16]">
              <span className="absolute inset-0 bg-gradient-to-r from-[#00F5D4] via-[#FFD166] to-[#FF6F61] transition duration-500 group-hover:blur-[6px]" />
              <span className="absolute inset-0 rounded-full ring-1 ring-white/20" />
              <span className="relative">Contact Us</span>
              <span className="pointer-events-none absolute inset-0 animate-[pulse_2.6s_ease-in-out_infinite] rounded-full ring-2 ring-white/20" />
            </a>
            <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">Collaborate</a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-16">
        <div className="h-[2px] w-full bg-gradient-to-r from-[#0E0F16] via-[#00F5D4] via-30% to-[#FFD166]" />
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-white/60">© {new Date().getFullYear()} Jinzu Labs — All rights reserved.</div>
      </footer>
    </section>
  );
};

export default Engage;
