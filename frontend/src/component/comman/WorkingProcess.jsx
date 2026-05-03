import { User, FileText, Briefcase, ClipboardList } from "lucide-react";

const steps = [
  {
    icon: <User size={24} />,
    title: "Account Create",
    desc: "To create your account be confident & safely.",
  },
  {
    icon: <FileText size={24} />,
    title: "Create Resume",
    desc: "To create your account be confident & safely.",
  },
  {
    icon: <Briefcase size={24} />,
    title: "Find Jobs",
    desc: "To create your account be confident & safely.",
  },
  {
    icon: <ClipboardList size={24} />,
    title: "Apply Jobs",
    desc: "To create your account be confident & safely.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="py-12 sm:py-16">
      
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-14 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          JOBES <span className="heading-design">Working</span> Process
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          To choose your trending job dream & to make future bright.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
            
            {/* Circle */}
            <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full bg-[#5bb907ba] flex flex-col items-center justify-center text-center p-4 sm:p-6 shadow-sm">
              
              {/* Icon */}
              <div className="text-black mb-2 sm:mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-lg font-semibold text-black">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-xs sm:text-sm text-white mt-1 sm:mt-2">
                {step.desc}
              </p>
            </div>

            {/* Arrow */}
            {index !== steps.length - 1 && (
              <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 text-4xl text-indigo-800">
                →
              </div>
            )}
          </div>
        ))}

      </div>
    </section>
  );
}