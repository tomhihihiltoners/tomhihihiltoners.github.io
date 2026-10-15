
"use client";
import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants";
import { Heart } from "lucide-react";

const Personal = () => {
  return (
    <section id="personal" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-8 md:p-16 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Heart className="w-32 h-32 text-accent" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                {SITE_CONFIG.personal.title}
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                {SITE_CONFIG.personal.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Personal;

