import { MapPin, Clock, Briefcase } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const JobCard = ({ job }) => { 
  
  const givenDate = new Date(job.createdAt);
  const today = new Date();
  const dispatch = useDispatch()
  // remove time part (important for accurate day diff)
  givenDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diffTime = today - givenDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

 // console.log(diffDays);

  const detailPageHandler = () => {
    navigate(`/jobs/jobDetail/${job._id}`);
  }

 
  const navigate = useNavigate()

  const { title, company, experience, salaryMax, workMode, skills, _id, createdAt, location } = job
  return (
    <div className="border bg-white w-[250px] pl-3 px-4 py-5  ">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-lg bg-indigo-900 flex items-center justify-center text-white text-xl font-bold">
          R
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {company}
          </h3>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin size={14} />
            <span>{location?.city}, {location?.country} </span>
          </div>
        </div>
      </div>

      <h2 className="mt-4 text-lg font-semibold text-gray-900">
        {title}
      </h2>

      <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Briefcase size={14} />
          <span>{workMode}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{diffDays} ago</span>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        This is dummy discription
      </p>

      <div className="mt-4 flex gap-2 flex-wrap ">
        {
          skills?.map((skill) => {
            return <span className="rounded-md py-3 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600" key={skill}>
              {skill}
            </span>
          })
        }


      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">
          {salaryMax}
        </div>

        <button className="rounded-lg bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-200 transition-colors" onClick={detailPageHandler}>
          More Details
        </button>
      </div>
    </div>


  );
};

export default JobCard;
