import Herosection from "../component/comman/Herosection";
import JobCategory from "../component/comman/JobCategory";
import JobSection from "../component/comman/JobSection";
import Search_PostBtn from "../component/comman/Search_PostBtn";
import CounterArea from "../component/comman/CounterArea";
import Blog_Section from "../component/comman/Blog_Section";
import { jobs } from "../data/Jobs";
import { useState,useMemo } from "react";
import useDebounce from "../hooks/useDebounce";
function Home({category}){

    const [keyword, setKeyword] = useState("");
      const [location, setLocation] = useState("");
      const debouncedKeyword  = useDebounce(keyword, 500)
      const filterJobs = useMemo(() => {
        return jobs.filter(
          (job) =>
            job.title.toLowerCase().includes(debouncedKeyword .toLowerCase()) &&
            job.location.toLowerCase().includes(location.toLowerCase()),
        );
      },[debouncedKeyword , location]);

    return <div>
        
        <Herosection keyword={keyword} location = {location} setKeyword={setKeyword} setLocation={setLocation} filterJobs={filterJobs} />
        <Search_PostBtn/>
         <JobCategory category = {category}/>
        <JobSection/>
        {/* <WorkProcess/>*/}
        <Blog_Section/>
        <CounterArea/>
    </div>
}

export default Home;