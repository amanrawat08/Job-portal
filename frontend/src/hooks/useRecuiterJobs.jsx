import axios from "axios";
import { GET_POSTEDJOB_URL } from "../utils/comman";
import { useDispatch, useSelector } from "react-redux";
import { setRecuiterJobs } from "../redux/RecuiterJobSlice";
import { useEffect, useCallback } from "react"; 

const useRecuiterJobs = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.user?.user?._id);
  const token = localStorage.getItem("token"); 
  const showJobs = useCallback(async () => {
    if (!userId || !token) return;

    try {
      const res = await axios.get(GET_POSTEDJOB_URL, {
        params: { userId },
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(setRecuiterJobs(res.data.filteredjobs));
    } catch (error) {
      console.error(error.response?.data || error.message);
    } 
  }, [userId, token, dispatch]);

  useEffect(() => {
    showJobs();
  }, [showJobs]);

  return { fetchJobs: showJobs };
};

export default useRecuiterJobs;
