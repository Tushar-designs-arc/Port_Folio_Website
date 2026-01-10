import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import certImg from '../images/Screenshot.png';
import certImg2 from '../images/3.jfif'
import { resolveImage } from '../data/portfolioData';

const certifs = [
    {
        sr: "01",
        name: "Full-Stack Web Development",
        desc: "Self-paced / Project-based",
        year: "2025",
        image: certImg,
        description:
            "Completed a comprehensive self-paced Full-Stack Web Development program covering the MERN stack (MongoDB, Express.js, React.js, Node.js). The curriculum included building RESTful APIs, designing responsive UIs with Tailwind CSS, and deploying full-stack applications. Earned upon finishing multiple hands-on projects including a movie review platform and a library management system.",
    },
    {
        sr: "02",
        name: "Data Structures & Algorithms",
        desc: "Coursework",
        year: "2025",
        image: certImg2,
        description:
            "Completed university coursework in Data Structures & Algorithms as part of the Computer Science undergraduate program at Manipal University Jaipur. Topics covered included arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming — with practical implementation in C++.",
    },
];

/* ─── Animation variants ─────────────────────────────────────── */

// Row: zoom-in from slightly scaled-down + subtle bounce spring
const rowVariants = {
    hidden: { opacity: 0, scale: 0.88, y: 14 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 18,
            mass: 0.9,
            delay: i * 0.13,
        },
    }),
};

// Modal backdrop
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

// Modal panel: springs up with a bounce
const panelVariants = {
    hidden: { opacity: 0, scale: 0.82, y: 40 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 280, damping: 22, mass: 0.85 },
    },
    exit: {
        opacity: 0,
        scale: 0.88,
        y: 24,
        transition: { duration: 0.18, ease: "easeIn" },
    },
};

export default function Certificates() {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (!selected) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelected(null);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selected]);

    return (
        <section id="certificates" className="section">
            <div className="container">
                {/* ── Heading ─────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="eyebrow">[06] / Certificates</p>
                    <h2 className="section-title">Certificates.</h2>
                    <span className="v2-accent-line" />
                </motion.div>

                {/* ── Certificate rows ─────────────────────────── */}
                <div className="mt-12">
                    {certifs.map((c, i) => (
                        <motion.div
                            key={c.sr}
                            className="v2-cert-row group cursor-pointer flex items-end"
                            custom={i}
                            variants={rowVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{
                                scale: 1.018,
                                x: 4,
                                transition: { type: "spring", stiffness: 350, damping: 20 },
                            }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelected(c)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View certificate: ${c.name}`}
                            onKeyDown={(e) => e.key === "Enter" && setSelected(c)}
                        >
                            {/* Left: number + name */}
                            <div className="flex items-center gap-5 min-w-0">
                                <span className="flex-shrink-0 font-mono text-base text-[#c7ea18]">
                                    {c.sr}
                                </span>
                                <span className="text-xl font-medium text-[#e5e7e6] truncate group-hover:text-white transition-colors">
                                    {c.name}
                                </span>
                                {/* Hover indicator pill */}
                                <motion.span
                                    className="hidden sm:inline-flex items-center gap-1 text-[0.8rem] font-mono uppercase tracking-widest text-[#c7ea18] opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-2"
                                >
                                    <FaAward size={18} /> View
                                </motion.span>
                            </div>

                            {/* Right: desc + year */}
                            <div className="flex flex-shrink-0 items-center gap-6 text-sm">
                                <span className="hidden sm:block text-[#8b9290]">{c.desc}</span>
                                <span className="font-mono text-[#c7ea18]">{c.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* ── Detail modal ─────────────────────────────────── */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="v2-cert-backdrop"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setSelected(null)}
                        aria-modal="true"
                        role="dialog"
                        aria-label={`Certificate detail: ${selected.name}`}
                        aria-labelledby="certificate-modal-title"
                    >
                        {/* Panel — stop propagation so clicks inside don't close */}
                        <motion.div
                            className="v2-cert-panel"
                            variants={panelVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                className="v2-cert-close"
                                onClick={() => setSelected(null)}
                                aria-label="Close"
                            >
                                <IoClose size={18} />
                            </button>

                            {/* Serial + title */}
                            <div className="v2-cert-modal-header">
                                <span className="v2-cert-modal-sr">{selected.sr} /</span>
                                <h2 id="certificate-modal-title" className="v2-cert-modal-title">{selected.name}</h2>
                                <p className="v2-cert-modal-meta">
                                    {selected.desc} &nbsp;·&nbsp; {selected.year}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="v2-cert-modal-desc">{selected.description}</p>

                            {/* Certificate image */}
                            <div className="v2-cert-img-wrap">
                                {resolveImage(selected.image) ? (
                                    <img
                                        src={resolveImage(selected.image)}
                                        alt={`${selected.name} certificate`}
                                        className="v2-cert-img"
                                        draggable={false}
                                    />
                                ) : (
                                    /* Placeholder shown until you add real images */
                                    <div className="v2-cert-img-placeholder">
                                        <FaAward size={48} className="text-[#c7ea18] opacity-30 mb-3" />
                                        <p className="text-[#8b9290] text-sm font-mono">
                                            Drop your certificate image into<br />
                                            <span className="text-[#c7ea18]">src/assets/certs/</span><br />
                                            and link it in Certificates2.jsx
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Optional: external link button */}
                            {selected.link && (
                                <div className="mt-6 flex justify-center">
                                    <a
                                        href={selected.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="v2-w3-btn-live"
                                    >
                                        View Online <ExternalLink size={14} />
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
