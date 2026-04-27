import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Top Section */}
      <div className="bg-[#003459] text-white py-16 px-6 md:px-20 relative">
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="text-lg max-w-xl">
          Want to get in touch? We'd love to hear from you. Here's how you can reach us...
        </p>

        {/* Right Image */}
        <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
          <img
            src="https://images.unsplash.com/photo-1581091870622-6c1c6f0c4d9b"
            alt="contact"
            className="h-full w-full object-cover rounded-bl-[100px]"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative -mt-16 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Sales Card */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">📞</div>
            <h2 className="text-xl font-semibold mb-2">Talk to Sales</h2>
            <p className="text-gray-600 mb-4">
              Interested in our software? Just pick up the phone to chat with our sales team.
            </p>
            <p className="text-green-600 font-semibold mb-2">
              +91 87458 45960
            </p> 
          </div>

          {/* Support Card */}
          <div className="bg-white shadow-lg rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h2 className="text-xl font-semibold mb-2">
              Contact Customer Support
            </h2>
            <p className="text-gray-600 mb-6">
              Sometimes you need a little help from our support team. Don’t worry—we’re here for you.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
              Contact Support
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;