import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  image,
  url,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <div className='relative w-full md:w-3/5'>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt='project_image'
            className='w-full h-auto object-cover md:rounded-3xl'
          />
        </a>
      </div>

      <div className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? "text-left md:text-left" : "text-left md:text-right"}`}>
        <h3 className='text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight'>{name}</h3>
        <p className='mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl'>{description}</p>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [showMore, setShowMore] = useState(false);

  const handleSeeMore = () => {
    setShowMore(!showMore);
    setVisibleProjects(showMore ? 3 : portfolio.length);
  };

  return (
    <div className='text-center md:text-left md:px-20 lg:px-40'>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className='mt-10 md:mt-20 flex flex-col gap-10 md:gap-20'>
        {portfolio.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      {portfolio.length > 3 && (
        <div className='mt-8 text-center'>
          <button
            onClick={handleSeeMore}
            className='px-6 py-3 rounded-md transition-all duration-300 border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary'
          >
            {showMore ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
