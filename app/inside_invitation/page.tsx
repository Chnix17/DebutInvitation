"use client"
import React, { useState } from 'react';
import { Sparkles, Star, Flower2, Clock, ArrowLeft, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function InsideInvitation() {
  const [activeTab, setActiveTab] = useState('flow');
  const router = useRouter();

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
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'flow':
        return (
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-600/10 to-red-500/10 rounded-2xl" />
              <motion.div 
                className="relative bg-gradient-to-br from-black/90 via-red-950/50 to-black/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 md:p-6 border border-red-400/30"
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
                    >
                      <div className="flex-shrink-0 w-16 sm:w-20 md:w-24">
                        <div className="bg-red-500/20 rounded-lg p-1 text-center">
                          <span className="text-red-300 text-xs sm:text-sm md:text-base font-medium">{item.time}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-red-400 rounded-full mr-1.5 sm:mr-2 md:mr-3" />
                          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">{item.event}</h3>
                        </div>
                      </div>
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
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {/* 18 Roses */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-black/90 via-red-950/50 to-black/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-red-400/30">
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
            </div>

            {/* 18 Candles */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-black/90 via-red-950/50 to-black/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-red-400/30">
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
            </div>

            {/* 18 Treasures */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-black/90 via-red-950/50 to-black/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-red-400/30">
                <div className="flex items-center mb-4 sm:mb-6">
                  <Gift className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                    18 Treasures
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                  {[...Array(18)].map((_, index) => (
                    <div 
                      key={index} 
                      className="bg-red-500/10 rounded-lg p-2 sm:p-3 text-center hover:bg-red-500/20 transition-colors duration-200"
                    >
                      <span className="text-red-300 text-sm sm:text-base font-medium">Treasure {index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-black to-black"></div>
      
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
            <div className="hidden sm:block w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent mr-2 sm:mr-4" />
            <Star className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-4" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent font-serif">
              Program Details
            </h1>
            <Star className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 ml-2 sm:ml-4" />
            <div className="hidden sm:block w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-l from-transparent via-red-400 to-transparent ml-2 sm:ml-4" />
          </div>
          <p className="text-red-200 text-base sm:text-lg md:text-xl font-light italic">
            A Night of Elegance and Celebration
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12">
          <div className="flex justify-center space-x-2 sm:space-x-4">
            {[
              { id: 'flow', label: 'Program Flow', icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" /> },
              { id: 'lists', label: 'Candles/Roses/Treasures', icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25'
                    : 'bg-black/50 text-red-200 hover:bg-red-900/50'
                }`}
              >
                {tab.icon}
                <span className="text-sm sm:text-base">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>

        {/* Credits */}
        <div className="text-center mt-12 text-red-200/70 text-sm">
          <p>Developed by: Christian Mark S. Valle</p>
        </div>

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mt-8 mx-auto flex items-center space-x-2 px-4 py-2 bg-black/50 text-red-200 rounded-full hover:bg-red-900/50 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
      </motion.div>
    </div>
  );
}
