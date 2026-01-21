"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

const DEFAULT_VIEWPORT = { amount: 0.2, once: false };

export default function useMotionSettings(options = {}) {
    const reduceMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);
    const maxWidth = options.maxWidth ?? 767;
    const viewport = useMemo(
        () => ({ ...DEFAULT_VIEWPORT, ...(options.viewport || {}) }),
        [options.viewport]
    );

    useEffect(() => {
        if (typeof window === "undefined") return undefined;

        const mediaQuery = window.matchMedia(`(max-width: ${maxWidth}px)`);
        const update = () => setIsMobile(mediaQuery.matches);
        update();

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", update);
            return () => mediaQuery.removeEventListener("change", update);
        }

        mediaQuery.addListener(update);
        return () => mediaQuery.removeListener(update);
    }, [maxWidth]);

    if (reduceMotion) {
        return {
            initial: "show",
            animate: "show",
            whileInView: undefined,
            viewport: undefined,
        };
    }

    if (isMobile) {
        return {
            initial: "hidden",
            animate: "show",
            whileInView: undefined,
            viewport: undefined,
        };
    }

    return {
        initial: "hidden",
        animate: undefined,
        whileInView: "show",
        viewport,
    };
}
