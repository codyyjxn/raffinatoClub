import React, { useState } from "react";
import ContactField from "../components/ContactField";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderNumber: "",
    message: "",
  });

  const [error, setErrors] = useState({
    name: false,
    email: false,
    orderNumber: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // we will display that the user has submitted a request
    console.log("Thank you! We will contact you shortly", formData);
  };
  const emailTo = "raffinatoClub@gmail.com";
  const subject = "Request";
  const body = `Name: ${formData.name}\nEmail: ${formData.email}\nOrder Number: ${formData.orderNumber}\nMessage: ${formData.message} `;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      {/* We need to create a form for our users when they try to contact us about a curtain item */}
      <form onSubmit={handleSubmit} className="space-y-10">
        <ContactField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Name"
          error={error.name}
          required
        />
        <ContactField
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
          error={error.email}
          required
        />

        <ContactField
          type="text"
          id="orderNumber"
          name="orderNumber"
          value={formData.orderNumber}
          onChange={handleChange}
          placeholder="Order Number"
          error={error.orderNumber}
          required
        />

        <ContactField
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Message"
          error={error.message}
          rows="4"
          required
        />

        <button
          type="submit"
          className="w-full bg-gray-900 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded-md px-4 py-2 transition duration-200"
        >
          Submit
        </button>
      </form>
      {/* Contact / Social Media Accounts  */}
      <div className="mt-8">
        <div>
          <strong>Contact</strong>
        </div>
        <p className="text-gray-700">
          <a
            className="underline"
            href={`mailto:${emailTo}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`}
          >
            raffinatoClub@gmail.com
          </a>
        </p>
        <div>
          <div>
            <strong>Customer Support Hours</strong>
          </div>
          <p>Monday - Friday 8:00am - 4pm PST</p>
          <i>Excluding the weekend and major holidays.</i>
        </div>
        <div>
          <a>Instgram</a>
          <a>TikTok</a>
          <a>Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
