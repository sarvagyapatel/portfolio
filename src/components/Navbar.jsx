import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import sarvagyaPatelLogo  from "../assets/sarvagyaPatelLogo.png"

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
        <div className="flex flex-shrink-0 items-center ">
            <img className="w-24 mx-2" src={sarvagyaPatelLogo} alt="Logo" />
        </div>
        <div className="flex items-center justify-between gap-4 m-8 text-2xl text-white">
            <a href="https://www.linkedin.com/in/sarvagya-patel-b0575918b/"><FaLinkedin className="hover:cursor-pointer"/></a>
            <a href="https://github.com/sarvagyapatel"><FaGithub className="hover:cursor-pointer"/></a>
            <a href="https://x.com/Sarvagya__Patel"><FaSquareXTwitter className="hover:cursor-pointer"/></a>
        </div>
    </nav>
  )
}

export default Navbar