'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  year: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const projectsRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(projectsRef);

  const projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for managing an e-commerce platform with real-time analytics and inventory management.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      category: 'Frontend',
      year: '2024',
      liveUrl: 'https://example.com/ecommerce-dashboard',
      githubUrl: 'https://example.com/ecommerce-dashboard',
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'Full Stack',
      year: '2023'
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern design and smooth animations.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      category: 'Frontend',
      year: '2024'
    },
    {
      id: '4',
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current conditions and forecasts for multiple locations.',
      technologies: ['React', 'Redux', 'CSS Modules', 'OpenWeather API'],
      category: 'Frontend',
      year: '2023'
    },
    {
      id: '5',
      title: 'Blog CMS',
      description: 'A content management system for creating and managing blog posts with markdown support.',
      technologies: ['Next.js', 'MongoDB', 'Express', 'Node.js'],
      category: 'Full Stack',
      year: '2023'
    },
    {
      id: '6',
      title: 'Fitness Tracker',
      description: 'A mobile-responsive fitness tracking application with workout planning and progress visualization.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
      category: 'Mobile',
      year: '2024'
    }
  ];

  const categories = ['All', 'Frontend', 'Full Stack', 'Mobile'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects;
    } else {
      return projects.filter(project => project.category === activeCategory);
    }
  }, [activeCategory, projects]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);





  return (
    <section ref={projectsRef} id="projects" className="py-10 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my passion for creating
            functional and beautiful web applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-1 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group relative link_hover"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass-animated rounded-3xl p-6 shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-white text-4xl">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-md text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full py-1 px-3"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              {project.liveUrl && (
              <div className="butn-vid flex items-center dark:bg-white bg-gray-950 ">
                <div className="play-button">
                  <a  href={project.liveUrl} className="vid position-relative text-white dark:text-black" aria-label={project.title}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
                <div className="shaps bottom">
                  <div className="shap-left-top text-dark dark:text-white absolute top-[-1rem] right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 60 60" fill="none">
                        <path d="M0 60H60V0C58.4746 36.1017 31.5254 58.9831 0 60Z" fill="currentcolor" />
                    </svg>
                  </div>
                  <div className="shap-left-bottom text-dark dark:text-white">
                    <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                      <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="currentcolor"></path>
                    </svg>
                  </div>
                </div>
              </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="glass-animated rounded-3xl p-8 md:p-12 border border-white/20 dark:border-slate-600/20 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Want to see more?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Check out my GitHub for more projects and contributions.
            </p>
            <a
              href="https://github.com/yourusername"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-2xl text-white font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-3xl transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
