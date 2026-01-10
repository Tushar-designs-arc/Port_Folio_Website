import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolioData";


// -------------------------------------------------

// Marquee
const marqueeItems = [
    "#MERN",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "JavaScript",
    "C++",
    "Git",
    "GitHub",
    "#Building",
    "HTML",
    "CSS",
    "Postman",
    "#Fullstack",
];

// Duplicate for seamless loop
const track = [...marqueeItems, ...marqueeItems];

// -------------------------------------------------

// Build a map for quick lookup: group name -> items
const groupMap = Object.fromEntries(skillGroups.map(([g, items]) => [g, items]));

// Define the exact layout rows from the screenshot
// Each row is an array of group names to render side-by-side
const layoutRows = [
    ["Languages"],                    // Row 1: full width
    ["Frontend", "Backend"],          // Row 2: two columns
    ["Databases", "Tools & Platforms"], // Row 3: two columns
    ["Concepts"],                     // Row 4: full width
];


const Skills2 = () => {
    return (
        <section id="skills" className="section">
            {/* Marquee ticker */}
            <div className="border-y border-[#242827] py-4 mb-0">
                <div className="v2-marquee-wrap">
                    <div className="v2-marquee-track">
                        {track.map((item, i) => (
                            <span
                                key={`${item}-${i}`}
                                className={
                                    item.startsWith("#")
                                        ? "text-[#c7ea18] font-mono font-medium select-none"
                                        : "text-[#8b9290] font-mono font-medium select-none"
                                }
                            >
                                {item} <span className="text-[#c7ea18] text-xl tilt pl-7">/</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mt-12">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="eyebrow">[02] / Skills &amp; Stack</p>
                    <h2 className="section-title">Skills / Stack.</h2>
                    <span className="v2-accent-line" />
                </motion.div>

                {/* Skill category cards — custom layout matching screenshot */}
                <div className="mt-12 flex flex-col gap-4">
                    {layoutRows.map((row, rowIdx) => (
                        <div
                            key={rowIdx}
                            className={`grid gap-4 ${row.length === 2 ? "sm:grid-cols-2" : "grid-cols-1"}`}
                        >
                            {row.map((group, colIdx) => {
                                const items = groupMap[group] ?? [];
                                const cardIndex = layoutRows
                                    .slice(0, rowIdx)
                                    .reduce((acc, r) => acc + r.length, 0) + colIdx;

                                return (
                                    <motion.div
                                        key={group}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.15 }}
                                        transition={{ duration: 0.45, delay: cardIndex * 0.06 }}
                                        className="v2-skill-card"
                                    >
                                        {/* Green blur glow */}
                                        <div className="v2-skill-card-glow" />

                                        {/* Header row: category name + count */}
                                        <div className="v2-skill-card-header">
                                            <h3 className="v2-skill-card-title">{group}</h3>
                                            <span className="v2-skill-card-count">
                                                {String(items.length).padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* Tags */}
                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {items.map((item) => (
                                                <span key={item} className="v2-skill-pill">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills2;