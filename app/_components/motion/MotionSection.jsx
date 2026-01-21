"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export default function MotionSection({ children, className, ...props }) {
    const reduceMotion = useReducedMotion();
    const [canAnimate, setCanAnimate] = useState(false);

    useEffect(() => {
        if (reduceMotion) {
            setCanAnimate(false);
            return;
        }

        if (typeof window !== "undefined" && "IntersectionObserver" in window) {
            setCanAnimate(true);
        } else {
            setCanAnimate(false);
        }
    }, [reduceMotion]);

    return (
        <motion.section
            className={className}
            initial={false}
            whileInView={canAnimate ? "show" : undefined}
            viewport={{ amount: 0.2, once: false }}
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.section>
    );
}
