import React, { useState, useEffect } from 'react';

import image1 from '../assets/images/IMG_6521 (1).jpg';
import image2 from '../assets/images/IMG_6751 (1).JPEG';
import image3 from '../assets/images/IMG_6953 (1).jpg';

const images = [image1, image2, image3];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white p-8 min-h-screen flex items-center justify-center relative">
      {/* Image section */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentImageIndex]}
          alt="Cooper Martin"
          className="w-full h-full object-cover opacity-75 transition-opacity duration-1000"
        />
      </div>

      {/* Name section */}
      <div className="name-section bg-gray-900 bg-opacity-70 rounded-xl p-8 shadow-lg text-center relative z-10">
        <h1 className="name-title text-5xl font-extrabold mb-4">Cooper Martin</h1>
        <p className="name-subtitle text-xl">Software Engineer | Sports Enthusiast</p>
      </div>
    </section>
  );
};

export default Home;
