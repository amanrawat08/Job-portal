function Search_PostBtn() {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto  px-8 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10">
          <button className="flex-1 text-start flex items-center justify-between bg-[#5bb907] px-14 py-5 rounded-full text-white">
            <div>
              <h1 className="font-bold text-2xl ">Search For Job</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="w-14">
                <img src="search-job-icon.png" alt="" />
            </div>
          </button>
          <button className="flex-1 text-start bg-[#032f59] px-14 py-5 rounded-full flex items-center justify-between text-white">
            <div>
              <h1 className="font-bold text-2xl">Post a job</h1>
              <p>
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="w-14">
                <img src="postjob.png" alt="" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Search_PostBtn;
