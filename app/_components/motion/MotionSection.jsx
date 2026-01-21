"use client";

import { motion } from "framer-motion";
import useMotionSettings from "./useMotionSettings";

const variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export default function MotionSection({ children, className, ...props }) {
    const motionSettings = useMotionSettings();

    return (
        <motion.section
            className={className}
            initial={motionSettings.initial}
            animate={motionSettings.animate}
            whileInView={motionSettings.whileInView}
            viewport={motionSettings.viewport}
            variants={variants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.section>
    );
}
