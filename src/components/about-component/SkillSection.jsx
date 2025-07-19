import { motion } from "framer-motion";
import { skills } from "../../lib/data/about&Skill";

const SkillsSection = ({ inViewRef, isInView }) => (
  <div className="flex flex-col gap-12 justify-center" ref={inViewRef}>
    <motion.h1
      initial={{ x: "-300px" }}
      animate={isInView ? { x: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="font-bold text-2xl"
    >
      SKILLS
    </motion.h1>

    <motion.div
      initial={{ x: "-300px" }}
      animate={isInView ? { x: 0 } : {}}
      className="flex gap-4 flex-wrap"
    >
      {skills.map((skill) => (
        <div
          key={skill}
          className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
        >
          {skill}
        </div>
      ))}
    </motion.div>
  </div>
);

export default SkillsSection;
