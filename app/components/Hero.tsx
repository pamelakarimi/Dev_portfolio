// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "./ui/MagicButton";
// import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";



// const Hero = () => {
//   return (
//     <div className="relative 
//     pb-20 pt-36
//     ">
//       <div>
//         <Spotlight className="top-10 left-10 h-[300px] w-[300px]" fill="red" />
//         <Spotlight className="top-20 left-40 h-[300px] w-[300px]" fill="purple" />
//         <Spotlight className="top-40 left-80 h-[300px] w-[300px]" fill="blue" />

//         {/* <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
//         <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple"/>
//         <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" /> */}
//       </div>

//       {/**
//        *  UI: grid
//        *  change bg color to bg-black-100 and reduce grid color from
//        *  0.2 to 0.03
//        */}
//       <div
//         className="h-screen w-full dark:bg-black-100 bg-black dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
//        relative flex items-center justify-center">
//         {/* Radial gradient for the container to give a faded look */}
//         <div>
//           {/* change the bg to bg-black-100, so it matches the bg color and will blend in */}
//           <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
//         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

//         </div>

//         <div className="flex justify-center relative my-20 z-10">
//           <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//             <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
//               Dynamic Web Magic with Next.js
//             </p>

//             {/**
//            *  Link: https://ui.aceternity.com/components/text-generate-effect
//            *
//            *  change md:text-6xl, add more responsive code
//            */}
//             <TextGenerateEffect
//               words="Transforming Concepts into Seamless User Experiences"
//               className="text-center text-[40px] md:text-5xl lg:text-6xl"
//             />

//             <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
//               Hi! I&apos;m Pamela, a Next.js Developer based in Kenya.
//             </p>

//             <a href="#about">
//               <MagicButton
//                 title="Show my work"
//                 icon={<FaLocationArrow />}
//                 position="right"
//               />
//             </a>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  return (
    // <div className="w-screen  relative pb-20 pt-36 bg-black">
    <div className="w-screen relative overflow-hidden pb-10 pt-1 bg-[#13162d]">

      {/* Ensure Spotlights are inside a relative parent */}
      <div className="absolute  inset-0 w-screen overflow-hidden pointer-events-none">
        <Spotlight className="top-10 left-10" fill="black" />
        <Spotlight className="top-20 right-20" fill="purple" />
        <Spotlight className="bottom-10 left-40" fill="black" />

      </div>

      <div
        className="h-screen w-full flex items-center justify-center relative z-10">

        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Hi! I&apos;m Pamela, a Frontend Developer based in Kenya.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/cv.pdf" download>
              <MagicButton
                title="Download My Resume"
                icon={<FaDownload />}
                position="right"
              />

            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
