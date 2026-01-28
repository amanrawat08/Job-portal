import { MapPin, Clock, Briefcase } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const JobCard = ({job}) => {
  const navigate = useNavigate()
  
    const {title,company,location,experience,salary,type,description,skills ,id,postedAt} = job
  return (
    <div className="max-w-sm rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200" key={Number(id)}>
    
      {/* Header */}
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
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Job Title */}
      <h2 className="mt-4 text-lg font-semibold text-gray-900">
        {title}
      </h2>

      {/* Meta */}
      <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Briefcase size={14} />
          <span>{type}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          <span>{postedAt}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex gap-2 flex-wrap ">
        {
            skills.map((skill)=>{
                return <span  className="rounded-md py-3 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600" key={skill}>
          {skill}
        </span>
            })
        }
        
        
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="text-xl font-bold text-blue-600">
          {salary} 
        </div>

        <button  className="rounded-lg bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-200 transition-colors" onClick={()=>navigate(`/jobs/${job.id}`)}>
          More Details
        </button>
      </div>
    </div>
  );
};

export default JobCard;
