import React from 'react';

const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Python', 'Flask', 'PostgreSQL', 'Node.js', 'Supabase', 'Tailwind CSS'];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-70 p-4 rounded shadow-lg text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
