'use client';
import { motion } from 'framer-motion';

import { useState } from 'react';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  const workExperience: Experience[] = [
    {
      id: '0',
      title: 'Frontend Developer',
      company: 'Impero IT Services Pvt. Ltd.',
      period: 'Apr 2024 - Present',
      description: 'Building high-performance, pixel-perfect, and responsive web applications using modern frontend technologies. Focused on optimizing SEO, enhancing UI/UX, and maintaining scalable codebases across client projects.',
      technologies: [ 'HTML5','CSS3','Bootstrap','JavaScript','jQuery','React JS'],
      achievements: [
        'Developed pixel-perfect, fully responsive web interfaces using HTML5, CSS3, Bootstrap, and React JS.',
        'Improved website performance and SEO, leading to faster load times and better Google rankings.',
        'Created reusable UI components and clean design systems to speed up development.',
        'Maintained and enhanced existing websites, fixing bugs and optimizing performance regularly.'
      ]
    },
    {
      id: '1',
      title: 'Web Designer',
      company: 'Konzept Solutions',
      period: 'Dec 2022 - Apr 2024',
      description: 'Designed and developed responsive websites from design to deployment. Translated UI mockups into clean, structured code, collaborating with design teams to ensure visually consistent and user-friendly interfaces.',
      technologies: [ 'HTML5','CSS3','Bootstrap','JavaScript','jQuery','React JS','Material-UI'],
      achievements: [
        'Designed and developed responsive, interactive websites for multiple clients.',
        'Converted Figma designs into real-world interfaces using HTML5, CSS3, Bootstrap, and React.',
        'Worked closely with designers to ensure UI/UX consistency and client satisfaction.'
      ]
    }
  ];

  // const education = [
  //   {
  //     degree: 'Bachelor of Computer Science',
  //     school: 'University of Technology',
  //     period: '2014 - 2018',
  //     description: 'Specialized in Software Engineering with focus on web technologies and database management.'
  //   },
  //   {
  //     degree: 'Web Development Certification',
  //     school: 'Coding Bootcamp',
  //     period: '2018',
  //     description: 'Intensive 12-week program covering modern web development technologies and best practices.'
  //   }
  // ];

  return (
    <section id="experience" className="py-20 md:py-22  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16"
         initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise 
            in web development and software engineering.
          </p>
        </motion.div>
        <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Line */}
                  {index < workExperience.length - 1 && (
                    <div className="hidden md:block absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  )}
                  
                  <div className="flex items-start md:space-x-6">
                    {/* Timeline Dot */}
                    <div className=" absolute md:relative flex flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-full items-center justify-center text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-2xl text-white font-bold transition-all duration-300 shadow-xl hover:shadow-3xl transform hover:-translate-y-1">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-animated rounded-3xl p-4 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        {exp.company}
                      </h4>
                      
                      <p className="text-md text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
                          Technologies:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-sm text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full py-1 px-3"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h5 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        {/* Tab Navigation
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-700 rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'work'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        Content
        <div className="max-w-4xl mx-auto">
          {activeTab === 'work' ? (
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <div key={exp.id} className="relative">
                  {/* Timeline Line 
                  {index < workExperience.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
                  )}
                  
                  <div className="flex items-start space-x-3 md:space-x-6">
                    {/* Timeline Dot 
                    <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {index + 1}
                    </div>

                    {/* Content 
                    <div className="flex-1 glass-animated rounded-3xl p-4 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-bold">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-3">
                        {exp.company}
                      </h4>
                      
                      <p className="text-md text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>

                      {/* Technologies
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-neutral-500 mb-2">
                          Technologies:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-sm text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full py-1 px-3"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements 
                      <div>
                        <h5 className="text-sm font-semibold text-neutral-500 mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="glass-animated rounded-3xl p-4 md:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-blue-600 font-medium">
                      {edu.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-600 mb-3">
                    {edu.school}
                  </h4>
                  
                  <p className="text-gray-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </section>
  );
} 