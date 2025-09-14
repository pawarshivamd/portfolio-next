'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Html from '@/img/skill/html.png'
import JS from '@/img/skill/javascript.png'
import React from '@/img/skill/react.png'
import MaterialUI from '@/img/skill/mui.png'
import Jq from '@/img/skill/jquery.png'
import TailwindCSS from '@/img/skill/tailwind.png'
import sass from '@/img/skill/sass.png'
import Typescript from '@/img/skill/typescript.png'
import css from '@/img/skill/css.webp'
import SEO from '@/img/skill/seo.webp'
import Code from '@/img/skill/code-review.png'
import Git from '@/img/skill/git.png'
import Responsive from '@/img/skill/responsive-design.png'
import WebPerformance from '@/img/skill/web-performance.png'

import Image, { StaticImageData } from 'next/image';

interface Skill {
  name: string;
  level: number;
  icon: string | StaticImageData;
  color: string;
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skillsRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(skillsRef);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const skills: Skill[] = [
    { name: 'HTML5', level: 98, icon: Html, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 98, icon: css, color: 'from-blue-500 to-purple-500' },
    { name: 'JavaScript', level: 85, icon: JS, color: 'from-yellow-400 to-orange-500' },
    { name: 'jQuery', level: 80, icon: Jq, color: 'from-blue-600 to-blue-700' },
    { name: 'Bootstrap', level: 95, icon: '🎯', color: 'from-purple-500 to-pink-500' },
    { name: 'Tailwind CSS', level: 95, icon: TailwindCSS, color: 'from-cyan-500 to-blue-500' },
    { name: 'React JS', level: 80, icon: React, color: 'from-blue-500 to-cyan-500' },
    { name: 'Material-UI', level: 75, icon: MaterialUI, color: 'from-blue-600 to-indigo-600' },
    { name: 'SASS', level: 80, icon: sass, color: 'from-pink-500 to-purple-500' },
    { name: 'TypeScript', level: 75, icon: Typescript, color: 'from-blue-600 to-blue-700' },
    { name: 'Git & GitHub', level: 85, icon: Git, color: 'from-orange-500 to-red-500' },
    { name: 'Bitbucket', level: 80, icon: '🔵', color: 'from-blue-500 to-blue-600' },
    { name: 'Code Review', level: 85, icon: Code, color: 'from-green-500 to-emerald-500' },
    { name: 'Responsive Design', level: 98, icon: Responsive, color: 'from-purple-500 to-pink-500' },
    { name: 'Figma to HTML', level: 98, icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { name: 'Web Performance', level: 80, icon: WebPerformance, color: 'from-green-500 to-emerald-500' },
    { name: 'SEO', level: 80, icon: SEO, color: 'from-blue-500 to-cyan-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05
      }
    }
  };


  return (
    <section ref={skillsRef} id="skills" className="py-10 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-yellow-100 to-green-100 dark:from-yellow-900 dark:to-green-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies in the web development world.
          </p>
        </motion.div>

        {/* Skills Grid - More Compact */}
        <motion.div
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-3 md:gap-6">
            {skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="skill-card group relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}

              >
                <div
                  className="glass-animated rounded-2xl p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col items-center"
                >
                  {/* Skill Icon */}
                  <div className="text-center mb-2">
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 mx-auto rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-lg md:text-xl shadow`}
                    >
                      {typeof skill.icon === 'string' ? (
                        // If it's a string (like emoji)
                        <>{skill.icon}</>
                      ) : (
                        // Otherwise, assume it's an image (imported local PNG)
                        <Image src={skill.icon} alt={skill.name} width={24} height={24} />
                      )}
                    </div>
                  </div>

                  {/* Skill Name - Smaller font */}
                  <h3 className="text-center font-medium mb-1 text-xs md:text-sm text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>

                  {/* Progress Bar - Smaller */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1 overflow-hidden">
                    <motion.div
                      className={`progress-bar h-1.5 bg-gradient-to-r ${skill.color} rounded-full`}
                      data-progress={skill.level}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>

                  {/* Percentage - Hidden on smaller screens */}
                  <p className="text-center text-xs font-medium text-gray-600 dark:text-gray-300 hidden md:block">
                    {skill.level}%
                  </p>
                </div>

                {/* Hover Tooltip */}
                {hoveredSkill === skill.name && (
                  <div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap z-20 shadow-lg glass"
                  >
                    {skill.level}% Proficiency
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info - More Compact */}
        <motion.div
          className="mt-8 md:mt-12 text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="glass-animated rounded-2xl p-4 md:p-10 border border-white/20 dark:border-slate-600/20">
            <h3 className="text-22 font-bold mb-2 text-gray-900 dark:text-white">
              Always Learning
            </h3>
            <p className="text-18 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I&apos;m constantly expanding my skill set and staying up-to-date with the latest
              technologies and best practices in web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}