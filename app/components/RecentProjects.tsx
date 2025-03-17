import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
const RecentProjects = () => {
  return (
    <div className="py-20 bg-[#13162d] mt-5" id="projects">
      <h1 className="heading text-white">
        A small collection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>

      {/* Projects Grid */}
      <div className="w-full h-screen flex items-center justify-center mx-auto mt-5">

        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center  sm:w-[520px] w-[80vw] text-white"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center align-middle sm:w-[700px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/jipamba.png" alt="jipamba-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 absolute bottom-0"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex 
                    justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Check Live Sites</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>

              </div>
            </PinContainer>


          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
