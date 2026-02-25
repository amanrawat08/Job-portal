import axios from "axios";
import { useEffect, useState } from "react";
import { JOB_POST_URL, UPDATE_POSTEDJOB_URL } from "../../utils/comman";
import toast from "react-hot-toast";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CreateJob = () => {
    const { id } = useParams();
    const updateData = useSelector((res) => res?.recuiterJobs?.editJob);
    const categ = useSelector((res) => res?.CategorySlice?.categ);

    const getCategName = ()=> {
        if(id){
           const mine =  categ.filter((e)=> e._id ==updateData?.category)
            return (mine[0].name);
            
        }   
        return null

    }
    
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
     
    const [formData, setFormData] = useState({
        title: updateData?.title || "",
        company: updateData?.company || "",
        description: updateData?.description || "",
        requirements: updateData?.requirements || "",
        responsibilities: updateData?.responsibilities || "",
        jobType: updateData?.jobType || "Full-time",
        workMode: updateData?.workMode || "OnSite",
        experienceLevel: updateData?.experienceLevel || "Fresher",
        salaryMin: updateData?.salaryMin || "",
        salaryMax: updateData?.salaryMax || "",
        city: updateData?.location?.city || "",
        country: updateData?.location?.country || "",
        skills: updateData?.skills || "",
        deadline: updateData?.deadline || "",
        category: updateData?.category?._id || updateData?.category || ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    //createing new job
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            requirements: formData.requirements.split(","),
            responsibilities: formData.responsibilities.split(","),
            skills: formData.skills.split(","),
            location: {
                city: formData.city,
                country: formData.country,
            },
        };
        console.log(payload);
        

        try {
            const res = await axios.post(`${JOB_POST_URL}/createJob`, payload, {
                withCredentials: true,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                }
            })
            toast.success(res?.data?.message)
            setFormData({
                title: "",
                company: "",
                description: "",
                requirements: "",
                responsibilities: "",
                jobType: "Full-time",
                workMode: "OnSite",
                experienceLevel: "Fresher",
                salaryMin: "",
                salaryMax: "",
                city: "",
                country: "",
                skills: "",
                deadline: "",
                category:""
            })
            console.log(res);

        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error.response);

        }
        if (id) {
            console.log(e);

        }
    };

    //update the job
    const updateHandler = async (e) => {
        e.preventDefault();


        try {
            const res = await axios.put(`${UPDATE_POSTEDJOB_URL}/${id}`, formData, {
                withCredentials: true,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
            console.log(res);
            
            toast.success(res?.data?.message);
        } catch (error) {
            console.log(error.message);

        } finally {
            navigate('/showPostedJobs')
        }
    }

    useEffect(() => {
        if (id && updateData) {
            //  setFormData(updateData)
        } else {
            setFormData({
                title: "",
                company: "",
                description: "",
                requirements: "",
                responsibilities: "",
                jobType: "Full-time",
                workMode: "OnSite",
                experienceLevel: "Fresher",
                salaryMin: "",
                salaryMax: "",
                city: "",
                country: "",
                skills: "",
                deadline: "",
                category:""
            })

        }



    }, [id, updateData]);


   
     
    



    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <form
                onSubmit={id ? updateHandler : handleSubmit}
                className="bg-white w-full max-w-3xl p-8 rounded-lg shadow"
            >
                <h2 className="text-2xl font-semibold mb-6">{id ? "Update Job" : "Create Job"}</h2>

                {/* Title & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        className="input w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={`${formData?.title}`}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={`${formData.company}`}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Description */}
                <textarea
                    name="description"
                    placeholder="Job Description"
                    className="input mt-4 h-28 w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={`${formData.description}`}
                    onChange={handleChange}
                    required
                />

                {/* Requirements */}
                <textarea
                    name="requirements"
                    placeholder="Requirements (comma separated)"
                    className="input mt-4 w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={`${formData.requirements}`}
                    onChange={handleChange}
                    required
                />

                {/* Responsibilities */}
                <textarea
                    name="responsibilities"
                    placeholder="Responsibilities (comma separated)"
                    className="input mt-4 w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={`${formData.responsibilities}`}
                    onChange={handleChange}
                />

                {/* Selects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <select name="jobType" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={`${formData.jobType}`} onChange={handleChange}>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Internship</option>
                        <option>Contract</option>
                    </select>

                    <select name="workMode" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={`${formData.workMode}`} onChange={handleChange}>
                        <option>OnSite</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                    </select>

                    <select
                        name="experienceLevel"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={`${formData.experienceLevel}`}
                        onChange={handleChange}
                    >
                        <option>Fresher</option>
                        <option>Junior</option>
                        <option>Mid</option>
                        <option>Senior</option>
                    </select>
                </div>

                {/* Salary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input
                        type="number"
                        name="salaryMin"
                        placeholder="Minimum Salary"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={`${formData.salaryMin}`}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="salaryMax"
                        placeholder="Maximum Salary"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={`${formData.salaryMax}`}
                        onChange={handleChange}
                    />
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={`${formData?.city}`}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={`${formData?.country || ""}`}
                        onChange={handleChange}
                    />
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input
                        type="text"
                        name="skills"
                        placeholder="Skills (comma separated)"
                        className="input mt-4 w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={`${formData?.skills}`}
                        onChange={handleChange}
                    />
                    {/* Skills */}
                    <select name="category" id="categories" className="input mt-4 w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.category}   
                    onChange={handleChange}
                    >
                        {categ?.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>


                </div>



                <button
                    type="submit"
                    className="mt-6 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                >
                    {id ? "Update" : "Create"}
                </button>
            </form>
        </div>
    );
};

export default CreateJob;
