"use client"

import { useEffect } from "react";
import AboutContent from "@/components/About/AboutContent";

export default function About() {
    useEffect(() => {
        document.title = "About Us - Saar Biotech"
    }, []);

    return (
        <>
            <AboutContent />
        </>
    )
}