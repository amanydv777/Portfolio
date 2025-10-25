import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Projects');

  // Define custom filter categories
  const filterCategories = [
    'All Projects',
    'Full-Stack',
    'Backend',
    'Frontend',
    'MERN'
  ];

  // Filter projects based on selected category
  const filteredProjects = () => {
    if (selectedFilter === 'All Projects') {
      return projects;
    } else if (selectedFilter === 'Full-Stack') {
      return projects.filter(project => 
        project.tags.some(tag => ['React', 'Node.js', 'Express', 'MongoDB', 'MERN'].includes(tag))
      );
    } else if (selectedFilter === 'Backend') {
      return projects.filter(project => 
        project.tags.some(tag => ['Node.js', 'Express', 'MongoDB', 'Django', 'Python', 'REST API', 'JWT'].includes(tag))
      );
    } else if (selectedFilter === 'Frontend') {
      return projects.filter(project => 
        project.tags.some(tag => ['React', 'JavaScript', 'HTML', 'CSS'].includes(tag))
      );
    } else if (selectedFilter === 'MERN') {
      return projects.filter(project => 
        project.tags.some(tag => ['MERN', 'React', 'MongoDB', 'Express', 'Node.js'].includes(tag))
      );
    }
    return projects;
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900">
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
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects().map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects().length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found with this filter.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
