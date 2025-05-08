import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaWordpress } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
// import { RiReactjsLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className="text-7xl text-[#e5532f]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-7xl text-[#2e53e5]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-7xl text-[#39bef8]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAngular className="text-7xl text-[#d70230]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-white-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaWordpress className="text-7xl text-white-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
