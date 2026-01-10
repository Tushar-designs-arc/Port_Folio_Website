// import { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { navItems, profile } from "../data/portfolioData";

// const Navbar2 = () => {
//     const [open, setOpen] = useState(false);
//     const [activeItem, setActiveItem] = useState(navItems[0]);
//     const [lockedItem, setLockedItem] = useState(null);
//     const [scrolled, setScrolled] = useState(false);

//     /* Track scroll for shadow */
//     useEffect(() => {
//         const onScroll = () => setScrolled(window.scrollY > 20);
//         window.addEventListener("scroll", onScroll, { passive: true });
//         return () => window.removeEventListener("scroll", onScroll);
//     }, []);

//     /* Close on Escape & lock body scroll */
//     useEffect(() => {
//         const close = (e) => e.key === "Escape" && setOpen(false);
//         window.addEventListener("keydown", close);
//         document.body.style.overflow = open ? "hidden" : "";
//         return () => {
//             window.removeEventListener("keydown", close);
//             document.body.style.overflow = "";
//         };
//     }, [open]);

//     /* Intersection-observer section tracking */
//     useEffect(() => {
//         const sections = navItems
//             .map((item) => document.getElementById(item.toLowerCase()))
//             .filter(Boolean);

//         const observer = new IntersectionObserver(
//             (entries) => {
//                 const visible = entries
//                     .filter((e) => e.isIntersecting)
//                     .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
//                 if (!visible) return;
//                 const found = navItems.find(
//                     (item) => item.toLowerCase() === visible.target.id
//                 );
//                 if (lockedItem && found !== lockedItem) return;
//                 setActiveItem(found);
//                 if (found === lockedItem) setLockedItem(null);
//             },
//             { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.5] }
//         );
//         sections.forEach((s) => observer.observe(s));
//         return () => observer.disconnect();
//     }, [lockedItem]);

//     const handleNav = (e, item) => {
//         setActiveItem(item);
//         setLockedItem(item);
//         if (!open) return;
//         e.preventDefault();
//         setOpen(false);
//         requestAnimationFrame(() =>
//             requestAnimationFrame(() =>
//                 document
//                     .getElementById(item.toLowerCase())
//                     ?.scrollIntoView({ behavior: "smooth", block: "start" })
//             )
//         );
//     };

//     const Links = () => (
//         <>
//             {navItems.map((item) => {
//                 const isActive = activeItem === item;
//                 return (
//                     <a
//                         key={item}
//                         href={"#" + item.toLowerCase()}
//                         onClick={(e) => handleNav(e, item)}
//                         className={`focus-ring relative py-2 text-sm transition-colors hover:text-[#c7ea18]
//               after:absolute after:bottom-0 after:left-0 after:h-px after:w-full
//               after:origin-left after:bg-[#c7ea18] after:transition-transform after:duration-300
//               ${isActive
//                                 ? "text-[#c7ea18] after:scale-x-100"
//                                 : "text-[#b9c0bd] after:scale-x-0 tracking-wider"
//                             }`}
//                     >
//                         {item}
//                     </a>
//                 );
//             })}
//         </>
//     );

//     return (
//         <header
//             className={`sticky top-0 z-40 border-b border-[#242827] bg-[#0b0e0f]/90 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.5)]" : ""
//                 }`}
//         >
//             <nav
//                 className="container flex h-20 items-center justify-between"
//                 aria-label="Main navigation"
//             >
//                 {/* Logo */}
//                 <a href="#home" className="focus-ring text-[1.7rem] font-semibold tracking-tight">
//                     {profile.firstName}
//                     <span className="text-[#c7ea18]">.</span>
//                 </a>

//                 {/* Desktop links */}
//                 <div className="hidden items-center gap-8 md:flex">
//                     <Links />
//                     <a
//                         href="#contact"
//                         className="button button-primary focus-ring !min-h-0 !px-4 !py-2 text-sm"
//                     >
//                         Let's talk
//                     </a>
//                 </div>

//                 {/* Mobile hamburger */}
//                 <button
//                     aria-label={open ? "Close menu" : "Open menu"}
//                     aria-expanded={open}
//                     onClick={() => setOpen(!open)}
//                     className="focus-ring p-2 md:hidden"
//                 >
//                     {open ? <X size={20} /> : <Menu size={20} />}
//                 </button>
//             </nav>

//             {/* Mobile drawer */}
//             <AnimatePresence>
//                 {open && (
//                     <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="v2-mobile-drawer md:hidden"
//                     >
//                         <div className="container flex flex-col gap-5 py-6">
//                             <Links />
//                             <a
//                                 href="#contact"
//                                 onClick={() => setOpen(false)}
//                                 className="button button-primary focus-ring"
//                             >
//                                 Let's talk
//                             </a>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </header>
//     );
// };

// export default Navbar2;


import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data/portfolioData";

const Navbar2 = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(navItems[0]);
    const [scrolled, setScrolled] = useState(false);

    /* Track scroll for navbar shadow */
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    /* Close mobile menu on Escape + lock body scroll */
    useEffect(() => {
        const close = (e) => {
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", close);

        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            window.removeEventListener("keydown", close);
            document.body.style.overflow = "";
        };
    }, [open]);

    /*
     * ScrollSpy
     *
     * Instead of locking the active item after a click,
     * determine the section closest to the navbar.
     */
    useEffect(() => {
        const sectionElements = navItems
            .map((item) => document.getElementById(item.toLowerCase()))
            .filter(Boolean);

        if (!sectionElements.length) return;

        const updateActiveSection = () => {
            const navbarHeight = 80;
            const scrollPosition = window.scrollY + navbarHeight + 20;

            let currentSection = sectionElements[0];

            for (const section of sectionElements) {
                if (section.offsetTop <= scrollPosition) {
                    currentSection = section;
                } else {
                    break;
                }
            }

            const foundItem = navItems.find(
                (item) =>
                    item.toLowerCase() === currentSection.id.toLowerCase()
            );

            if (foundItem) {
                setActiveItem(foundItem);
            }
        };

        updateActiveSection();

        window.addEventListener("scroll", updateActiveSection, {
            passive: true,
        });

        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    const handleNav = (e, item) => {
        e.preventDefault();

        setActiveItem(item);
        setOpen(false);

        const target = document.getElementById(item.toLowerCase());

        if (!target) return;

        const navbarHeight = 80;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    };

    const handleHome = (e) => {
        e.preventDefault();
        setActiveItem(null);
        setOpen(false);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const Links = () => (
        <>
            {navItems.map((item) => {
                const isActive = activeItem === item;

                return (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => handleNav(e, item)}
                        className={`
                            focus-ring
                            relative
                            py-2
                            text-sm
                            transition-colors
                            hover:text-[#c7ea18]

                            after:absolute
                            after:bottom-0
                            after:left-0
                            after:h-px
                            after:w-full
                            after:origin-left
                            after:bg-[#c7ea18]
                            after:transition-transform
                            after:duration-300

                            ${isActive
                                ? "text-[#c7ea18] after:scale-x-100"
                                : "text-[#b9c0bd] after:scale-x-0 tracking-wider"
                            }
                        `}
                    >
                        {item}
                    </a>
                );
            })}
        </>
    );

    return (
        <header className={`sticky top-0 z-40 border-b border-[#242827] bg-[#0b0e0f]/90 backdrop-blur transition-shadow duration-300 ${scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.5)]" : ""} `}>
            <nav
                className="container flex h-20 items-center justify-between"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <a
                    href="#home"
                    onClick={handleHome}
                    className="focus-ring text-[1.7rem] font-semibold tracking-tight"
                >
                    {profile.firstName}
                    <span className="text-[#c7ea18]">.</span>
                </a>

                {/* Desktop links (visible on lg screens >= 1024px) */}
                <div className="hidden items-center gap-4 lg:gap-6 xl:gap-8 lg:flex">
                    <Links />

                    <a
                        href="#contact"
                        onClick={(e) => handleNav(e, "Contact")}
                        className="button button-primary focus-ring !min-h-0 !px-4 !py-2 text-xs lg:text-sm"
                    >
                        Let's talk
                    </a>
                </div>

                {/* Mobile hamburger (visible on screens < 1024px) */}
                <button
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                    className="focus-ring p-2 lg:hidden"
                >
                    {open ? (
                        <X size={20} />
                    ) : (
                        <Menu size={20} />
                    )}
                </button>
            </nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="v2-mobile-drawer lg:hidden"
                    >
                        <div className="container flex flex-col gap-5 py-6">
                            <Links />

                            <a
                                href="#contact"
                                onClick={(e) => handleNav(e, "Contact")}
                                className="button button-primary focus-ring"
                            >
                                Let's talk
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar2;