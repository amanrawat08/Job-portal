import { useState } from "react";
import Banner from "../component/comman/Banner"
import FiltersSection from "../component/comman/FiltersSection" 
import JobCard from "../feature/jobs/JobCard";
const FilterJobs = () => {



  const [jobs, setJobs] = useState([])

  // console.log(jobs);



  return (
    <div>
      <Banner data={"Search Jobs"}/>
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 flex">
        <div className="flex w-full gap-6 ">
          <FiltersSection setJobs={setJobs} />
          <div className="w-[70%]">
            <div className="flex border h-full p-3 items-start bg-gray-100">
              {
                (jobs.length>0) ? jobs?.map((job) => <JobCard key={job._id} job={job} />) : <div>No jobs found</div>
              }

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FilterJobs
