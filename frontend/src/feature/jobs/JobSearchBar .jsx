
import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const JobSearchBar = () => {

  const category = useSelector((state) => state.CategorySlice.categ);

  const [keyword, setKeyword] = useState();
  const jobFilter = useMemo(() => {
    if(!keyword) return null;
      return category.filter((job)=>job.name.toLowerCase().includes(keyword.toLowerCase()))
  }, [keyword]); 
  return (
    <div className="max-w-4xl mt-5   bg-white/80 backdrop-blur-md md:w-[70%] shadow-lg rounded-2xl p-4">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 w-full md:w-[100%] shadow-sm">
          <FiSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Enter skills or job title"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        

        {/* listing jobs  */}
        {
            keyword && jobFilter.length > 0 && <div className="absolute top-[100%] border max-h-52 overflow-auto bg-white py-2 right-30 max-w-[200px] left-4 scrollbar-thin scrollbar-thumb-[#5bb907] scrollbar-track-gray-200 hover:scrollbar-thumb-[#4aa006]">
            <ul>
                {
                     jobFilter.map((job,index)=>{
                        return <Link key={job.name}  to={`/jobs?category=${encodeURIComponent(job.slug)}`}> <li className=" px-3 py-1 border-b " >{job.name}</li> </Link> 
                    })
                }
            </ul>
        </div>
        }
       
      </div>
    </div>
  );
};

export default JobSearchBar;
