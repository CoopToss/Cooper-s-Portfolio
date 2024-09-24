import React from 'react';

const Home = () => {
  return (
    <section className="home-section bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white p-8 min-h-screen flex items-center justify-center">
      <div className="name-section bg-gray-900 bg-opacity-70 rounded-xl p-8 shadow-lg text-center">
        <h1 className="name-title text-5xl font-extrabold mb-4">Cooper Martin</h1>
        <p className="name-subtitle text-xl">Full-Stack Developer | Basketball Enthusiast</p>
      </div>
    </section>
  );
};

export default Home;