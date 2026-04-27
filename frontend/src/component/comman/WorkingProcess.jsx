import { User, FileText, Briefcase, ClipboardList } from "lucide-react";

const steps = [
  {
    icon: <User size={28} />,
    title: "Account Create",
    desc: "To create your account be confident & safely.",
  },
  {
    icon: <FileText size={28} />,
    title: "Create Resume",
    desc: "To create your account be confident & safely.",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Find Jobs",
    desc: "To create your account be confident & safely.",
  },
  {
    icon: <ClipboardList size={28} />,
    title: "Apply Jobs",
    desc: "To create your account be confident & safely.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="  py-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          JOBES {" "}
          <span className="heading-design">Working </span>Process
        </h2>
        <p className="text-gray-500 mt-3">
          To choose your trending job dream & to make future bright.
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative">
            
            {/* Circle */}
            <div className="w-56 h-56 rounded-full bg-[#5bb907ba] flex flex-col items-center justify-center text-center p-6 shadow-sm">
              
              {/* Icon */}
              <div className="text-[#000] mb-4">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-[#000]">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-[#fff] mt-2">
                {step.desc}
              </p>
            </div>

            {/* Arrow (simple curved effect) */}
            {index !== steps.length - 1 && (
              <div className="hidden lg:block absolute -right-10 top-1/2 transform -translate-y-1/2 text-[#312e81] text-5xl">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}