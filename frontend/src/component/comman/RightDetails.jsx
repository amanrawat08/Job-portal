import axios from "axios";
import { APPLY_JOB_URL } from "../../utils/comman";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const RightDetails = ({ workMode, status, rname, remail, jobid }) => { 
  const user = useSelector((state) => state?.user?.user);
  let token = localStorage.getItem("token");
  const applyJobHandler = async () => {
    try { 
      //  console.log(token);
      if (!user) { 
        toast.error("You need to log in before applying.");
        return null;
      }
      const res = await axios.post(APPLY_JOB_URL, {
        user,
        jobid
      },
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

      toast.success(res?.data?.message);

    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "Something went wrong");

    }
  }
 


  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-100">

      {/* Apply Button */}
      <div className='flex justify-end mb-4'>
        <div
          className="apply bg-[#5bb907] rounded-full font-semibold text-white px-6 py-3 
      hover:bg-[#032f59] transition-all duration-200 ease-in-out 
      shadow-md hover:shadow-lg cursor-pointer"
          onClick={applyJobHandler}
        >
          Apply Now
        </div>
      </div>

      {/* Job Summary */}
      <div className="bg-gray-50 rounded-xl p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-3 border-b pb-2">
          Job Summary
        </h3>

        <ul className="space-y-2 text-gray-700">
          <li className="flex justify-between">
            <span className="font-medium">Work Mode:</span>
            <span className="text-gray-600">{workMode}</span>
          </li>

          <li className="flex justify-between">
            <span className="font-medium">Status:</span>
            <span className="text-gray-600">{status}</span>
          </li>

          <li className="flex justify-between">
            <span className="font-medium">Recruiter:</span>
            <span className="text-gray-600">{rname}</span>
          </li>

          <li className="flex justify-between">
            <span className="font-medium">Recruiter Mail:</span>
            <span className="text-blue-600 break-all">{remail}</span>
          </li>
        </ul>
      </div>

 
    </div>
  )
}

export default RightDetails
