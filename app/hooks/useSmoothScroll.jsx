'use client'

import {useEffect} from "react";
import Lenis from "@studio-freight/lenis";

export default function useSmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.0,
            smooth: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);
}