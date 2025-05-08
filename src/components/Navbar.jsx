import logo from "../assets/vestruu-logo-white.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-48" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/silviustoian/">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/silviu-stoian-858a0b179/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/vestruu">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
