import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, Users, BookOpen } from 'lucide-react';

const GitHubStats = () => {
  const [stats, setStats] = useState({
    publicRepos: 0,
    followers: 0,
    following: 0,
    totalStars: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        // Fetch user data
        const userResponse = await fetch('https://api.github.com/users/amanydv777');
        const userData = await userResponse.json();

        // Fetch repositories to count stars
        const reposResponse = await fetch('https://api.github.com/users/amanydv777/repos?per_page=100');
        const reposData = await reposResponse.json();
        
        const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);

        setStats({
          publicRepos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          totalStars: totalStars,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Set default values on error
        setStats({
          publicRepos: 12,
          followers: 45,
          following: 30,
          totalStars: 89,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const statItems = [
    {
      icon: BookOpen,
      label: 'Public Repos',
      value: stats.publicRepos,
      color: 'text-blue-500',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    },
    {
      icon: Star,
      label: 'Total Stars',
      value: stats.totalStars,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100 dark:bg-yellow-900/30',
    },
    {
      icon: Users,
      label: 'Followers',
      value: stats.followers,
      color: 'text-green-500',
      bgColor: 'bg-green-100 dark:bg-green-900/30',
    },
    {
      icon: GitBranch,
      label: 'Following',
      value: stats.following,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            GitHub <span className="text-gradient">Statistics</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Live stats from my GitHub profile
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                <div className={`p-4 rounded-full ${item.bgColor} mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                {loading ? (
                  <div className="animate-pulse">
                    <div className="h-8 w-16 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 w-20 bg-gray-300 dark:bg-gray-700 rounded"></div>
                  </div>
                ) : (
                  <>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                      {item.value}
                    </motion.h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      {item.label}
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
