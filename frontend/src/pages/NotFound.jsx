import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center max-w-lg">
        
        {/* Cute Illustration */}
        <div className="text-7xl mb-4 animate-bounce">😕</div>

        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-2">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Looks like the page you're trying to visit doesn’t exist or has been moved.
          Don’t worry, let’s get you back on track 🚀
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-500 transition"
          >
            Go Home
          </Link>

          <Link
            to="/jobs"
            className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition"
          >
            Browse Jobs
          </Link>
        </div>

        {/* Extra Text */}
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Opportunia. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default NotFound;