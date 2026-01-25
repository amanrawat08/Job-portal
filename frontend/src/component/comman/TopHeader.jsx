import { TiSocialFacebook } from "react-icons/ti";
import { FaGithubAlt, FaLinkedinIn, FaInstagram } from "react-icons/fa";


function TopHeader() {
  return (
    <div className="TopHeaderOuter py-1 border-b-2 border-[#f5f5f5]">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h3 className="flex-1 text-2xl font-medium">Welcome to Job Portal !!!</h3>
        <div className="h-20 text-center flex-1 flex items-center justify-center">
          <img src="logo.png" className="h-full" alt="" />
        </div>
        <div className="flex-1 text-end">
          <ul className="flex items-end justify-end gap-7">
            <li className="border rounded-full p-2 text-[#00315d] border-[#00315d]">
              <TiSocialFacebook className="size-[18px] " />
            </li>
            <li className="border rounded-full p-2 text-[#00315d] border-[#00315d]">
              <FaGithubAlt className="size-[18px] " />
            </li>
            <li className="border rounded-full p-2 text-[#00315d] border-[#00315d]">
              <FaLinkedinIn className="size-[18px] " />
            </li>
            <li className="border rounded-full p-2 text-[#00315d] border-[#00315d]">
              <FaInstagram className="size-[18px] " />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
