'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Technologies',
      links: [
        { name: 'React', href: '#projects' },
        { name: 'Next.js', href: '#projects' },
        { name: 'TypeScript', href: '#projects' },
        { name: 'Tailwind CSS', href: '#projects' },
        { name: 'Node.js', href: '#projects' },
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'GitHub', href: 'https://github.com/pawarshivamd' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-pawar7/' },
        { name: 'Dev', href: 'https://dev.to/pawar-shivam7' },
        { name: 'Email', href: 'mailto:pawarshivam1107@gmail.com' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Shivam Pawar
            </h3>
            <p className="text-gray-300 mb-6">
              Passionate web developer creating beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              
              <a href="https://www.linkedin.com/in/shivam-pawar7/" aria-label="linkedin" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/pawarshivamd" aria-label="github" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://dev.to/pawar-shivam7" aria-label="dev community" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill='currentcolor' viewBox="0 0 640 640"><path d="M216.1 272.3C212.2 269.4 208.3 268 204.5 268L187.1 268L187.1 372.5L204.5 372.5C208.4 372.5 212.3 371.1 216.1 368.2C219.9 365.3 221.9 360.9 221.9 355.1L221.9 285.4C221.9 279.6 219.9 275.2 216.1 272.3zM500.1 96L139.9 96C115.7 96 96.1 115.6 96 139.8L96 500.2C96.1 524.4 115.7 544 139.9 544L500.1 544C524.3 544 543.9 524.4 544 500.2L544 139.8C543.9 115.6 524.3 96 500.1 96zM250.2 355.2C250.2 374 238.6 402.5 201.8 402.5L155.4 402.5L155.4 237L202.8 237C238.2 237 250.2 265.5 250.2 284.3L250.2 355.2zM350.9 266.5L297.6 266.5L297.6 304.9L330.2 304.9L330.2 334.5L297.6 334.5L297.6 372.9L350.9 372.9L350.9 402.5L288.7 402.5C277.5 402.8 268.3 394 268 382.8L268 257.7C267.7 246.6 276.6 237.3 287.7 237L350.9 237L350.9 266.5zM454.5 381.8C441.3 412.5 417.7 406.4 407.1 381.8L368.6 237L401.2 237L430.9 350.7L460.5 237L493.1 237L454.6 381.8z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © {currentYear} Shivam Pawar. All rights reserved. Made with ❤️ using Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 