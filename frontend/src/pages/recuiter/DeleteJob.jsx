
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DELETE_POSTEDJOB_URL } from "../../utils/comman"; 
import toast from 'react-hot-toast';
const DeleteJob = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const deleteHandler = async () => {
        console.log(id);
        try {
            const res = await axios.delete(`${DELETE_POSTEDJOB_URL}/${id}`, {
                params: {id},
                withCredentials: true,
                 headers: {
                    Authorization: `Bearer ${token}`,
                }

            })
            toast.success(res?.data?.message)
             
        } catch (error) {
            console.log("error");
            
            console.log(error);

        }  

    }

    useEffect(() => {
        const confirmDelete = window.confirm("Are you sure?");
        if (confirmDelete) deleteHandler();
        navigate("/showPostedJobs");

    }, []);



    return null;

}

export default DeleteJob
