
import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const JobSearchBar = () => {

  const category = useSelector((state) => state.CategorySlice.categ);
 // console.log(category);





  const [keyword, setKeyword] = useState();
  const jobFilter = useMemo(() => {
    if(!keyword) return null;
      return category.filter((job)=>job.name.toLowerCase().includes(keyword.toLowerCase()))
  }, [keyword]);
  useEffect(() => {
 //   console.log(jobFilter);
  }, [keyword])
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

        {/* location Select 
        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 w-full md:w-[35%] shadow-sm">
          <MdLocationOn className="text-gray-400 text-xl" />
          <select
            className="w-full outline-none text-gray-500 bg-transparent"
            onChange={(e) => setLocation(e.target.value)}
          >
            <option>Select location</option>
            {locationFilter?.map((categ, index) => {
              return (
                <option key={index} value={categ.location}>
                  {categ.location}
                </option>
              );
            })}
          </select>
        </div>
        */}
        {/* Search Button */}
          {/**
           * 
           <button
             className="w-full md:w-[20%] flex items-center justify-center bg-green-500 hover:bg-green-600 transition text-white rounded-xl py-3"
           >
           <FiSearch className="text-2xl" />
           </button>
           * 
           */}

        {/* listing jobs  */}
        {
            keyword && jobFilter.length > 0 && <div className="absolute bottom-[-40px] border  bg-white p-2 right-40 left-4 top-200">
            <ul>
                {
                     jobFilter.map((job,index)=>{
                        return <Link key={job.name}  to={`/jobs?category=${encodeURIComponent(job.slug)}`}> <li className="" >{job.name}</li> </Link> 
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
