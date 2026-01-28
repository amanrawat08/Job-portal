import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { jobs } from "../data/Jobs"
import JobCard from "../component/comman/JobCard"

const JobsPage = ()=>{
    const [param] = useSearchParams()
    const category = param.get("category")
    let filteredJobs
    if(category.toLowerCase()!="all"){
        filteredJobs = useMemo(()=>
           jobs.filter((job)=>job.title.toLowerCase() === category?.toLowerCase())
           ,[category])
    }
    else{
        filteredJobs = jobs
    }
     
    return <div className="mx-auto py-5 max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-6 ">

      {filteredJobs.length ? (
        filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      ) : (
        <div className="text-gray-500 text-center">
          No jobs found for this category
        </div>
      )}
        </div>
    </div>
        
    
}

export default JobsPage