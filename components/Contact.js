import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Contact Form</h1>
      <form action="" className="max-w-[600px] m-auto my-4">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className="border shadow-lg p-3"
            type="text"
            name="email"
            placeholder="Your email address"
          />
        </div>
        <input
          className="border shadow-lg p-3 my-2 w-full"
          type="subject"
          placeholder="Enter the subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your message here, feel free to contact."
        />
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
