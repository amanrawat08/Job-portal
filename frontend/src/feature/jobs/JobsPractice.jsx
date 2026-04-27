import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./jobSlice";
const JobsPractice = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.jobs);
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  console.log(list, loading, error);
  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      yo
    </div>
  );
};

export default JobsPractice;
