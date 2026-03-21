import { GET_MY_APPLICATION_STATUS_URL } from "../utils/comman";
import Banner from "../component/comman/Banner";
import axios from "axios";
import JobAppliedTable from "../component/comman/JobAppliedTable";
import { useEffect, useState } from "react";

const ViewJobApplied = () => {
    const [application, setApplication] = useState([])
    const getApplications = async () => {
        const token = localStorage.getItem("token");
        try {
            const res = await axios.get(GET_MY_APPLICATION_STATUS_URL, {
                "withCredentials": true,
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            }); 
            
            setApplication(res.data.applications);
            
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(()=>{
        getApplications()

    }, [])

    return (
        <div>
            <div>
                <Banner data={"Job Applied"} />
                <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12 ">
                    <JobAppliedTable application = {application}/>
                </div>
            </div>
        </div>
    )
}

export default ViewJobApplied