"use client"
import React, { useState } from 'react';
import { Heart, Sparkles, Gift, Star, Music, Camera, Crown, Flower2, Clock, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InsideInvitation() {
  const [activeTab, setActiveTab] = useState('flow');

  const programFlow = [
    { time: "5:00 PM", event: "Guest Arrival & Registration" },
    { time: "5:30 PM", event: "Photo Gallery Viewing" },
    { time: "6:00 PM", event: "Grand Entrance" },
    { time: "6:15 PM", event: "Welcome Remarks" },
    { time: "6:30 PM", event: "18 Candles Ceremony" },
    { time: "7:00 PM", event: "18 Roses Dance" },
    { time: "7:30 PM", event: "Dinner Service" },
    { time: "8:00 PM", event: "Special Presentations" },
    { time: "8:30 PM", event: "Live Entertainment" },
    { time: "9:00 PM", event: "Social Dancing" },
    { time: "10:00 PM", event: "Closing Remarks" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'flow':
        return (
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-600/20 to-red-500/20 rounded-2xl blur-xl"
                animate={{ 
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="relative bg-gradient-to-br from-black/90 via-red-950/50 to-black/90 backdrop-blur-xl rounded-2xl p-3 sm:p-4 md:p-6 border border-red-400/30"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="space-y-2 sm:space-y-3 md:space-y-4">
                  {programFlow.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start space-x-2 sm:space-x-3 md:space-x-4"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 w-16 sm:w-20 md:w-24"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="bg-red-500/20 rounded-lg p-1 text-center">
                          <span className="text-red-300 text-xs sm:text-sm md:text-base font-medium">{item.time}</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="flex-grow"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center">
                          <motion.div 
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-red-400 rounded-full mr-1.5 sm:mr-2 md:mr-3"
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2
                            }}
                          />
                          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">{item.event}</h3>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      case 'lists':
        return (
          <motion.div 
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* 18 Roses */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-black/90 via-red-950/50 to-black/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-red-400/30">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Flower2 className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                    18 Roses
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                  {[...Array(18)].map((_, index) => (
                    <div 
                      key={index} 
                      className="bg-red-500/10 rounded-lg p-2 sm:p-3 text-center hover:bg-red-500/20 transition-colors duration-200"
                    >
                      <span className="text-red-300 text-sm sm:text-base font-medium">Rose {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 18 Candles */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="relative bg-gradient-to-br from-black/90 via-red-950/50 to-black/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-red-400/30">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Sparkles className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                    18 Candles
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                  {[...Array(18)].map((_, index) => (
                    <div 
                      key={index} 
                      className="bg-red-500/10 rounded-lg p-2 sm:p-3 text-center hover:bg-red-500/20 transition-colors duration-200"
                    >
                      <span className="text-red-300 text-sm sm:text-base font-medium">Candle {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Rich Background with Ruby/Black Gradient and Gold Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/50 via-black to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-amber-700/40 via-transparent to-transparent"></div>
      
      {/* Enhanced Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-amber-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-red-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 min-h-screen p-4 sm:p-6 md:p-8 lg:p-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-6 sm:mb-8 md:mb-12"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <motion.div 
              className="hidden sm:block w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent mr-2 sm:mr-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
            </motion.div>
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Program Details
            </motion.h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 ml-2 sm:ml-4" />
            </motion.div>
            <motion.div 
              className="hidden sm:block w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent via-red-400 to-transparent ml-2 sm:ml-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <motion.p 
            className="text-red-200 text-base sm:text-lg md:text-xl font-light italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A Night of Elegance and Celebration
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12"
          variants={itemVariants}
        >
          <div className="flex justify-center space-x-2 sm:space-x-4">
            {[
              { id: 'flow', label: 'Program Flow', icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { id: 'lists', label: 'Candles & Roses', icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" /> }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25'
                    : 'bg-black/50 text-red-200 hover:bg-red-900/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  animate={activeTab === tab.id ? { rotate: 360 } : {}}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  {tab.icon}
                </motion.div>
                <span className="text-sm sm:text-base">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
