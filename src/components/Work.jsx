import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe } from "lucide-react";
import { projects } from "../data/portfolioData";

export default function Work() {
    return (
        <section id="work" className="section">
            <div className="container">
                {/* Heading row */}
                <motion.div
                    className="v2-section-row"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <p className="eyebrow">[03] / Selected Work</p>
                        <h2 className="section-title">Projects that made me learn.</h2>
                        <span className="v2-accent-line" />
                    </div>
                    <span className="v2-section-count">
                        {String(projects.length).padStart(2, "0")} projects
                    </span>
                </motion.div>

                {/* Project list */}
                <div className="v2-projects-list">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            className="v2-project-card"
                            initial={{ opacity: 0, y: 22 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            {/* Visual panel */}
                            <div className="v2-project-visual" aria-hidden="true">
                                <div className="v2-project-grid-bg" />
                                <span className="v2-project-index">0{index + 1}</span>
                                <span className="v2-project-badge">MERN</span>
                            </div>

                            {/* Content panel */}
                            <div className="v2-project-body">
                                <div className="v2-project-topline">
                                    <span className="eyebrow">Project 0{index + 1}</span>
                                    <ArrowUpRight size={18} className="v2-project-arrow" />
                                </div>

                                <h3>{project.title}</h3>

                                <p className="muted text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech tags */}
                                <div className="v2-tag-list">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="v2-project-links">
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="v2-btn v2-btn-primary focus-ring"
                                    >
                                        <Code2 size={14} />
                                        GitHub
                                        <ArrowUpRight size={12} />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="v2-btn v2-btn-secondary focus-ring"
                                    >
                                        <Globe size={14} />
                                        Live
                                        <ArrowUpRight size={12} />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
