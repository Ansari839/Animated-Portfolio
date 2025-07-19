import { motion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import { experienceList } from "../../lib/data/about&Skill";

const ExperienceSection = ({ inViewRef, isInView }) => (
  <div className="flex flex-col gap-12 justify-center pb-48" ref={inViewRef}>
    <motion.h1
      initial={{ x: "-300px" }}
      animate={isInView ? { x: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="font-bold text-2xl"
    >
      EXPERIENCE
    </motion.h1>

    <motion.div
      initial={{ x: "-300px" }}
      animate={isInView ? { x: 0 } : {}}
    >
      {experienceList.map((item, i) => (
        <ExperienceItem {...item} key={i} />
      ))}
    </motion.div>
  </div>
);

export default ExperienceSection;
