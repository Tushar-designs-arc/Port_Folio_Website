import { motion } from 'framer-motion';

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

/* Right-Side's Stats */
const stats = [
    { label: 'Focus', value: 'Full-Stack Web Apps.' },
    { label: 'Status', value: 'Open to Internships' },
    { label: 'Based in', value: 'Alwar, Rajasthan' }
];


const About2 = () => {
    return (
        <section id='about' className='section'>
            <div className='container'>

                <Reveal>
                    <div className='md:w-64 lg:w-72 flex-shrink-0'>
                        <p className='eyebrow'>[01] / About</p>
                        <h2 className='section-title'>About.</h2>
                        <span className='v2-accent-line' />
                    </div>
                </Reveal>

                <div className="flex flex-col gap-10 pt-12 lg:flex-row lg:items-center lg:justify-between">
                    <div className='flex-1 space-y-6 max-w-4xl'>
                        <Reveal delay={0.08}>
                            <p className='text-3xl leading-[2.3rem] text-white'>
                                I'm a Computer Science undergraduate at {' '}
                                <span className='text-[#c7ea18]'>Manipal University Jaipur</span>,
                                building fluent, full-stack products with the MERN stack.
                            </p>
                        </Reveal>

                        <Reveal delay={0.14}>
                            <p className='text-lg leading-relaxed text-[#8b9290]'>
                                I enjoy turning ideas into reliable web experiences — from responsive React interfaces to clean REST APIs and database-backed applications. Each project helps me strengthen my engineering fundamentals.
                            </p>
                        </Reveal>
                    </div>

                    {/* Stats grid */}
                    <div className="w-full border-t border-[#242827] pt-8 lg:w-[16rem] lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                        <Reveal delay={0.2}>
                            <dl className='grid gap-x-8 gap-y-6 pb-[3rem]'>
                                {stats.map(({ label, value }) => (
                                    <div key={label} className='v2-stat'>
                                        <dt>{label}</dt>
                                        <dd>{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About2;