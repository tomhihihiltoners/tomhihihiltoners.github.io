
"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Interests from "@/components/sections/Interests";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Personal from "@/components/sections/Personal";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Interests />
      <Skills />
      <Projects />
      <Personal />
      <Contact />

      <footer className="py-12 text-center text-white/30 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Dmitry Davydov. All rights reserved.
      </footer>
    </main>
  );
}
