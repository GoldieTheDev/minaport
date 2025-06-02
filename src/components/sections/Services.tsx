import { motion } from 'framer-motion';
import { Mic, Radio, BookOpen, MonitorPlay, Music, Headphones } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Mic,
    title: 'Fantasy Narration',
    description: 'Breathe life into magical worlds and epic tales with immersive storytelling.'
  },
  {
    icon: BookOpen,
    title: 'Character Voices',
    description: 'From mystical creatures to legendary heroes, each character gets a unique voice.'
  },
  {
    icon: MonitorPlay,
    title: 'Game Voiceovers',
    description: 'Create memorable characters for fantasy RPGs and adventure games.'
  },
  {
    icon: Radio,
    title: 'Audiobook Narration',
    description: 'Transform fantasy novels into captivating audio experiences.'
  },
  {
    icon: Music,
    title: 'Trailer Narration',
    description: 'Epic voice-overs for game trailers and fantasy film teasers.'
  },
  {
    icon: Headphones,
    title: 'Animation Voiceover',
    description: 'Give voice to animated characters in fantasy and adventure series.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="section" ref={ref}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Enchanting Services</h2>
          <div className="w-24 h-px bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional voice acting services tailored for fantasy and adventure projects.
            Each service includes revisions and high-quality audio delivery.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;