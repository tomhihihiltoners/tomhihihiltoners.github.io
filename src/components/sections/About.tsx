
"use client";
import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
            <p className="text-lg text-white/70 leading-relaxed">
              {SITE_CONFIG.about}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-4"
          >
             {/* Placeholder for a professional photo - using a stylish abstract gradient for now */}
            <div className="w-full h-full rounded-xl bg-gradient-to-br from-accent/20 via-transparent to-white/5 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

