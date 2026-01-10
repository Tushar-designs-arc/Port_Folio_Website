import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Profile_Image from "../images/image_1.jpg";

const rise = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
    return (
        <section id="home" className="container flex min-h-[calc(100svh-5rem)] flex-col justify-center py-12 md:py-20">
            <motion.div
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.12 } } }}
                className="w-full max-w-7xl mx-auto"
            >
                {/* Hero Flex Container: Left Content & Right Profile Image */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12 lg:gap-16 xl:gap-20">

                    {/* Left Column */}
                    <div className="flex-1 min-w-0">
                        {/* Availability badge */}
                        <motion.p
                            variants={rise}
                            className="eyebrow mb-6 flex items-center gap-2"
                        >
                            <span className="v2-pulse-dot" />
                            Available for opportunities
                        </motion.p>

                        {/* Big name */}
                        <motion.h1
                            variants={rise}
                            className="font-bold leading-[0.85] tracking-[-0.075em] text-white mb-6"
                            style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
                        >
                            <span className="block">TUSHAR</span>
                            <span className="block text-[#c7ea18]">SAINI</span>
                        </motion.h1>

                        {/* Profile Image - Shown under title on small screens (<768px) */}
                        <motion.div variants={rise} className="block md:hidden my-6 flex justify-center">
                            <img
                                src={Profile_Image}
                                alt="Portrait of Tushar Saini"
                                className="h-48 w-48 sm:h-56 sm:w-56 rounded-full border-4 border-[#c7ea18] object-cover shadow-[0_0_30px_rgba(199,234,24,0.2)]"
                            />
                        </motion.div>

                        {/* Main Role Heading */}
                        <motion.h2
                            variants={rise}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 leading-[1.1]"
                        >
                            MERN Stack Developer
                        </motion.h2>

                        {/* Description Paragraph */}
                        <motion.p
                            variants={rise}
                            className="max-w-2xl text-base sm:text-lg text-[#a0a6a4] leading-relaxed mb-8"
                        >
                            Building full-stack web applications with React, Node.js, Express, and MongoDB. I focus on creating well structured APIs, responsive interfaces, and practical products that solve real problems.
                        </motion.p>

                        {/* Rounded Pill CTA Buttons */}
                        <motion.div
                            variants={rise}
                            className="flex flex-wrap items-center gap-4"
                        >
                            <a
                                href="#work"
                                className="inline-flex items-center gap-2 rounded-full bg-[#c7ea18] v2-w3-btn-view px-7 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all hover:bg-[#d5f822] hover:scale-[1.03] focus-ring"
                            >
                                VIEW WORK <ArrowDownRight size={16} />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 rounded-full border border-[#2d3330] bg-[#121514] v2-w3-btn-info px-7 py-3.5 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-all hover:border-[#c7ea18] hover:text-[#c7ea18] hover:scale-[1.03] focus-ring"
                            >
                                GET IN TOUCH
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Image - Shown on desktop (>=768px) with ample spacing */}
                    <motion.div
                        variants={rise}
                        className="hidden md:flex flex-shrink-0 items-center justify-center"
                    >
                        <img
                            src={Profile_Image}
                            alt="Portrait of Tushar Saini"
                            className="h-64 w-64 md:h-72 md:w-72 lg:h-88 lg:w-88 xl:h-[26rem] xl:w-[26rem] rounded-full border-4 border-[#c7ea18] object-cover shadow-[0_0_45px_rgba(199,234,24,0.18)]"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section >
    );
}
