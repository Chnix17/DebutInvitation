"use client"
import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Clock, Sparkles, Gift, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { routes } from './routes';
import { motion, AnimatePresence } from 'framer-motion';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-black to-black"></div>
      
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Simplified Decorative Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 relative w-full"
          variants={itemVariants}
        >
          <div className="flex items-center justify-center mb-6 sm:mb-8 relative z-10">
            <div className="hidden sm:block w-16 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent mr-4" />
            <Sparkles className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 mr-4" />
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent font-serif tracking-wide">
              Come Celebrate With Us!
            </h1>
            <Sparkles className="text-red-400 w-6 h-6 sm:w-8 sm:h-8 ml-4" />
            <div className="hidden sm:block w-16 h-0.5 bg-gradient-to-l from-transparent via-red-400 to-transparent ml-4" />
          </div>
        </motion.div>

        {/* Main Card */}
        <motion.div 
          className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {/* Simplified Card Shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-red-600/10 to-red-500/10 rounded-3xl sm:rounded-4xl blur-2xl" />
          
          {/* Main Card Content */}
          <div className="relative bg-gradient-to-br from-black/90 via-red-950/50 to-black/90 backdrop-blur-sm rounded-3xl sm:rounded-4xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-red-400/30">
            
            {/* Title Section */}
            <motion.div 
              className="text-center mb-8 sm:mb-12 relative z-10"
              variants={itemVariants}
            >
              <h2 className="text-xs sm:text-lg lg:text-xl text-red-400 mb-2 sm:mb-4 font-light tracking-widest uppercase">
                The 18th Birthday Celebration of
              </h2>
              
              <div className="my-4 sm:my-8 relative">
                <h3 className="text-2xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-red-500 via-amber-200 to-red-400 bg-clip-text text-transparent tracking-wide mb-2 sm:mb-6" style={{ fontFamily: pacifico.style.fontFamily }}>
                  Frencis @ 18
                </h3>
                
                {/* Simplified Decorative Element */}
                <div className="flex items-center justify-center gap-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent" />
                  <Heart className="text-red-400 w-5 h-5 sm:w-6 sm:h-6" />
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-red-400 to-transparent" />
                </div>
              </div>
              <p className="text-sm sm:text-lg text-red-200 font-light italic">
                A Night to Remember
              </p>
            </motion.div>

            {/* Countdown Timer */}
            <motion.div 
              className="mb-8 sm:mb-12"
              variants={itemVariants}
            >
              <h4 className="text-lg sm:text-xl text-center text-red-200 mb-6 sm:mb-8 flex items-center justify-center font-light">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                <span className="hidden sm:inline">Countdown to the Big Day</span>
                <span className="sm:hidden">Countdown</span>
              </h4>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-lg mx-auto">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Sec', value: timeLeft.seconds }
                ].map((item) => (
                  <div 
                    key={item.label} 
                    className="relative group"
                  >
                    <div className="bg-gradient-to-br from-black/60 via-red-950/40 to-black/60 rounded-lg sm:rounded-2xl p-2 sm:p-4 text-center backdrop-blur-sm border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                      <div className="text-lg sm:text-3xl lg:text-4xl font-bold text-red-400 mb-1">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-red-200 text-[10px] sm:text-sm uppercase tracking-wider font-medium">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Event Details */}
            <motion.div 
              className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 mb-6 sm:mb-12"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-black/50 via-red-950/30 to-black/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-2 bg-red-500/20 rounded-full mr-3 sm:mr-4">
                    <Calendar className="text-red-300 w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <h5 className="text-base sm:text-xl font-semibold text-white">Date & Time</h5>
                </div>
                <p className="text-red-100 text-sm sm:text-lg font-medium">May 27, 2025</p>
                <p className="text-red-300 text-xs sm:text-base">5:00 PM onwards</p>
              </div>

              <div className="bg-gradient-to-br from-black/50 via-red-950/30 to-black/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="p-2 bg-red-500/20 rounded-full mr-3 sm:mr-4">
                    <MapPin className="text-red-300 w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <h5 className="text-base sm:text-xl font-semibold text-white">Venue</h5>
                </div>
                <p className="text-red-100 text-sm sm:text-lg font-medium">Wapay Idea</p>
                <p className="text-red-300 text-xs sm:text-base">Details to follow</p>
              </div>
            </motion.div>

            {/* Dress Code */}
            <motion.div 
              className="bg-gradient-to-r from-black/40 via-red-950/20 to-black/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 mb-6 sm:mb-12"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <div className="p-2 bg-red-500/20 rounded-full mr-3 sm:mr-4">
                  <Gift className="text-red-300 w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <h5 className="text-base sm:text-xl font-semibold text-white">Dress Code</h5>
              </div>
              <p className="text-center text-red-100 text-sm sm:text-lg font-medium mb-1 sm:mb-2">Casual Attire</p>
              <p className="text-center text-red-300 text-xs sm:text-base">Ruby Red & Elegant Black Themes</p>
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="text-center relative"
              variants={itemVariants}
            >
              <button 
                onClick={handleViewDetails}
                className="relative group bg-gradient-to-r from-red-600 via-red-600 to-red-600 hover:from-red-500 hover:via-red-500 hover:to-red-500 text-white font-bold py-2.5 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 text-sm sm:text-base"
              >
                See More Details
                <ArrowRight className="w-4 h-4 inline-block ml-2" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Credit Footer */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <p className="text-red-300/60 text-xs font-light">
            Developed by Christian Mark S Valle
          </p>
        </div>
      </motion.div>
    </div>
  );
}
