import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    emailjs
      .send('service_rtybylx', 'template_ivt0sa7', {
        from_name: name,
        from_email: email,
        message: message
      }, '5qP73Vc2a_80aO9TV')
      .then(response => {
        console.log('Email sent successfully:', response.status, response.text);
        setSuccessMessage('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      })
      .catch(err => {
        console.error('Failed to send email:', err);
        setSuccessMessage('Failed to send email. Please try again later.');
      });
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <form className="bg-gray-900 bg-opacity-70 rounded-xl p-6 shadow-lg space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              className="p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              className="p-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
        {successMessage && (
          <p className="mt-4 text-center text-green-500">{successMessage}</p>
        )}
        <div className="mt-12 text-center">
          <p className="text-lg mb-2">You can also reach me at:</p>
          <p className="text-lg">Phone: 850-398-3528</p>
          <p className="text-lg">
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/cooper-martin-2a14b8b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline"
            >
              Cooper Martin
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
