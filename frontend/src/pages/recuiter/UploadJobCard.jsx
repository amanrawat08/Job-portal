import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import BasicSwitches from "./BasicSwitches";
import { useNavigate } from "react-router-dom"; 
const UploadJobCard = ({ data, handleData, setShowApplicants ,showapplicants}) => {
    const date = data.createdAt.split('T')[0];
    const navigate = useNavigate()
    const TimeAgo = (date) => {
        const diff = Date.now() - new Date(date);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return days === 0 ? "Today" : `${days} days ago`;
    } 
    // console.log(data);

     

    return (
        <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-sm border">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#5bb907] flex items-center justify-center text-white font-bold">
                        {data.company[0]}
                    </div>
                    <div>
                        <p className="text-sm font-semibold">{data.company}</p>
                        <p className="text-xs text-gray-400">{TimeAgo(date)}</p>
                    </div>
                </div>


                <BasicSwitches />
            </div>

            {/* Title */}
            <h2 className="mt-4 text-lg font-semibold text-gray-900">
                {data.title}
            </h2>

            {/* Tags */}
            <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {data.jobType}
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {data.experienceLevel}
                </span>
            </div>

            {/* Divider */}
            <div className="my-4 border-t" />

            {/* Footer */}
            <div className="flex items-center justify-between mb-5">
                <div>
                    <p className="font-semibold text-gray-900">&#x20b9;{data.salaryMax}</p>
                    <p className="text-xs text-gray-400">{data.location.city} , {data.location.country}</p>
                </div>
                <div className="flex gap-2">
                    <button className="rounded-lg bg-[#032f59] px-4 py-2 text-sm font-medium text-white hover:bg-gray-900">
                        <FaEdit onClick={(e) => handleData(data, data._id)} />
                    </button>
                    <button className="rounded-lg bg-[#032f59] px-4 py-2 text-sm font-medium text-white hover:bg-gray-900" onClick={() => {
                        navigate(`/delete-job/${data._id}`);

                    }}>
                        <MdDelete />
                    </button>
                </div>

            </div>
            <div onClick={()=>navigate(`applicant/${data._id}`)}  className="text-sm pt-10 mt-5 text-red-700 font-bold underline cursor-pointer hover:text-red-500 inline">
                View Applicatants
            </div>

             
        </div>
    );
};

export default UploadJobCard;
