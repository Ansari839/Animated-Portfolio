"use client";
import { useRef } from "react";
import { useScroll, useInView, motion } from "framer-motion";
import BiographySection from "../../components/about-component/BiographySection";
import SkillsSection from "../../components/about-component/SkillSection";
import ExperienceSection from "../../components/about-component/ExperienceSection";
import Brain from "../../components/about-component/brain";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          <BiographySection />
          <SkillsSection inViewRef={skillRef} isInView={isSkillInView} />
          <ExperienceSection inViewRef={experienceRef} isInView={isExperienceInView} />
        </div>

        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
