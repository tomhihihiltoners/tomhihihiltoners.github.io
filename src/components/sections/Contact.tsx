
"use client";
import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Get in <span className="text-accent">Touch</span>
          </motion.h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all group"
          >
            <p className="text-xl text-white/60 mb-8">
              I am always open to collaborating on creative projects or chatting about visual storytelling.
            </p>
            <motion.a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-accent hover:text-white transition-all"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </motion.a>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {SITE_CONFIG.contact.socials.map((social) => (
              <motion.a
                key={social.platform}
                href={social.url}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-3 rounded-full border border-white/10 text-sm text-white/70 hover:text-accent hover:border-accent/50 transition-colors"
              >
                {social.platform}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

