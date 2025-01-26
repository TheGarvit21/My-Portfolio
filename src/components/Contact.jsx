import React, { useState } from 'react';

const Contact = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // To preview the image if desired
    }
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Get in Touch</h1>
      <form className="max-w-lg mx-auto bg-neutral-900 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="email" className="block text-neutral-400 mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-neutral-400 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the subject"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-neutral-400 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message"
          ></textarea>
        </div>
        {/* Optional File Upload */}
        <div className="mb-6">
          <label htmlFor="image" className="block text-neutral-400 mb-2">
            Attach an Image (Optional)
          </label>
          <input
            type="file"
            id="image"
            className="w-full p-3 border border-neutral-700 rounded-lg bg-neutral-800 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleImageChange}
          />
          {image && (
            <div className="mt-4 text-center">
              <p className="text-neutral-400">Image Preview:</p>
              <img src={image} alt="Preview" className="max-w-full mt-2 rounded-lg" />
            </div>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
