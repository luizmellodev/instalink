'use client';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import Header from './components/Header/header';
import EnhancedButton from './components/Cards/EnhancedButton';
import IconButtonWithText from './components/Cards/IconButtonWithText';
import Announcement from './components/Cards/Announcement';
import { announcementData, headerData, socialMediaData, usefulLinksData } from './data';
import { icons } from './icons';
import { fadeIn, rotateScale, welcomeAnimation } from './animations';

const AboutMe = () => {
  return (
    <motion.div className="about-me" initial="hidden" animate="visible">
      <motion.div
        className="text-4xl font-bold text-white mt-5 mb-5"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        About me
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {socialMediaData.map((social, index) => {
          const Icon = icons[social.icon];
          return (
            <motion.div
              key={social.title}
              variants={rotateScale}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IconButtonWithText
                title={social.title}
                color={social.color}
                link={social.link}
                icon={Icon}
                username={social.username}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const UsefulLinks = () => {
  return (
    <motion.div className="useful-links" initial="hidden" animate="visible">
      <motion.div
        className="text-4xl font-bold text-white mt-5 mb-5"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        Useful links
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usefulLinksData.map((link, index) => (
          <motion.div
            key={link.title}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <EnhancedButton
              title={link.title}
              color={link.color}
              link={link.link}
              isNew={link.isNew}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main Component
export default function Home() {
  useEffect(() => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } w-screen bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-center items-center gap-4 fixed bottom-0 left-0 z-50`}
          style={{ margin: 0 }}
        >
          <div className="text-white text-center font-medium">
            Want a link gallery website like this one? Check out our repository! ✨
          </div>
          <button
            onClick={() => window.open('https://github.com/luizmellodev/instalink', '_blank')}
            className="px-4 py-2 bg-white text-purple-600 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            View Repository
          </button>
        </div>
      ),
      {
        duration: Infinity,
        position: 'bottom-center',
      }
    );
  }, []);

  return (
    <div className={`flex flex-col items-center min-h-screen mb-28`}>
      <Toaster position="bottom-center" toastOptions={{ duration: Infinity }} />
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header
          picture={headerData.picture}
          name={headerData.name}
          username={headerData.username}
        />
        <motion.div
          className="announcement"
          variants={welcomeAnimation}
          initial="hidden"
          animate="visible"
        >
        <Announcement
            badgeName={announcementData.badgeName}
            text={announcementData.text}
            />
        </motion.div>
      </motion.div>
      <div className="border-b border-gray-800 w-96 mb-5 mt-10" />
      <AboutMe />
      <UsefulLinks />
    </div>
  );
};