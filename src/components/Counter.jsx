import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";


export default function Counter({maxNum}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, maxNum, { duration: 2 });
      return animation.stop; // Cleanup the animation on unmount
    }
  }, [isInView, count]);

  return (
    
      <motion.div
        ref={ref}
        className="text-red-600 "
      >
        {rounded}
      </motion.div>
      
    
  );
}
