import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const listsMenu = [
  {
    title: "Galleries",
    link: "/galleries",
  },
  {
    title: "Galleries1",
    link: "/galleries1",
  },
];

const variantsLogo = {
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

const variantsMenu = {
  hidden: {
    opacity: 0,
    x: 120,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function Header() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      className="px-10 py-3 bg-pink-50 w-full flex items-center justify-between"
    >
      <motion.h1 variants={variantsLogo} className="text-[24px] font-bold">
        <Link to="/home" className="text-black">
          Logo
        </Link>
      </motion.h1>

      <motion.ul variants={variantsMenu} className="flex items-center gap-4">
        {listsMenu.map((menuItem) => (
          <motion.li
            key={menuItem.title}
            // when hovered
            whileHover={{
              scale: 1.1,
            }}
            // when clicked
            whileTap={{
              scale: 0.9,
            }}
          >
            <Link to={menuItem.link}>{menuItem.title}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.header>
  );
}

export default Header;
