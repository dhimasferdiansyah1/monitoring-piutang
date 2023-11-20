import React from "react";

const ContactPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex min-h-screen">
        <h1>Contact Us</h1>
        <p>Fill out the form below to get in touch with us:</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
