import { motion } from "framer-motion";
import { interests } from "../data/portfolioData";

export default function Interests() {
    return (
        <section id="interests" className="section">
            <div className="container">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="eyebrow">[05] / Interests</p>
                    <h2 className="section-title">Interests.</h2>
                    <span className="v2-accent-line" />
                </motion.div>

                {/* Cards grid */}
                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {interests.map((item, i) => {
                        const [title, ...rest] = item.split("—");
                        return (
                            <motion.div
                                key={i}
                                className="v2-interest-card"
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                            >
                                <span className="flex-shrink-0 font-mono text-md text-[#c7ea18]">
                                    0{i + 1}
                                </span>
                                <div>
                                    {title && (
                                        <p className="font-medium text-xl text-[#e5e7e6] mb-1">
                                            {title.trim()}
                                        </p>
                                    )}
                                    {rest.length > 0 && (
                                        <p className="text-md text-[#8b9290]">{rest.join("—").trim()}</p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
