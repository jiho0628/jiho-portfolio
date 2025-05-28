'use client';

import Hero from '../components/Hero';
import AboutMe from '@/components/AboutMe';
import Education from '@/components/Education';
import Work from '@/components/Work';
import Products from '@/components/Products';
import Contacts from '@/components/Contacts';
import Skill from '@/components/Skill';
import { useState } from 'react';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Navbar shouldAnimate={!isLoading} />
      <main className="min-h-screen font-sans text-darkblue bg-whitegray">
        {isLoading && <Loader onFinish={() => setIsLoading(false)} />}
        {!isLoading && (
          <>
            <Hero triggerAnimation={!isLoading} />
            <AboutMe />
            <Education />
            <Work />
            <Skill />
            <Products />
            <Contacts />
          </>
        )}
      </main>
    </>
  );
}