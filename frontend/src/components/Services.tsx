/* eslint-disable react/no-unescaped-entities */
import { Code, Rocket, ShieldCheck, PenTool, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    { title: "Product Development", icon: <Code size={44} strokeWidth={1} /> },
    { title: "Digital Marketing", icon: <Rocket size={44} strokeWidth={1} /> },
    {
      title: "Security System",
      icon: <ShieldCheck size={44} strokeWidth={1} />,
    },
    { title: "UI/UX Designing", icon: <PenTool size={44} strokeWidth={1} /> },
    { title: "Data Analysis", icon: <BarChart3 size={44} strokeWidth={1} /> },
  ];

  return (
    <section className="pt-[120px] pb-[90px] ">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="services-heading">Services We're Offering</h3>
        <h2 className="text-5xl font-semibold text-gray-900 mb-[50px] mt-2">
          We Provide our Clients <br /> Best IT Services
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group cursor-pointer relative overflow-hidden h-full p-[25px] bg-white bg-cover bg-center bg-no-repeat text-center min-h-[280px] shadow-lg transition-all duration-300 ease-in-out border-t-[6px] border-[#ffaa17] 
    before:absolute before:bottom-[-100%] before:left-0 before:w-full before:h-full before:bg-[#222429] before:transition-all before:duration-500 before:ease-in-out hover:before:bottom-0"
            >
              {/* Icon with hover fill effect */}
              <div className="relative z-10 mb-4 flex justify-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center  bg-[#f4f5f8] rounded-full p-4 transition-all duration-300 ease-in-out group-hover:bg-[#ffaa17] group-hover:text-[#222429]">
                  {service.icon}
                </div>
              </div>
              <h3 className="relative px-4 z-10 text-lg font-semibold text-gray-900 group-hover:text-white">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-600 text-sm mt-2 group-hover:text-gray-300">
                Providing the solutions for tech business
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
