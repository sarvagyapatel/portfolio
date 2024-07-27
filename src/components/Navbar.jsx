import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import sarvagyaPatelLogo  from "../assets/sarvagyaPatelLogo.png"

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
        <div className="flex flex-shrink-0 items-center ">
            <img className="w-10 mx-2" src={sarvagyaPatelLogo} alt="Logo" />
        </div>
        <div className="flex items-center justify-between gap-4 m-8 text-2xl text-white">
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}

export default Navbar