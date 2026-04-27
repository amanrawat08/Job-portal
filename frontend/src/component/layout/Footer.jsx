import { FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return ( 
    <footer className=" border-t border-gray-200 bg-[#5bb807] p-absolute bottom-0 w-full "> 
      <div className="max-w-7xl mx-auto  ">

         

        {/* Bottom */}
        <div className=" border-gray-200 pb-6 pt-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            © 2026 OPPORTUNIA, All rights reserved.
          </p>

          <div className="flex gap-5 text-white text-lg">
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
