

"use client";
import { motion } from "framer-motion";
import PortfolioHero from "../../components/portfolio-component/PortfolioHero";
import PortfolioSlider from "../../components/portfolio-component/PortfolioSlider";
import PortfolioCTA from "../../components/portfolio-component/PortfolioCTA";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <PortfolioHero />
      <PortfolioSlider />
      <PortfolioCTA />
    </motion.div>
  );
};

export default PortfolioPage;
