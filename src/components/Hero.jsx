import { HERO_CONTENT } from "../constants";
// import sarvagyaPatelProfile from "../assets/sarvagyaPatelProfile.png";
import sarvagyaPatelProfile1 from "../assets/sarvagyaPatelProfile1.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

function Hero() {

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Sarvagya Patel
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
             variants={container(1.25)}
             initial="hidden"
             animate="visible"
             className="flex justify-center">
            <img
              className="rounded-full"
              src={sarvagyaPatelProfile1}
              alt="Profile"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
