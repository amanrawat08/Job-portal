import steps from "../../data/steps";
const JobSteps = () => {
  return (
    <div className="w-full py-16">
       <div className="text-center mb-12">
          <h1 className="heading">JOBES Working  
 <span className="heading-design"> Process</span> </h1>
          <p className="subTitle">To choose your trending job dream & to make future bright.

</p>
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 relative">
        {/* Horizontal Line */}
        <div className="absolute top-10 left-0 w-full h-[2px] bg-gray-200 z-0" />

        {steps.map((step, index) => (
          <div key={step.id} className="relative z-10 text-center">
            {/* Circle */}
            <div className="flex justify-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center border-2 font-semibold text-xlborder-gray-300 text-gray-400 bg-white"
                
              >
                {String(step.id).padStart(2, "0")}
              </div>
            </div>

            {/* Title */}
            <h3 className="mt-6 text-lg font-semibold text-gray-900">
              {step.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-500 max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSteps;
