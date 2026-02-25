import { FaLocationCrosshairs } from "react-icons/fa6";


const LeftDetails = ({ location, company, title, jobType, salaryMin, salaryMax, createAt ,description ,responsibilities ,requirements}) => {

    const dateStr = createAt?.split("T")[0];
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    });

   // console.log(requirements);
    
    

    return (
        <div>
            <div className='flex justify-between gap-14'>
                <div className='company flex gap-6 shrink-0'>
                    <div className=''>
                        <div className='bg-green-700 text-white text-3xl font-bold rounded-full px-4 py-2 font-serif text-center '>
                            A

                        </div>
                    </div>
                    <div>
                        <div className='text-2xl font-semibold text-gray-800'>{title}</div>
                        <div className='text-gray-700'>{company}</div>
                    </div>
                </div>

                <div className='locations flex flex-wrap text-center items-center'>
                    <div className='w-[40%] flex items-center justify-center gap-3'>
                        <FaLocationCrosshairs className="text-[#00315d]" />
                        <span>
                           <span className="font-semibold ">Location:</span> &nbsp;  {location?.city}, {location?.country}

                        </span>
                    </div>
                    <div className='w-[40%] flex items-center justify-center gap-3'>
                        <FaLocationCrosshairs className="text-[#00315d]" />

                        <span>
                            <span className="font-semibold">Job Type:</span> &nbsp;
                            {jobType}
                        </span>
                    </div>
                    <div className='w-[40%] flex items-center justify-center gap-3'>
                        <FaLocationCrosshairs className="text-[#00315d]" />
                        <span>

                        <span className="font-semibold">Salary:</span> &nbsp;
                         {salaryMin}-{salaryMax}
                        </span>
                    </div>
                    <div className='w-[40%] flex items-center justify-center gap-3'>
                        <FaLocationCrosshairs className="text-[#00315d]" />
                        <span>
                            <span className="font-semibold">Job Posted:</span> &nbsp;
                            {formattedDate} &nbsp;
                        </span>
                    </div>

                </div>


            </div>

            <div>
                <div className="mt-10 jobdisCription">
                   <b>Job Description:</b> {description}
                </div>
                <div className="mt-5 jobResponsibility">
                   <b>Job requirements:</b> 
                    
                        {
                            requirements?.map((data , index)=>{
                                return <span key={index}> {data},&nbsp;</span>
                            })
                        }
                   
                </div>
                <div className="mt-5 jobResponsibility">
                   <b>Job Responsibility:</b> 
                   <ul>
                        {
                            responsibilities?.map((data , index)=>{
                                return <li key={index}>{index+1}) &nbsp; {data}</li>
                            })
                        }
                   </ul>
                </div>
            </div>
        </div>
    )
}

export default LeftDetails
