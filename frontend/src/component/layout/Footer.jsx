import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto  ">

        {/* Divider */}
        <div className="pt-10 " />

        {/* Newsletter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 ">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
          </div>

          <form className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Your Company, Inc. All rights reserved.
          </p>

          <div className="flex gap-5 text-gray-500 text-lg">
            <FaFacebook className="hover:text-gray-900 cursor-pointer" />
            <FaInstagram className="hover:text-gray-900 cursor-pointer" />
            <FaXTwitter className="hover:text-gray-900 cursor-pointer" />
            <FaGithub className="hover:text-gray-900 cursor-pointer" />
            <FaYoutube className="hover:text-gray-900 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
