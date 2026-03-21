import axios from "axios";
import { APPLY_JOB_URL } from "../../utils/comman";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const RightDetails = ({ workMode, status, rname, remail, jobid }) => {
//const [isAlready, Applied] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  let token = localStorage.getItem("token");
  const applyJobHandler = async () => {
    try {
    //  console.log(token);
      if(!user){
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
    <div>
      <div>
        <div className='flex justify-end'>
          <div className="apply bg-[#5bb907] w-auto rounded-full font-semibold text-white px-5 py-4 line-clamp-3   hover:bg-[#032f59] hover:text-white  transition delay-300 duration-75  ease-in-out shrink-0 cursor-pointer"  onClick={applyJobHandler}>
            Apply Now
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3>Job Summary:</h3>
          <ul>
            <li>
              workMode: {workMode}
            </li>
            <li>
              Status: {status}
            </li>
            <li>
              Recuiter: {rname}
            </li>
            <li>
              Recuiter Mail: {remail}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RightDetails
