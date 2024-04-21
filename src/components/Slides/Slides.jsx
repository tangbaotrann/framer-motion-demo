import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import slideImages from "../../assets";

// const variantsSlideImages = {
//   hidden: {
//     opacity: 0,
//     x: -120,
//   },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.3,
//     },
//   },
// };

function Slides() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <div className="px-10">
      <div className="cursor-grab overflow-hidden">
        <motion.div
          initial="hidden"
          animate="visible"
          drag="x"
          className="flex items-center bg-[lightblue]"
        >
          {slideImages.map((slideImage, index) => {
            return (
              <motion.div
                className="min-h-[20rem] w-[40rem] p-[40px]"
                key={index}
                ref={sectionRef}
                style={{
                  transform: isInView ? "none" : "translateX(-120px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
                }}
              >
                <motion.img
                  loading="lazy"
                  src={slideImage}
                  alt="img-slide"
                  className="w-[100%] h-[100%] rounded-[2rem]"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Slides;
