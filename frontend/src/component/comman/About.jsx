import { Link, useLocation } from "react-router-dom"; 


const About = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";


  return (
    <section className="bg-gray-50  ">
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12  ">

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div>
            <img
              src="aboutimg.jpg"
              alt="team working"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h1 className="heading capitalize">About  <span className="heading-design">OPPORTUNIA</span>  </h1>

            <p className="text-gray-600 mb-4 leading-relaxed">
              At Opportunia, we help job seekers discover relevant job opportunities
              based on their skills, experience, and preferences. Our platform allows
              candidates to create profiles, upload resumes, and apply to jobs with
              just a few clicks.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              For companies, Opportunia provides powerful tools to post job listings,
              manage applications, and find the best talent efficiently. Our smart
              filtering and search system ensures faster and more accurate hiring.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We aim to bridge the gap between talent and opportunity by creating a
              reliable, scalable, and user-friendly hiring ecosystem for everyone.
            </p>

            {
              !isAboutPage && (
                <Link to="/about" className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
                  Read More
                </Link>
              )
            }

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;