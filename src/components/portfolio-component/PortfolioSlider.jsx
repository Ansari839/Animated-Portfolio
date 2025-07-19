"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import PortfolioItem from "./PortfolioItem";
import portfolioItems from "../../lib/data/portfolioItems"; 

const PortfolioSlider = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className="h-[600vh] relative" ref={ref}>
      <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
          {portfolioItems.map((item) => (
            <PortfolioItem item={item} key={item.id} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioSlider;
