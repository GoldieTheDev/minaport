import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-full max-w-md mx-auto">
              <img 
                src="https://images.pexels.com/photos/6985001/pexels-photo-6985001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mystical microphone setup" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-primary rounded-lg -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6 relative inline-block">
              The Voice Behind the Magic
              <span className="absolute -bottom-3 left-0 w-1/2 h-px bg-primary"></span>
            </h2>
            
            <p className="text-gray-300 mb-4">
              I'm Mina, a voice artist who specializes in bringing fantasy worlds and characters to life. 
              My voice has been described as versatile, enchanting, and captivating.
            </p>
            
            <p className="text-gray-300 mb-4">
              With experience across fantasy gaming, animated series, and epic narratives,
              I provide mystical voice performances that transport listeners to otherworldly realms.
            </p>
            
            <p className="text-gray-300 mb-6">
              My professional studio is equipped with state-of-the-art technology,
              ensuring crystal-clear audio that matches the magic of your story.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-primary font-medium mb-2">Specialties</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Fantasy Characters</li>
                  <li>• Epic Narration</li>
                  <li>• Game Voiceovers</li>
                  <li>• Mystical Beings</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-primary font-medium mb-2">Languages</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• English</li>
                  <li>• Serbian</li>
                  <li>• Croatian</li>
                  <li>• Bosnian</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;