import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Send } from "lucide-react";
import { IoIosSend } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { profile } from "../data/portfolioData";

const initial = {
    name: "", email: "", subject: "", message: ""
};

const Contact2 = () => {
    const formRef = useRef(null);

    const [form, setForm] = useState(initial);
    const [state, setState] = useState("idle"); // idle | loading | success | error

    const update = (e) => {
        setForm((previous) => ({
            ...previous,
            [e.target.name]: e.target.value,
        }));

        if (state !== "idle") {
            setState("idle");
        }
    };

    const submit = async (e) => {
        e.preventDefault();

        if (!formRef.current) return;

        setState("loading");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setState("success");
            setForm(initial);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setState("error");
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container grid gap-12 lg:grid-cols-[1fr_1.2fr]">

                {/* Left: Contact information */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="eyebrow">[07] / Contact</p>
                    <h2 className="section-title">
                        Let's work together.
                    </h2>
                    <span className="v2-accent-line" />

                    <p className="muted mt-7 max-w-lg leading-relaxed text-[1.05rem]">
                        Open to internship opportunities, collaborations & interesting projects. Send me a message and I’ll get back to you as soon as possible.
                    </p>

                    <div className="links">
                        <a
                            href={`mailto:${profile.email}`}
                            className="inline-flex w-fit items-center gap-4 mt-7 text-base underline focus-ring"
                        >
                            {profile.email}
                            <ArrowUpRight size={21} className="text-[#c7ea18]" />
                        </a>

                        <span className="focus-ring mt-4 inline-flex items-center gap-4 text-base">
                            <FiPhone size={20} className="text-[#c7ea18]" />
                            {profile.phone}
                        </span>
                        <span className="focus-ring mt-4 inline-flex items-center gap-4 text-base">
                            <HiOutlineLocationMarker size={20} className="text-[#c7ea18]" />
                            {profile.location}
                        </span>
                    </div>

                    <div className="mt-8 flex gap-5">
                        <a
                            href={profile.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btns"
                        >
                            <LuGithub size={18} />
                            GitHub
                        </a>
                        <a
                            href={profile.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btns"
                        >
                            <LuLinkedin size={18} />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

                {/* Right: Contact form */}
                <motion.form
                    ref={formRef}
                    id="contact-form"
                    onSubmit={submit}
                    className="surface grid gap-5 p-6 sm:p-8"
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="grid gap-5 sm:grid-cols-2">

                        <label className="grid gap-2 text-md font-normal text-[#e5e7e6]">
                            Name

                            <input
                                required
                                minLength={2}
                                maxLength={80}
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={update}
                                placeholder="Tushar Saini"
                                autoComplete="name"
                                className="v2-input focus-ring"
                            />
                        </label>

                        <label className="grid gap-2 text-md font-normal text-[#e5e7e6]">
                            Email

                            <input
                                required
                                type="email"
                                maxLength={254}
                                name="email"
                                value={form.email}
                                onChange={update}
                                placeholder="you@example.com"
                                autoComplete="email"
                                className="v2-input focus-ring"
                            />
                        </label>

                    </div>

                    <label className="grid gap-2 text-md font-normal text-[#e5e7e6]">
                        Subject

                        <input
                            required
                            minLength={2}
                            maxLength={140}
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={update}
                            placeholder="Project collaboration"
                            className="v2-input focus-ring"
                        />
                    </label>

                    <label className="grid gap-2 text-md font-normal text-[#e5e7e6]">
                        Message

                        <textarea
                            required
                            minLength={10}
                            maxLength={3000}
                            rows={5}
                            name="message"
                            value={form.message}
                            onChange={update}
                            placeholder="Tell me about your project…"
                            className="v2-input focus-ring"
                        />
                    </label>

                    {/* Honeypot */}
                    <input
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        name="website"
                        value={form.website}
                        onChange={update}
                        className="hidden"
                    />

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <button type="submit"
                            disabled={state === "loading"}
                            className="button button-primary focus-ring w-fit disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {state === "loading" ? (
                                "Sending…"
                            ) : (
                                <>
                                    Send message <Send size={20} />
                                </>
                            )}
                        </button>

                        <p
                            aria-live="polite"
                            className={
                                state === "error"
                                    ? "text-md font-medium text-red-400"
                                    : "text-md font-medium text-green-400"
                            }
                        >
                            {state === "success" && "Thanks — your message has been sent!"}
                            {state === "error" && "Unable to send. Please email me directly."}
                        </p>

                    </div>
                </motion.form>
            </div>
        </section>
    );
}

export default Contact2;