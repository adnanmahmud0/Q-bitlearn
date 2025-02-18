import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = () => {
    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email!",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: `Thank you! Your email "${email}" has been submitted.`,
    });

    setEmail(""); // Clear input after submission
  };

  return (
    <footer className="bg-gray-800 py-8 px-8 font-[sans-serif] tracking-wide mt-16">
      <div className="relative max-w-screen-xl mx-auto">
        <div className="bg-[#592ADF] gap-3 rounded-md flex flex-wrap items-center justify-between sm:px-8 max-sm:px-4 py-4 absolute top-[-66px] w-full">
          <h6 className="text-white sm:text-xl max-sm:text-base font-semibold">
            Become Ambassador
          </h6>
          <button
            type="button"
            onClick={toggleModal}
            className="px-4 py-2 text-sm rounded-full text-[#592ADF] gap-2 bg-white"
          >
            Contact us
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-10">
          <div className="lg:col-span-2 max-w-md">
            <h4 className="text-lg font-semibold mb-6 text-gray-200">About Us</h4>
            <p className="text-gray-400 text-base">
              We are a dynamic team dedicated to providing quality education through innovative and engaging methods. We aim to create impactful learning experiences for students of all ages.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-300 text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Classes" className="text-gray-400 hover:text-gray-300 text-base">
                  All Classes
                </Link>
              </li>
              <li>
                <Link to="/Teach-On-Edurock" className="text-gray-400 hover:text-gray-300 text-base">
                  Teach on Edurock
                </Link>
              </li>
              <li>
                <Link to="/Dashboard" className="text-gray-400 hover:text-gray-300 text-base">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-base">123 Main Street</li>
              <li className="text-gray-400 text-base">City, State, Country</li>
              <li className="text-gray-400 text-base">contact@edurock.com</li>
              <li className="text-gray-400 text-base">+1 234 567 890</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Follow Us</h4>
            <ul className="flex flex-wrap gap-4">
              <li>
                <a href="#" className="text-blue-600" aria-label="Facebook">
                  <FaFacebookF className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600" aria-label="LinkedIn">
                  <FaLinkedinIn className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-600" aria-label="Instagram">
                  <FaInstagram className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400" aria-label="Github">
                  <FaGithub className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4 px-4 -mx-8 text-center mt-10">
        <p className="text-gray-400 text-base">© edurock. All rights reserved.</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white shadow-lg p-8 w-full max-w-xl rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
            <div className="flex max-sm:flex-col gap-10">
              <FaEnvelope className="w-24 h-24 text-[#592ADF] shrink-0" />

              <div>
                <h3 className="text-gray-800 text-xl font-semibold">Get in Touch with Us</h3>
                <p className="mt-2 text-sm text-gray-400">
                  We’d love to hear from you! Reach out to us for inquiries, feedback, or support.
                </p>

                <div className="relative flex items-center px-1 bg-[#edf2f7] border-2 focus-within:border-[#007bff] focus-within:bg-transparent rounded mt-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="px-2 py-3 text-gray-800 w-full text-sm bg-transparent outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="button"
                    className="px-4 py-2.5 rounded text-white text-sm tracking-wider border-none outline-none bg-[#592ADF] hover:bg-[#5128a1] active:bg-[#3c1d83]"
                    onClick={handleSubmit}
                  >
                    Send
                  </button>
                </div>

                <div className="mt-6">
                  <button
                    onClick={toggleModal}
                    className="px-4 py-2 text-sm bg-gray-600 text-white rounded"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
