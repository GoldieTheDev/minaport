import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import Button from '../ui/Button';
import SocialLinks from '../ui/SocialLinks';

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      project: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <div 
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-3">Begin Your Quest</h2>
          <div className="w-24 h-px bg-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to bring your fantasy world to life? Send a message and let's discuss your magical project.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-12">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              
              <div className="mb-8">
                <p className="text-gray-300 mb-2">
                  Reach out through any of these magical portals:
                </p>
                
                <p className="text-primary mb-6">
                  <a href="mailto:karuhearthd@gmail.com">karuhearthd@gmail.com</a>
                </p>
                
                <div className="mb-8">
                  <h4 className="text-white mb-3">Connect through the ethereal realm:</h4>
                  <SocialLinks size={24} />
                </div>
              </div>
              
              <div className="p-6 glass-card">
                <h4 className="text-xl font-medium mb-4">The Summoning Process</h4>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm">1</span>
                    <span>Cast your message into the form</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm">2</span>
                    <span>Receive a mystical response within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm">3</span>
                    <span>Seal the magical contract</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-sm">4</span>
                    <span>Witness your story come alive</span>
                  </li>
                </ol>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-400/50 border border-gray-700 rounded px-4 py-2 text-white focus:border-primary focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-400/50 border border-gray-700 rounded px-4 py-2 text-white focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="project" className="block text-gray-300 mb-2">Project Type</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-400/50 border border-gray-700 rounded px-4 py-2 text-white focus:border-primary focus:outline-none"
                >
                  <option value="">Select Your Quest Type</option>
                  <option value="game">Fantasy Game</option>
                  <option value="animation">Animated Series</option>
                  <option value="audiobook">Fantasy Audiobook</option>
                  <option value="trailer">Epic Trailer</option>
                  <option value="character">Character Voice</option>
                  <option value="other">Other Magical Project</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Tale</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-400/50 border border-gray-700 rounded px-4 py-2 text-white focus:border-primary focus:outline-none resize-none"
                  placeholder="Tell me about your magical project..."
                ></textarea>
              </div>
              
              <Button type="submit" className="flex items-center gap-2">
                Send Message <Send size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;