'use client';

import React from 'react';
import { FaLocationArrow, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Minus } from 'lucide-react';

// Variants for the staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Contact = () => {
  return (
    <section className="px-6 py-12 md:p-12 lg:p-20" id="contact">
      {/* Grouping the entire content for a single, staggered animation */}
      <motion.div
        className="flex flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
            Get In Touch
          </h2>
          <Minus className="text-gray-400 dark:text-gray-500" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="max-w-4xl text-center text-2xl font-bold md:text-4xl leading-snug md:leading-tight"
        >
          Ready to take your
          <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
            {' '}
            digital presence{' '}
          </span>
          to the next level?
        </motion.h1>

        {/* Sub text */}
        <motion.p
          variants={itemVariants}
          className="my-6 px-6 text-center leading-7 text-gray-700 dark:text-gray-300 md:mt-10 md:max-w-2xl"
        >
          Let&apos;s build something meaningful together. Whether it&apos;s a
          sleek front-end, powerful automation, or a custom tool, I can help
          bring your ideas to life.
        </motion.p>

        {/* Call to action button */}
        <motion.a
          href="mailto:natnael.dev101@gmail.com"
          variants={itemVariants}
        >
          <button className="flex transform items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-lg font-medium text-white shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl">
            <span>Let&apos;s get in touch</span>
            <FaLocationArrow />
          </button>
        </motion.a>

        {/* Social icons */}
        <motion.div variants={itemVariants} className="mt-8 flex gap-6">
          <a
            href="https://github.com/NatnaelDemelash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/natnaeldemelash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            <FaLinkedinIn />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
