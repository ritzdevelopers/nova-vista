"use client";

import { motion, useReducedMotion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export default function MotionSection({ children, className, ...props }) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.section
            className={className}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ amount: 0.2, once: false }}
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.section>
    );
}
