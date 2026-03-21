import Herosection from "../component/comman/Herosection";
import JobCategory from "../feature/jobs/JobCategory";
import JobSection from "../component/comman/JobSection";
import Search_PostBtn from "../component/comman/Search_PostBtn";
import CounterArea from "../component/comman/CounterArea";
import Blog_Section from "../component/comman/Blog_Section";
import { jobs } from "../data/Jobs";
import { useState, useMemo } from "react";
import useDebounce from "../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { fetchJobs } from "../redux/JobSlice";
import AboutUs from "../component/comman/AboutUs";
function Home({ category }) {
  const dispatch = useDispatch()
  dispatch(fetchJobs())


  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const debouncedKeyword = useDebounce(keyword, 500)
  const filterJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(debouncedKeyword.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase()),
    );
  }, [debouncedKeyword, location]);

  return <div>

    <Herosection  />
    {
      /**  <Search_PostBtn/> */
    }
    <JobCategory />
    <AboutUs/>
    <JobSection />
    {/* <WorkProcess/>*/}
    <Blog_Section />
    <CounterArea />

  </div>
}

export default Home;