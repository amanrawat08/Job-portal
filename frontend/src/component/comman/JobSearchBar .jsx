import { useEffect, useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { jobs } from "../../data/Jobs"; 
import { locationFilter } from "../../utils/jobLoaction";
import useDebounce from "../../hooks/useDebounce";
import { Link } from "react-router-dom";
const JobSearchBar = ({ keyword, setKeyword, location, setLocation ,filterJobs}) => {
  

  

  return (
    <div className="max-w-5xl mt-5 mx-auto bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-4">
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 w-full md:w-[45%] shadow-sm">
          <FiSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Enter skills or job title"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        {/* location Select */}
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
        
        {/* Search Button */}
        <button
          className="w-full md:w-[20%] flex items-center justify-center bg-green-500 hover:bg-green-600 transition text-white rounded-xl py-3"
          
        >
          <FiSearch className="text-2xl" />
        </button>

        {/* listing jobs */}
        {
            keyword && <div className="absolute bottom-[-40px] border  bg-white p-2 right-40 left-4 top-200">
            <ul>
                {
                     filterJobs.map((job,index)=>{
                        return <Link key={job.title}  to={`/jobs?category=${encodeURIComponent(job.title)}`}> <li className="" >{job.title}</li>{console.log(job.title)}</Link> 
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
