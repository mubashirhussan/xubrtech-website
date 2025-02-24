/* eslint-disable react/no-unescaped-entities */
import { Code, Rocket, ShieldCheck, PenTool, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Product Development",
      icon: <Code size={44} strokeWidth={1} />,
      description:
        "We help businesses build scalable products from ideation to launch.",
    },
    {
      title: "Digital Marketing",
      icon: <Rocket size={44} strokeWidth={1} />,
      description:
        "Our digital strategies boost brand visibility, engagement across all platforms.",
    },
    {
      title: "Security System",
      icon: <ShieldCheck size={44} strokeWidth={1} />,
      description:
        "We provide advanced security solutions to protect your business from cyber threats.",
    },
    {
      title: "UI/UX Designing",
      icon: <PenTool size={44} strokeWidth={1} />,
      description:
        "Crafting seamless and engaging user experiences for digital products and platforms.",
    },
    {
      title: "Data Analysis",
      icon: <BarChart3 size={44} strokeWidth={1} />,
      description:
        "Turning raw data into actionable insights to drive better business decisions.",
    },
  ];

  return (
    <section className="pb-8 pt-16 sm:pb-10 sm:pt-20 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center ">
        <h3 className="services-heading">Services We're Offering</h3>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-10 sm:mb-14 ">
          We Provide Our Clients <br className="hidden sm:block" /> Best IT
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden h-full p-6 bg-white text-center shadow-lg border-t-[6px] border-[#ffaa17] transition-all duration-300 ease-in-out 
        before:absolute before:left-0 before:w-full before:h-full before:bg-[#222429] before:transition-all before:duration-500 
        before:bottom-0 md:before:bottom-[-100%] md:hover:before:bottom-0"
            >
              {/* Icon Section */}
              <div className="relative z-10 mb-4 flex justify-center">
                <div
                  className="w-[80px] h-[80px] flex items-center justify-center  rounded-full p-4 transition-all duration-300 
          bg-[#ffaa17] text-[#222429] md:bg-[#f4f5f8] md:text-black md:group-hover:bg-[#ffaa17] md:group-hover:text-[#222429]"
                >
                  {service.icon}
                </div>
              </div>

              {/* Service Title */}
              <h3 className="relative px-4 z-10 text-lg font-semibold text-white md:text-gray-900 md:group-hover:text-white text-center">
                {service.title.split(" ").map((word, index) => (
                  <span key={index}>
                    {word}
                    {index !== service.title.split(" ").length - 1 && <br />}
                  </span>
                ))}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-300 text-sm mt-2 md:text-gray-600 md:group-hover:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
