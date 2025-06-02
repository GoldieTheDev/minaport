import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-dark/90 via-dark/80 to-transparent z-10"></div>
      </div>
      
      <div className="container relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              <span className="text-white">Mina</span> 
              <span className="text-primary"> Hamzagić</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif mb-6">
              Weaving <span className="text-primary">magic</span> through voice
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-300 text-lg mb-8 max-w-2xl">
              Professional voice actor crafting enchanting performances for 
              fantasy worlds, epic narratives, and mystical characters.
              Let your story come alive through the power of voice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#services" variant="primary">
              Explore Services
            </Button>
            <Button href="#contact" variant="outline">
              Begin Your Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;