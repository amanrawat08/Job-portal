import { useParams } from "react-router-dom"
import { jobs } from "../../data/Jobs";

const JobDetails = ()=>{
    const {jobId} = useParams();
    const job = jobs.find((j)=>j.id == jobId)
    if(!job) return <div>no job found</div>
     console.log(job)
    return <h1>job details</h1>
}

export default JobDetails