import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Triangle, Infinity, Star, Target, Shield, RefreshCw, Activity } from 'lucide-react';

const Card = ({ children }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 text-white backdrop-blur-lg ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1">
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(0,245,212,0.18),transparent_60%)]" />
    {children}
  </div>
);

const Highlights = () => {
  return (
    <section className="relative w-full bg-[#0E0F16] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(0,245,212,0.08),transparent),radial-gradient(700px_350px_at_90%_20%,rgba(255,209,102,0.08),transparent)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <Card>
              <div className="mb-4 flex items-center gap-3">
                <Circle className="h-5 w-5 text-[#00F5D4]" />
                <h3 className="text-xl font-semibold">Mission</h3>
              </div>
              <p className="text-white/80">To engineer intelligent systems that harmonize with people, business, and the planet.</p>
            </Card>

            <Card>
              <div className="mb-4 flex items-center gap-3">
                <Triangle className="h-5 w-5 text-[#FFD166]" />
                <h3 className="text-xl font-semibold">Vision</h3>
              </div>
              <p className="text-white/80">To become the global river of innovation — empowering growth through balance and flow.</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg ring-1 ring-white/10"
          >
            <div className="mb-4 flex items-center gap-3">
              <Infinity className="h-5 w-5 text-[#FF6F61]" />
              <h3 className="text-xl font-semibold">Core Values</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <Activity className="mt-0.5 h-5 w-5 text-[#00F5D4]" />
                <div>
                  <div className="font-medium">Flow</div>
                  <p className="text-sm text-white/70">Alignment creates success</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <Target className="mt-0.5 h-5 w-5 text-[#FFD166]" />
                <div>
                  <div className="font-medium">Precision</div>
                  <p className="text-sm text-white/70">Purpose in every detail</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <Star className="mt-0.5 h-5 w-5 text-emerald-300" />
                <div>
                  <div className="font-medium">Balance</div>
                  <p className="text-sm text-white/70">Harmony in all we build</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <Shield className="mt-0.5 h-5 w-5 text-[#FF6F61]" />
                <div>
                  <div className="font-medium">Integrity</div>
                  <p className="text-sm text-white/70">Prosperity built on trust</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 sm:col-span-2">
                <RefreshCw className="mt-0.5 h-5 w-5 text-sky-300" />
                <div>
                  <div className="font-medium">Continuity</div>
                  <p className="text-sm text-white/70">We keep moving forward</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
