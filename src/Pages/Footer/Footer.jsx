import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 px-8 font-[sans-serif] tracking-wide mt-16">
      <div className="relative max-w-screen-xl mx-auto">
        <div className="bg-blue-600 gap-3 rounded-md flex flex-wrap items-center justify-between sm:px-8 max-sm:px-4 py-4 absolute top-[-66px] w-full">
          <h6 className="text-white sm:text-xl max-sm:text-base font-semibold">
            Become Ambassador
          </h6>
          <button
            type="button"
            className="px-4 py-2 text-sm rounded-full text-blue-600 gap-2 bg-white"
          >
            Contact us
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pt-10">
          <div className="lg:col-span-2 max-w-md">
            <h4 className="text-lg font-semibold mb-6 text-gray-200">About Us</h4>
            <p className="text-gray-400 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
              mi eu pulvinar cursus, sem elit interdum mauris.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/"
                  
                  className="text-gray-400 hover:text-gray-300 text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Classes"
                  className="text-gray-400 hover:text-gray-300 text-base"
                >
                  All Class
                </Link>
              </li>
              <li>
                <Link
                  to="/Teach-On-Edurock"
                  className="text-gray-400 hover:text-gray-300 text-base"
                >
                  Teach on Q-bitlearn
                </Link>
              </li>
              <li>
                <Link
                  to="/Dashboard"
                  className="text-gray-400 hover:text-gray-300 text-base"
                >
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
              <li className="text-gray-400 text-base">dev.adnanmahmud@gmail.com</li>
              <li className="text-gray-400 text-base">+1 234 567 890</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-200">Follow Us</h4>
            <ul className="flex flex-wrap gap-4">
              <li>
                <a href="#" className="text-blue-600">
                  <FaFacebookF className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600">
                  <FaLinkedinIn className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#" className="text-pink-600">
                  <FaInstagram className="w-8 h-8" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400">
                  <FaGithub className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4 px-4 -mx-8 text-center mt-10">
        <p className="text-gray-400 text-base">© adnanmahmud99. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
