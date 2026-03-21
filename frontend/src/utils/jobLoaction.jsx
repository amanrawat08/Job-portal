import { jobs } from "../data/Jobs";
export const locationFilter = Object.entries(
        jobs.reduce((acc,job)=>{
        acc[job.location] = (acc[job.location] || 0 ) + 1;
        return acc;
    },{})
    ).map(([location, count])=>({location, count}));
    
