import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies and best practices.',
    },
    {
      icon: Palette,
      title: 'Backend Development',
      description: 'Creating robust RESTful APIs and managing databases with optimal performance.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Analyzing complex problems and delivering elegant, efficient solutions.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'Staying updated with latest technologies and implementing cutting-edge solutions.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm Aman Yadav
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a passionate Full Stack Developer with a strong foundation in creating modern, 
                scalable web applications. I specialize in backend development, RESTful APIs, and 
                database management, turning ideas into reality through clean, efficient code.
              </p>
              <p>
                With expertise in technologies like React, Node.js, Python, Django, and databases 
                (MongoDB, PostgreSQL, MySQL), I build solutions that are robust, secure, and performant. 
                My approach combines technical excellence with practical problem-solving.
              </p>
              <p>
                Currently pursuing my Bachelor's in Technology at Harcourt Butler Technical University, 
                I'm constantly exploring new technologies, contributing to projects, and sharing knowledge 
                with the developer community. I believe in continuous learning and staying ahead of industry trends.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '15+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '10+', label: 'Technologies' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center"
              >
                <h4 className="text-3xl md:text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-500" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
