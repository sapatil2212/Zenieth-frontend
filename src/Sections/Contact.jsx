import React, { useState } from "react";
import axios from "axios";
import { useDarkMode } from "../Components/DarkModeContext";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
    persons: "",
    children: "",
    property: "",
    checkin: "",
    checkout: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5001/contact",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      setSuccessMessage("Message sent successfully!");

      // Reset form data
      setFormData({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        message: "",
        persons: "",
        children: "",
        property: "",
        checkin: "",
        checkout: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("There was an error sending your message.");
    } finally {
      setLoading(false);
    }
  };

  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${
        darkMode ? "dark bg-gray-900" : "bg-white"
      } py-12 sm:py-16 transition-colors duration-300`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-8 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
            Get in touch with us today
          </h2>
          <p className="text-center dark:text-gray-400 mb-8 mt-2">
            Whether you have a question about our services or need assistance
            with a reservation, we are here to help.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-5 max-w-2xl rounded-3xl ring-1 ring-gray-200 dark:ring-gray-700 sm:mt-10 lg:mx-0 lg:flex lg:max-w-none"
        >
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-12 rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full h-12 rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4"
                />
              </div>
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile No."
                value={formData.mobile}
                onChange={handleChange}
                required
                className="mt-4 block w-full h-12 rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-4 block w-full h-12 rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4"
              />
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="number"
                  name="persons"
                  placeholder="No. of Persons"
                  value={formData.persons}
                  onChange={handleChange}
                  className="mt-4 block w-full h-12 rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="children"
                  placeholder="No. of Children"
                  value={formData.children}
                  onChange={handleChange}
                  className="mt-4 block w-full h-12 rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4"
                />
              </div>
            </div>
            <div>
              <select
                name="property"
                value={formData.property}
                onChange={handleChange}
                className="mt-4 block w-full h-12 rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4"
                required
              >
                <option value="" disabled>
                  Select Property
                </option>
                <option value="parel">Parel</option>
                <option value="dadar">Dadar</option>
                <option value="worli">Worli</option>
                <option value="lower-parel">Lower Parel</option>
                <option value="bkc">BKC</option>
                <option value="chandiwali">Chandiwali</option>
                <option value="prabhadevi">Prabhadevi</option>
                <option value="powai">Powai</option>
                <option value="thane">Thane</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="date"
                  name="checkin"
                  value={formData.checkin}
                  onChange={handleChange}
                  required
                  className="mt-4 block w-full h-12 rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4"
                />
              </div>
              <div>
                <input
                  type="date"
                  name="checkout"
                  value={formData.checkout}
                  onChange={handleChange}
                  required
                  className="mt-4 block w-full h-12 rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4"
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="mt-4 block w-full rounded-xl bg-gray-100 border-transparent focus:border-loulou-500 focus:bg-white focus:ring-0 dark:bg-gray-700 dark:text-white px-4 py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-loulou-600 text-white py-3 px-4 rounded-md hover:bg-loulou-700 transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {successMessage && (
              <p className="mt-4 text-green-600">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-600">{errorMessage}</p>
            )}
          </div>

          {/* Optional Map Section */}
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="relative w-full h-full rounded-2xl bg-gray-50 dark:bg-gray-800 ring-1 ring-inset ring-gray-900/5 dark:ring-gray-700 lg:flex lg:flex-col lg:justify-center">
              {/* Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30169.27258246147!2d72.8571847489645!3d19.056742422833466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c97b5970d763%3A0xdd03bbd2659f620f!2sZenith%20Hospitality%20Services%7C%20Service%20Apartments%20BKC%20%7C%20Service%20apartments%20in%20bandra%20Kurla%20complex!5e0!3m2!1sen!2sin!4v1727536758430!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
