import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { FaGithub, FaGitlab, FaLinkedin, FaFileAlt } from "react-icons/fa";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const LinkSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("show");
  }, [controls]);

  const links = [
    { icon: FaGithub, url: "https://github.com/phamandy300" },
    { icon: FaGitlab, url: "https://gitlab.com/andypham300" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/andy-pham-03454a25a/" },
    { icon: FaFileAlt, url: "https://docs.google.com/document/d/1jtHrR6I2SAyKwVki-V72-jijKVCqNiiw/edit?usp=sharing&ouid=104942288104625259642&rtpof=true&sd=true" },
  ];

  return (
    <div className="md:m-12 md:px-48 flex flex-col gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          },
        }}
        className="flex justify-around"
      >
        {links.map(({ icon: Icon, url }, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl md:text-6xl text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            <Icon />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(LinkSection, "Links");
