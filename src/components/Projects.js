import React from 'react';

const projects = [
  {
    title: 'NBA Top 100 Website',
    description: 'A website that gives the rankings and stats of the top 100 current NBA players with the goal to give fans a more in-depth look at the top players in the NBA.',
    tech: ['React', 'JavaScript', 'HTML', 'Supabase', 'Tailwind CSS'],
    link: 'https://nba-guru-app.onrender.com'
  },
  {
    title: 'Skill Tracker Website',
    description: 'A web application designed to help users track their progress in various skills. Built with Flask for the backend, featuring user authentication, secure login, and more.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Flask', 'PostgreSQL'],
    link: 'https://skill-tracker-project.onrender.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-70 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p>{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-sm bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mt-6 text-blue-300 hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
