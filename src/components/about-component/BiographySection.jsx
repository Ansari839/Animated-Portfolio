import Image from "next/image";
import { motion } from "framer-motion";

const BiographySection = () => (
  <div className="flex flex-col gap-12 justify-center">
    <Image
      src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
      width={112}
      height={112}
      className="w-28 h-28 rounded-full object-cover"
    />
    <h1 className="font-bold text-2xl">ABOUT ME</h1>
    <p className="text-lg">
      I’m a passionate Full-Stack Developer and DevOps enthusiast with a love for building smart, scalable digital solutions. From designing responsive frontends to automating backend workflows, I thrive at the intersection of creativity and code.

    </p>
    <span className="italic">Currently diving deep into AI Agents, I’m on a mission to craft tools that reduce manual work and maximize impact. When I'm not coding, you’ll find me exploring new technologies or sketching out ideas for the next big thing..</span>

    <motion.svg
      initial={{ opacity: 0.2, y: 0 }}
      animate={{ opacity: 1, y: "10px" }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      viewBox="0 0 24 24"
      width={50}
      height={50}
    >
      {/* ...SVG paths... */}
    </motion.svg>
  </div>
);

export default BiographySection;
