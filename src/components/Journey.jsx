import { motion } from "framer-motion";

const Reveal = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay }}
    >
        {children}
    </motion.div>
);

const experience = [
    {
        title: "TIPS-G Alwar Software Developer Trainee Program",
        period: "2024 – 2026 · Project-based development",
        points: [
            "Built full-stack applications using React, Node.js, Express, and MongoDB",
            "Developed RESTful APIs and implemented CRUD-based functionality",
            "Strengthened problem-solving and DSA skills through practical development",
        ],
        active: true,
    },
    {
        title: "Open to Internships",
        period: "2024 – Present · Actively Seeking",
        points: [
            "Collaborated on web development projects in online environments",
            "Built responsive interfaces with a focus on usability and clean UI",
            "Worked on real-world web projects and practical application features",
        ],
        active: true,
    },
];

const education = [
    {
        title: "BCA · Software Development",
        place: "Manipal University Jaipur",
        period: "2024 – 2027",
        active: true,
    },
    {
        title: "Master's Degree (Planned)",
        place: "Advancing specialisation in software engineering",
        period: "TBD",
        active: false,
    },
];

export default function Journey() {
    return (
        <section id="journey" className="section">
            <div className="container">
                {/* Heading */}
                <Reveal>
                    <p className="eyebrow">[04] / Journey</p>
                    <h2 className="section-title">Experience &amp; Education.</h2>
                    <span className="v2-accent-line" />
                </Reveal>

                {/* Two-column grid */}
                <div className="mt-14 grid gap-14 md:grid-cols-2">

                    {/* Experience */}
                    <Reveal delay={0.08}>
                        <p className="eyebrow mb-6">Experience</p>
                        <div className="space-y-8">
                            {experience.map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className={`v2-timeline-dot${item.active ? "" : " dim"}`} />
                                        <span className="flex-1 w-px bg-[#242827]" />
                                    </div>
                                    <div className="pb-6">
                                        <h3 className="font-semibold text-[#e5e7e6] text-[1.4rem]">{item.title}</h3>
                                        <p className="mt-1 text-md text-[#8b9290] font-mono">{item.period}</p>
                                        {item.points && (
                                            <ul className="mt-3 space-y-1 text-[0.95rem] text-[#8b9290] list-disc list-inside">
                                                {item.points.map((pt) => (
                                                    <li key={pt}>{pt}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    {/* Education */}
                    <Reveal delay={0.14}>
                        <p className="eyebrow mb-6">Education</p>
                        <div className="space-y-8">
                            {education.map((item, i) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="flex flex-col items-center gap-2">
                                        <span className={`v2-timeline-dot${item.active ? "" : " dim"}`} />
                                        {i < education.length - 1 && (
                                            <span className="flex-1 w-px bg-[#242827]" />
                                        )}
                                    </div>
                                    <div className="pb-6 leading-[25px]">
                                        <h3 className="font-semibold text-[#e5e7e6] text-[1.2rem]">{item.title}</h3>
                                        <p className="mt-1 text-sm text-[#c7ea18] text-[0.95rem]">{item.place}</p>
                                        <p className="mt-0.5 text-xs text-[#8b9290] font-mono text-[0.75rem]">{item.period}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
