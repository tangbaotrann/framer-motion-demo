import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variantsText = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const variantsSubTitle = {
  hidden: {
    opacity: 0,
    x: -120,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function LoremIpSum() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef);

  return (
    <motion.div initial="hidden" animate="visible" className="m-10">
      <article>
        <motion.h2
          variants={variantsSubTitle}
          className="text-22px text-pink-950 font-bold"
        >
          {`-->`} Section 1:
        </motion.h2>
        <motion.p variants={variantsText}>
          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
          imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
          Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
          blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
          ipsum tellus, eu tincidunt neque tincidunt a.
        </motion.p>
        <motion.h2 variants={variantsSubTitle} className="text-16px font-bold">
          Sub-header
        </motion.h2>
        <motion.p variants={variantsText}>
          In eget sodales arcu, consectetur efficitur metus. Duis efficitur
          tincidunt odio, sit amet laoreet massa fringilla eu.
        </motion.p>
        <motion.p variants={variantsText}>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </motion.p>
        <motion.p variants={variantsText}>
          Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
        </motion.p>
        <motion.p variants={variantsText}>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </motion.p>
        <motion.h2 variants={variantsSubTitle} className="text-16px font-bold">
          Sub-header
        </motion.h2>
        <motion.p variants={variantsText}>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </motion.p>
        <motion.p variants={variantsText}>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </motion.p>
        <motion.p variants={variantsText}>
          Quisque convallis ligula non magna efficitur tincidunt.
        </motion.p>
        <motion.p variants={variantsText}>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </motion.p>
        <motion.p variants={variantsText}>
          Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
        </motion.p>
        <motion.p variants={variantsText}>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </motion.p>
        <motion.h2 variants={variantsSubTitle} className="text-16px font-bold">
          Sub-header
        </motion.h2>
        <motion.p variants={variantsText}>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </motion.p>
        <motion.p variants={variantsText}>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </motion.p>
        <motion.p variants={variantsText}>
          Quisque convallis ligula non magna efficitur tincidunt.
        </motion.p>
      </article>

      <br />
      <br />

      <article
      // ref={sectionRef}
      // style={{
      //   transform: isInView ? "none" : "translateX(-200px)",
      //   opacity: isInView ? 1 : 0,
      //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      // }}
      // className={`${isInView && "-translate-x-[200px] opacity-1"}`}
      >
        <motion.h2
          variants={variantsSubTitle}
          className="text-22px text-pink-950 font-bold"
          // ref={sectionRef}
          // style={{
          //   transform: isInView ? "none" : "translateX(-200px)",
          //   opacity: isInView ? 1 : 0,
          //   transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          // }}
        >
          {`-->`} Section 2
        </motion.h2>
        <motion.p variants={variantsText}>
          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
          imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
          Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
          blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
          ipsum tellus, eu tincidunt neque tincidunt a.
        </motion.p>
        <motion.h2 variants={variantsSubTitle} className="text-16px font-bold">
          Sub-header
        </motion.h2>
        <motion.p variants={variantsText}>
          In eget sodales arcu, consectetur efficitur metus. Duis efficitur
          tincidunt odio, sit amet laoreet massa fringilla eu.
        </motion.p>
        <motion.p variants={variantsText}>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </motion.p>
        <motion.p variants={variantsText}>
          Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
        </motion.p>
        <motion.p variants={variantsText}>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </motion.p>
        <motion.h2 variants={variantsSubTitle} className="text-16px font-bold">
          Sub-header
        </motion.h2>
        <motion.p variants={variantsText}>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </motion.p>
        <motion.p variants={variantsText}>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </motion.p>
        <motion.p variants={variantsText}>
          Quisque convallis ligula non magna efficitur tincidunt.
        </motion.p>
        <motion.p variants={variantsText}>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </motion.p>
        <motion.p variants={variantsText}>
          Sed sem nisi, luctus consequat ligula in, congue sodales nisl.
        </motion.p>
        <motion.p variants={variantsText}>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </motion.p>
        <motion.h2 variants={variantsSubTitle} className="text-16px font-bold">
          Sub-header
        </motion.h2>
        <motion.p variants={variantsText}>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </motion.p>
        <motion.p variants={variantsText}>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </motion.p>
        <motion.p variants={variantsText}>
          Quisque convallis ligula non magna efficitur tincidunt.
        </motion.p>
      </article>
    </motion.div>
  );
}

export default LoremIpSum;
