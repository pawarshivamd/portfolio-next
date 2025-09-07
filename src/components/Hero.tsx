'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Galaxy from '@/img/galaxy.svg';
import HeroImage from '@/img/hero.png';


export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Frontend Developer', 'MERN Developer', 'React Developer', 'Web Developer'];
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (lettersRef.current.length > 0) {
        gsap.to(lettersRef.current, {
          y: -10,
          opacity: 0,
          duration: 0.6,
          stagger: 0.02,
          ease: "circ.out",
          onComplete: () => {
            setCurrentText((prev) => (prev + 1) % texts.length);
            // After state update, refs will be reassigned, then animate in
            setTimeout(() => {
              gsap.fromTo(lettersRef.current, {
                y: 20,
                opacity: 0
              }, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.02,
                ease: "circ.out"
              });
            }, 10); // Small delay to allow re-render
          }
        });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [texts.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-image');
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const rate = -0.13; // negative to move up
        element.style.transform = `translateY(${scrolled * rate}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <>
      <section id="home"
        className="relative mt-[5rem] mb-20 overflow-hidde"
        aria-label="Hero section - Introduction to Shivam Pawar">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-yellow-100 to-green-100 dark:from-yellow-300 dark:to-green-400 dark:opacity-20 rounded-full blur-3xl"></div>
          <Image className='absolute top-[-90px] left-[0] max-w-[900px] parallax-image' src={Galaxy} width={243} height={243} loading='lazy' alt='' />
        </div>
        <div className="max-w-[87.5rem] mx-auto relative px-4 sm:px-6 lg:px-8  z-10">
          <div className='w-100'>
            <div className="main relative">

              <svg xmlns="http://www.w3.org/2000/svg" className='hidden md:block absolute top-0 right-[.9375rem] text-[#b0c4de] dark:text-white w-[clamp(3.125rem,-1.8365rem+13.7821vw,8.5rem)] h-auto' width="136" height="53" viewBox="0 0 136 53" fill="none">
                <rect x="13.4585" width="10" height="52" rx="5" transform="rotate(15 13.4585 0)" fill="currentcolor" />
                <rect x="126.071" width="10" height="52" rx="5" transform="rotate(15 126.071 0)" fill="currentcolor" />
                <rect x="69.7651" width="10" height="52" rx="5" transform="rotate(15 69.7651 0)" fill="currentcolor" />
                <rect x="41.6118" width="10" height="52" rx="5" transform="rotate(15 41.6118 0)" fill="currentcolor" />
                <rect x="97.918" width="10" height="52" rx="5" transform="rotate(15 97.918 0)" fill="currentcolor" />
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" className='hidden md:block absolute bottom-0 left-[15px] text-[#b0c4de] dark:text-white w-[clamp(3.125rem,-1.8365rem+13.7821vw,8.5rem)] h-auto' width="136" height="53" viewBox="0 0 136 53" fill="none">
                <rect x="98.0713" width="10" height="52" rx="5" transform="rotate(15 98.0713 0)" fill="currentcolor" />
                <rect x="41.7646" width="10" height="52" rx="5" transform="rotate(15 41.7646 0)" fill="currentcolor" />
                <rect x="13.6113" width="10" height="52" rx="5" transform="rotate(15 13.6113 0)" fill="currentcolor" />
                <rect x="126.225" width="10" height="52" rx="5" transform="rotate(15 126.225 0)" fill="currentcolor" />
                <rect x="69.918" width="10" height="52" rx="5" transform="rotate(15 69.918 0)" fill="currentcolor" />
              </svg>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="py-5 px-5 md:px-12 lg:pb-[8.125rem]">
                  <div className="space-y-6 md:space-y-8">
                    <h1
                      className="text-52  font-bold text-gray-900 dark:text-black"
                    >
                      Hi, I&apos;m <br className='hidden lg:block' />
                      <span className="">
                        Shivam Pawar
                      </span>
                    </h1>

                    <div
                      className=""
                      aria-live="polite"
                      aria-label={`Currently showing: ${texts[currentText]}`}
                    >
                      <h2
                        className="text-2xl md:text-4xl text-gray-600 dark:text-gray-700 font-medium"
                      >
                        I&apos;m a{' '}
                        <span className="font-semibold text-blue-600 dark:text-blue-500">
                          {texts[currentText].split('').map((char, index) => (
                            <span
                              key={`${currentText}-${index}`}
                              className="inline-block relative"
                              ref={el => {
                                if (el) lettersRef.current[index] = el;
                              }}
                            >
                              {char === ' ' ? '\u00A0' : char}
                            </span>
                          ))}
                        </span>
                      </h2>
                    </div>

                    <p
                      className="text-18 text-gray-600 dark:text-gray-600 "
                    >
                      Passionate about creating beautiful, functional, and user-friendly web applications.
                      I specialize in React, Next.js, and modern web technologies to build high-performance, responsive UIs.
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block px-5">
                  <div className='relative w-full h-full flex justify-center items-center min-h-[300px]'>
                    <Image className='absolute top-[-90px] left-[0] max-w-[900px] parallax-image' src={Galaxy} width={243} height={243} loading='lazy' alt={''} />
                  </div>

                  <Image className='absolute bottom-[-90px] right-[-50px] max-w-[900px] h-auto parallax-image' src={HeroImage} width={600} height={590} loading='lazy' alt={''} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
