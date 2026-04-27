import { jobs } from "../data/Jobs";
export const categoryFilter = Object.entries(
        jobs.reduce((acc,job)=>{
        acc[job.title] = (acc[job.title] || 0 ) + 1;
        return acc;
    },{})
    ).map(([title, count])=>({title, count}));
    
