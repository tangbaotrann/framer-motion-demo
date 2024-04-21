import { motion } from "framer-motion";
import LoremIpSum from "../../components/LoremIpSum/LoremIpSum";
import Header from "../../components/Header/Header";
import Slides from "../../components/Slides/Slides";

const variantsTextTitle = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function HomePage() {
  return (
    <motion.div initial="hidden" animate="visible" className="">
      <Header />

      <motion.h1
        variants={variantsTextTitle}
        className="text-red-400 text-[24px] font-bold text-center mt-10 mb-10"
      >
        Welcome to Frame motion with reactjs
      </motion.h1>

      <LoremIpSum />

      {/* Slides */}
      <Slides />
    </motion.div>
  );
}

export default HomePage;
