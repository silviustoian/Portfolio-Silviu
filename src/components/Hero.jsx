import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/vestruuProfile.png";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Silviu Stoian
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-[#45E8FA] via-[#FCF7F8] to-[#45E8FA]
             bg-clip-text text-4xl tracking-tight text-transparent"
            >
              FrontEnd Developer
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-8 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
            initial={{x:100, opacity:0}}
            animate={{x:0, opacity:1}} 
            transition= {{duration:0.8, delay:1.2}}
            src={profilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
