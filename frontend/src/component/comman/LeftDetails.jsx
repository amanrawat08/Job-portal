import { FaLocationCrosshairs } from "react-icons/fa6";


const LeftDetails = ({ location, company, title, jobType, salaryMin, salaryMax, createAt, description, responsibilities, requirements }) => {

    const dateStr = createAt?.split("T")[0];
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
    });

    // console.log(requirements);



    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 ">

                                <div className='flex justify-between gap-10 flex-wrap lg:flex-nowrap'>

                                    {/* Company Section */}
                                    <div className='company flex gap-5 items-center shrink-0'>
                                        <div>
                                            <div className='bg-gradient-to-br from-green-600 to-green-800 text-white text-2xl font-bold rounded-full w-14 h-14 flex items-center justify-center shadow-md'>
                                                A
                                            </div>
                                        </div>

                                        <div>
                                            <div className='text-2xl font-bold text-gray-800 leading-tight'>{title}</div>
                                            <div className='text-gray-600 text-sm mt-1'>{company}</div>
                                        </div>
                                    </div>

                                    {/* Job Info Grid */}
                                    <div className='locations flex flex-wrap gap-y-4 gap-x-6 items-center text-sm text-gray-700'>

                                        <div className='w-[45%] flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg'>
                                            <FaLocationCrosshairs className="text-[#00315d]" />
                                            <span>
                                                <span className="font-semibold text-gray-800">Location:</span> {location?.city}, {location?.country}
                                            </span>
                                        </div>

                                        <div className='w-[45%] flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg'>
                                            <FaLocationCrosshairs className="text-[#00315d]" />
                                            <span>
                                                <span className="font-semibold text-gray-800">Job Type:</span> {jobType}
                                            </span>
                                        </div>

                                        <div className='w-[45%] flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg'>
                                            <FaLocationCrosshairs className="text-[#00315d]" />
                                            <span>
                                                <span className="font-semibold text-gray-800">Salary:</span> {salaryMin}-{salaryMax}
                                            </span>
                                        </div>

                                        <div className='w-[45%] flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg'>
                                            <FaLocationCrosshairs className="text-[#00315d]" />
                                            <span>
                                                <span className="font-semibold text-gray-800">Job Posted:</span> {formattedDate}
                                            </span>
                                        </div>

                                    </div>
            </div>

            {/* Divider */}
            <div className="border-t my-6"></div>

            {/* Job Description */}
            <div>
                <div className="jobdisCription text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">Job Description:</span>
                    <p className="mt-2 text-sm">{description}</p>
                </div>

                {/* Requirements */}
                <div className="mt-6 jobResponsibility">
                    <span className="font-semibold text-gray-900">Job Requirements:</span>
                    <div className="mt-2 flex flex-wrap gap-2">
                        {
                            requirements?.map((data, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                                >
                                    {data}
                                </span>
                            ))
                        }
                    </div>
                </div>

                {/* Responsibilities */}
                <div className="mt-6 jobResponsibility">
                    <span className="font-semibold text-gray-900">Job Responsibility:</span>
                    <ul className="mt-3 space-y-2 text-sm text-gray-700">
                        {
                            responsibilities?.map((data, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="font-semibold text-[#00315d]">{index + 1})</span>
                                    <span>{data}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div >
    )
}

export default LeftDetails
