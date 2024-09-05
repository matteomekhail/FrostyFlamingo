import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-br from-background to-secondary min-h-screen w-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-full -translate-x-1/4 -translate-y-1/4 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-secondary/20 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 min-h-screen flex flex-col justify-center">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-12" variants={containerVariants}>
          {/* Left side: Content */}
          <motion.div className="lg:w-1/2 space-y-6" variants={itemVariants}>
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-primary"
              animate={{
                color: ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--primary))'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              Frosty Flamingo
            </motion.h1>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Share the Frosty Flavour
            </motion.h2>
            <motion.p className="text-lg sm:text-xl text-muted-foreground">
              Experience the smoothest, most delightful soft serve ice cream in town. Made fresh daily with premium ingredients.
            </motion.p>
            <motion.div className="flex flex-wrap gap-2 sm:gap-4" variants={containerVariants}>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Creamy</Badge>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Refreshing</Badge>
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">Delicious</Badge>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Order Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side: Image */}
          <motion.div
            className="lg:w-1/2 flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.img
              src="/path-to-your-flamingo-image.svg"
              alt="Frosty Flamingo Mascot"
              className="w-full max-w-md"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
