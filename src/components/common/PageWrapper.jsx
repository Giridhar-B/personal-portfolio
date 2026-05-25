import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      style={{
        width: "100%",
      }}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <div
        style={{
          width: "100%",
          padding: "20px 24px 60px",
          boxSizing: "border-box",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default PageWrapper;