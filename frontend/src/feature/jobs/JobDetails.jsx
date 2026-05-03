import { useParams } from "react-router-dom"
import Banner from "../../component/comman/Banner";
import LeftDetails from "../../component/comman/LeftDetails";
import RightDetails from "../../component/comman/RightDetails";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobById } from "../../redux/JobSlice";
import { useEffect } from "react";

const JobDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch();

    const job = useSelector((state) => state?.jobs?.jobDetails?.job);
    const recuiterData = useSelector((state) => state?.jobs?.jobDetails?.rData);
    const loading = useSelector((state) => state?.jobs?.loading);

    useEffect(() => {
        if (id) {
            dispatch(fetchJobById(id))
        }
    }, [id, dispatch])

    if (loading) {
        return (
            <p className="h-[100vh] flex justify-center items-center">
                <span>Loading</span>
            </p>
        )
    }

    return (
        <>
            <Banner data={job?.title} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">

                    {/* Left */}
                    <div className="w-full lg:w-[70%]">
                        <LeftDetails {...job} />
                    </div>

                    {/* Right */}
                    <div className="w-full lg:w-[30%]">
                        <RightDetails
                            workMode={job?.workMode}
                            status={job?.status}
                            rname={recuiterData?.name}
                            remail={recuiterData?.email}
                            jobid={id}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default JobDetails