"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import Passions from '@/components/Passions';
import Legacy from '@/components/Legacy';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <Passions />
        <Legacy />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;