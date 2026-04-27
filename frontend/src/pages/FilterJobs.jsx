import { useState } from "react";
import Banner from "../component/comman/Banner"
import FiltersSection from "../component/comman/FiltersSection"
import JobCard from "../feature/jobs/JobCard";
import Loading from "../component/comman/Loading";
const FilterJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Banner data={"Search Jobs"} />
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 flex">
        <div className="flex w-full gap-6 ">
          <FiltersSection setJobs={setJobs} setLoading={setLoading} />
          <div className="w-[70%] h-full border rounded-sm border-t-[4px] border-t-[#5bb907] bg-blue-50">
            <div className="flex    p-3 items-start gap-3 flex-wrap">
              {loading && <div>Loading..</div>}
              {!loading && jobs.length > 0 &&
                jobs.map((job) => <JobCard key={job._id} job={job} />)
              }
              {!loading && jobs.length === 0 && <div>No Jobs Found</div>}

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FilterJobs
