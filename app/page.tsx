"use client"
import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, Sparkles, Gift, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { routes } from './routes';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);
    
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-05-27T18:00:00');
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleViewDetails = () => {
    router.push(routes.insideInvitation);
  };

  if (!isMounted) {
    return null;
  }

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
        {/* Decorative Circles with Enhanced Animation */}
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
        
        {/* Enhanced Floating Elements */}
        <div className="hidden sm:block absolute top-20 left-1/3 w-3 h-3 bg-amber-300/60 rounded-full animate-bounce delay-1000" style={{animationDuration: '3s'}}></div>
        <div className="hidden sm:block absolute top-40 right-1/4 w-2 h-2 bg-amber-300/60 rounded-full animate-pulse delay-700" style={{animationDuration: '2s'}}></div>
        <div className="hidden sm:block absolute bottom-1/3 left-1/2 w-3 h-3 bg-amber-300/60 rounded-full animate-bounce delay-500" style={{animationDuration: '4s'}}></div>
        
        {/* New Floating Elements */}
        <div className="hidden sm:block absolute top-1/4 right-1/3 w-2 h-2 bg-red-300/60 rounded-full animate-float" style={{animationDuration: '5s'}}></div>
        <div className="hidden sm:block absolute bottom-1/4 left-1/3 w-2 h-2 bg-red-300/60 rounded-full animate-float delay-300" style={{animationDuration: '4s'}}></div>
        
        {/* Sparkle Effects */}
        <AnimatePresence>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-300/40 rounded-full"
              initial={{ 
                opacity: 0,
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50
              }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [0, -20, 0],
                x: [0, Math.random() * 20 - 10, 0]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Enhanced Modern Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 relative w-full"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center mb-6 sm:mb-8 relative z-10">
            <motion.div 
              className="hidden sm:block w-16 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent mr-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 mr-4" />
            </motion.div>
            <motion.h1 
              className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent font-serif tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Come Celebrate With Us!
            </motion.h1>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 ml-4" />
            </motion.div>
            <motion.div 
              className="hidden sm:block w-16 h-0.5 bg-gradient-to-l from-transparent via-red-400 to-transparent ml-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </motion.div>

        {/* Enhanced Modern Main Card */}
        <motion.div 
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {/* Enhanced Card Shadow Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-red-600/20 to-red-500/20 rounded-3xl sm:rounded-4xl blur-2xl"
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
            className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-red-600/10 to-amber-500/10 rounded-3xl sm:rounded-4xl blur-3xl animate-pulse"
            animate={{ 
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.02, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          
          {/* Main Card Content */}
          <motion.div 
            className="relative bg-gradient-to-br from-black/90 via-red-950/50 to-black/90 backdrop-blur-xl rounded-3xl sm:rounded-4xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-red-400/30"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            
            {/* Title Section */}
            <motion.div 
              className="text-center mb-8 sm:mb-12 relative z-10"
              variants={itemVariants}
            >
              <motion.h2 
                className="text-xs sm:text-lg lg:text-xl text-red-400 mb-2 sm:mb-4 font-light tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                The 18th Birthday Celebration of
              </motion.h2>
              
              <motion.div 
                className="my-4 sm:my-8 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-2xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-500 via-amber-200 to-red-400 bg-clip-text text-transparent font-['Playfair_Display'] tracking-wide mb-2 sm:mb-6">
                  Frencis @ 18
                </h3>
                
                {/* Decorative Element */}
                <motion.div 
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div 
                    className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="text-red-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                  <motion.div 
                    className="w-12 h-0.5 bg-gradient-to-l from-transparent via-red-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-sm sm:text-lg text-red-200 font-light italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                A Night to Remember
              </motion.p>
            </motion.div>

            {/* Modern Countdown Timer */}
            <motion.div 
              className="mb-8 sm:mb-12"
              variants={itemVariants}
            >
              <motion.h4 
                className="text-lg sm:text-xl text-center text-red-200 mb-6 sm:mb-8 flex items-center justify-center font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                <span className="hidden sm:inline">Countdown to the Big Day</span>
                <span className="sm:hidden">Countdown</span>
              </motion.h4>
              <motion.div 
                className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-lg mx-auto"
                variants={containerVariants}
              >
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Sec', value: timeLeft.seconds }
                ].map((item) => (
                  <motion.div 
                    key={item.label} 
                    className="relative group"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-gradient-to-br from-black/60 via-red-950/40 to-black/60 rounded-lg sm:rounded-2xl p-2 sm:p-4 text-center backdrop-blur-sm border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                      <motion.div 
                        className="text-lg sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1"
                        key={item.value}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.value.toString().padStart(2, '0')}
                      </motion.div>
                      <div className="text-red-200 text-[10px] sm:text-sm uppercase tracking-wider font-medium">
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Modern Event Details */}
            <motion.div 
              className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 mb-6 sm:mb-12"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-gradient-to-br from-black/50 via-red-950/30 to-black/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <motion.div 
                    className="p-2 bg-red-500/20 rounded-full mr-3 sm:mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Calendar className="text-red-300 w-4 h-4 sm:w-6 sm:h-6" />
                  </motion.div>
                  <h5 className="text-base sm:text-xl font-semibold text-white">Date & Time</h5>
                </div>
                <p className="text-red-100 text-sm sm:text-lg font-medium">May 27, 2025</p>
                <p className="text-red-300 text-xs sm:text-base">5:00 PM onwards</p>
              </motion.div>

              <motion.div 
                className="bg-gradient-to-br from-black/50 via-red-950/30 to-black/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <motion.div 
                    className="p-2 bg-red-500/20 rounded-full mr-3 sm:mr-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="text-red-300 w-4 h-4 sm:w-6 sm:h-6" />
                  </motion.div>
                  <h5 className="text-base sm:text-xl font-semibold text-white">Venue</h5>
                </div>
                <p className="text-red-100 text-sm sm:text-lg font-medium">Wapay Idea</p>
                <p className="text-red-300 text-xs sm:text-base">Details to follow</p>
              </motion.div>
            </motion.div>

            {/* Modern Dress Code */}
            <motion.div 
              className="bg-gradient-to-r from-black/40 via-red-950/20 to-black/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 mb-6 sm:mb-12"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <motion.div 
                  className="p-2 bg-red-500/20 rounded-full mr-3 sm:mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Gift className="text-red-300 w-4 h-4 sm:w-6 sm:h-6" />
                </motion.div>
                <h5 className="text-base sm:text-xl font-semibold text-white">Dress Code</h5>
              </div>
              <p className="text-center text-red-100 text-sm sm:text-lg font-medium mb-1 sm:mb-2">Casual Attire</p>
              <p className="text-center text-red-300 text-xs sm:text-base">Ruby Red & Elegant Black Themes</p>
            </motion.div>

            {/* Modern CTA Button */}
            <motion.div 
              className="text-center relative"
              variants={itemVariants}
            >
              <motion.button 
                onClick={handleViewDetails}
                className="relative group bg-gradient-to-r from-red-600 via-red-600 to-red-600 hover:from-red-500 hover:via-red-500 hover:to-red-500 text-white font-bold py-2.5 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                See More Details
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
