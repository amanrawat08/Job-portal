
import JobSearchBar from "./JobSearchBar ";

function Herosection({ keyword, setKeyword, location, setLocation ,filterJobs}){
    return <div className=" bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.12)_0%,rgba(59,130,246,0)_45%),linear-gradient(135deg,#f0f9ff_0%,#f0fff4_45%,#ffffff_100%)]">
        <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-16">
                <div className=" flex items-center justify-center gap-14">
                        <div className="w-[57%]">
                            <h5 className="inline-block px-[18px] py-[6px] text-[0.82rem] font-semibold tracking-[0.08em] text-[#047857] bg-[rgba(34,197,94,0.12)] rounded-full uppercase mb-[20px]">Ready to Find Your Dream Job?</h5>
                            <h1 className="text-4xl text font-bold">Take the next step in your career journey.</h1>
                            <p className="text-[14px] mt-2 text-gray-700">Explore opportunities that match your skills and passions, and land the job you've always wanted with JobsPortal.</p>
                           {/* <JobSearch/>*/} 
                        <JobSearchBar keyword={keyword} location = {location} setKeyword={setKeyword} setLocation={setLocation} filterJobs={filterJobs}/>
                            
                        </div>
                        <div className="w-[43%]">
                            <img src="hero-image.png" alt="" />
                        </div>
                </div>
        </div>
    </div>
}

export default Herosection;