import React from 'react';

const experiences = [
  {
    title: 'Springboard Software Engineering Bootcamp Student',
    company: 'Springboard',
    duration: 'Jan 2024 - Present',
    description: 'Worked on full-stack web development projects using a wide variety of languages and technologies. Enhanced skills and heightened my knowledge in the software engineering world.'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8 bg-gray-900 bg-opacity-70 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold">{exp.title}</h3>
            <p className="text-sm">{exp.company} - {exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;