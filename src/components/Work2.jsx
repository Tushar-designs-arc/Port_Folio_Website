import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import { projects, resolveImage } from "../data/portfolioData";

// Category labels matching the design mockups
const projectMeta = [
    {
        category: "MOVIE REVIEWING PLATFORM",
        description: "A full-stack MERN movie reviewing platform where users can browse movies, submit reviews, and rate films — powered by RESTful APIs and a responsive React interface.",
    },
    {
        category: "BOOK & RECORD MANAGEMENT SYSTEM",
        description: "MERN-based system to browse books, submit reviews, and manage library records with CRUD operations and secure RESTful endpoints.",
    },
];

export default function Work2() {
    return (
        <section id="work" className="section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="v2-section-row"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <p className="eyebrow">[04] / Selected Work</p>
                        <h2 className="section-title">Projects that made me learn.</h2>
                        <span className="v2-accent-line" />
                    </div>
                    <span className="v2-section-count">
                        {String(projects.length).padStart(2, "0")} projects
                    </span>
                </motion.div>

                {/* 2-Column Project Card List */}
                <div className="v2-w3-list">
                    {projects.map((project, index) => {
                        const serial = String(index + 1).padStart(2, "0");
                        const meta = projectMeta[index] ?? {
                            category: "FULL-STACK MERN APPLICATION",
                            description: project.description,
                        };

                        return (
                            <motion.article
                                key={project.title}
                                className="v2-w3-card"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.12 }}
                                transition={{ duration: 0.55, delay: index * 0.08 }}
                            >
                                {/* ── Left Column: Visual Preview & Dot ──────── */}
                                <div className="v2-w3-visual-wrap">
                                    <div className="v2-w3-visual">
                                        {resolveImage(project.image) ? (
                                            <img src={resolveImage(project.image)} alt={project.title} />
                                        ) : (
                                            <div className="v2-w3-visual-placeholder">
                                                <span className="font-mono text-xs uppercase tracking-widest text-[#4a5450]">
                                                    {project.title} Preview
                                                </span>
                                            </div>
                                        )}

                                        {/* Top-right arrow circle button */}
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="v2-w3-arrow-circle"
                                            aria-label={`Open ${project.title} live site`}
                                        >
                                            <ArrowUpRight size={18} />
                                        </a>
                                    </div>

                                    {/* Pagination dot under image preview */}
                                    <div className="v2-w3-dot" />
                                </div>

                                {/* ── Right Column: Content Body ─────────────── */}
                                <div className="v2-w3-body">
                                    {/* Serial number e.g. "01 /" */}
                                    <p className="v2-w3-num-line">{serial} /</p>

                                    {/* Title */}
                                    <h3 className="v2-w3-title">{project.title}</h3>

                                    {/* Subtitle / Category */}
                                    <p className="v2-w3-category">{meta.category}</p>

                                    {/* Description */}
                                    <p className="v2-w3-desc">{meta.description}</p>

                                    {/* Tech Tags */}
                                    <div className="v2-w3-tags">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="v2-w3-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="v2-w3-links">
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="v2-w3-btn-repo"
                                            id={`repo-btn-${index}`}
                                        >
                                            <LuGithub size={18} />
                                            REPOSITORY
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="v2-w3-btn-live"
                                            id={`live-btn-${index}`}
                                        >
                                            LIVE SITE <ArrowUpRight size={18} />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
