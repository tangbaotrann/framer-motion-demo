import { motion } from "framer-motion";
import LoremIpSum from "../../components/LoremIpSum/LoremIpSum";

function GalleriesPage() {
  return (
    <motion.div initial="hidden" animate="visible" className="">
      <h1>Galleries page</h1>

      <LoremIpSum />
    </motion.div>
  );
}

export default GalleriesPage;
