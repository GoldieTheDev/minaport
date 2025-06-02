import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Animation Director',
    company: 'Pixel Studios',
    content: 'Mina brought our characters to life with incredible versatility. Her ability to switch between different voices made our production process smooth and efficient.',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Audiobook Publisher',
    company: 'Echo Books',
    content: 'Working with Mina was a pleasure. Her narration skills and attention to detail elevated our audiobook project. The audience feedback has been overwhelmingly positive.',
    rating: 5
  },
  {
    name: 'Mark Davis',
    role: 'Marketing Manager',
    company: 'Brand Forward',
    content: 'Mina\'s voice for our commercial campaign perfectly captured our brand\'s essence. Professional, prompt, and highly skilled – exactly what we needed.',
    rating: 5
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section className="section bg-dark-200" ref={ref}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Client Testimonials</h2>
          <div className="w-24 h-px bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear what clients have to say about working with me on their projects.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-300 rounded-lg p-8 relative border border-gray-800"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < testimonial.rating ? "#D4AF37" : "none"} 
                    className={i < testimonial.rating ? "text-primary" : "text-gray-600"}
                  />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 relative z-10">{testimonial.content}</p>
              
              <div>
                <h4 className="text-white font-medium">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;