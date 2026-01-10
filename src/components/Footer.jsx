import { profile } from "../data/portfolioData";

export default function Footer() {
    return (
        <footer className="border-t border-[#242827]">
            <div className="container flex flex-col gap-4 py-8 text-sm text-[#8b9290] sm:flex-row sm:items-center sm:justify-between">
                <p>
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="text-[#e5e7e6]">{profile.name}</span>
                    {" "}— Designed &amp; built with integrity.
                </p>

                <div className="flex items-center gap-5">
                    <a
                        href={profile.social.github}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring font-mono text-xs uppercase tracking-widest hover:text-[#c7ea18] transition-colors"
                        aria-label="GitHub"
                    >
                        GitHub
                    </a>
                    <span aria-hidden="true" className="text-[#242827]">|</span>
                    <a
                        href={profile.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="focus-ring font-mono text-xs uppercase tracking-widest hover:text-[#c7ea18] transition-colors"
                        aria-label="LinkedIn"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
