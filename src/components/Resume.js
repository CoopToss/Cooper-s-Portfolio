import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume-section bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white p-8">
      <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide">Cooper's Resume</h2>

      {/* Contact Information */}
      <div className="text-center mb-6">
        <p className="text-lg">Fort Myers, FL</p>
        <p className="text-lg">coopertoss15@gmail.com</p>
        <p className="text-lg">850-398-3528</p>
        <p className="mt-2">
          <a
            href="https://www.linkedin.com/in/cooper-martin-2a14b8b5/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100 underline transition-all duration-300"
          >
            LinkedIn
          </a>
        </p>
      </div>

      {/* Summary */}
      <div className="resume-item mb-10 bg-gray-900 bg-opacity-50 rounded-xl p-6 shadow-lg">
        <h3 className="text-3xl font-bold mb-2">Summary</h3>
        <p className="text-lg leading-relaxed">
          Highly motivated Software Engineer with a strong foundation in programming languages, responsive UIs, and full-stack development. Transitioning from an exercise science background, I bring a fresh, problem-solving approach to software engineering.
        </p>
      </div>

      {/* Skills */}
      <div className="resume-item mb-10 bg-gray-900 bg-opacity-50 rounded-xl p-6 shadow-lg">
        <h3 className="text-3xl font-bold mb-2">Skills</h3>
        <ul className="list-disc ml-8 text-lg leading-relaxed">
          <li>Software Development & Design</li>
          <li>Python & JavaScript</li>
          <li>React & Node</li>
          <li>Flask & SQL</li>
          <li>UI/UX</li>
        </ul>
      </div>

      {/* Projects */}
      <div className="resume-item mb-10 bg-gray-900 bg-opacity-50 rounded-xl p-6 shadow-lg">
        <h3 className="text-3xl font-bold mb-2">Projects</h3>
        <ul className="list-disc ml-8 text-lg leading-relaxed">
          <li>
            <strong>NBA Guru Website:</strong> Created an interactive NBA ranking/stats website using React and Supabase.
          </li>
          <li>
            <strong>Skill Tracker Website:</strong> Developed a full-stack app for managing skills using Python and Flask.
          </li>
        </ul>
      </div>

      {/* Download Resume Button */}
      <div className="text-center mt-12">
        <a
          href="/Martin_Cooper_Resume.docx (1).pdf"
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download My Resume!
        </a>
      </div>
    </section>
  );
};

export default Resume;