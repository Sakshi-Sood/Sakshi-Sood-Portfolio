import { useEffect, useMemo, useRef, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Navbar = ({ data }) => {
    const navItems = data.navigation?.items || [];
    const brandName = data.navigation?.brandName || data.name;
    const brandInitials = data.navigation?.brandInitials || data.initials || "";
    const headerRef = useRef(null);
    const lastScrollYRef = useRef(0);
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [scrollProgress, setScrollProgress] = useState(0);
    const [hasEntered, setHasEntered] = useState(false);
    const [isNavHidden, setIsNavHidden] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme || "dark";
        setTheme(initialTheme);
        document.documentElement.setAttribute("data-theme", initialTheme);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            const lastScrollY = lastScrollYRef.current;
            const delta = Math.abs(scrollTop - lastScrollY);

            // Keep the navbar visible when the mobile menu is open.
            if (isOpen) {
                setIsNavHidden(false);
            } else if (scrollTop <= 10) {
                // Always visible at the very top.
                setIsNavHidden(false);
            } else if (delta >= 10) {
                // Avoid flicker for tiny scroll movements.
                const isScrollingDown = scrollTop > lastScrollY;
                // Only start hiding after some scroll so it feels stable.
                if (isScrollingDown && scrollTop > 120) {
                    setIsNavHidden(true);
                } else {
                    setIsNavHidden(false);
                }
            }

            lastScrollYRef.current = scrollTop;

            setIsScrolled(scrollTop > 50);
            setScrollProgress(Math.max(0, Math.min(100, progress)));
        };

        // Initialize scroll state refs.
        lastScrollYRef.current = window.scrollY;
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) setIsNavHidden(false);
    }, [isOpen]);

    useEffect(() => {
        const raf = requestAnimationFrame(() => setHasEntered(true));
        return () => cancelAnimationFrame(raf);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!isOpen) return;
            if (!headerRef.current) return;
            if (!headerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);

        if (!sections.length) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
                    );

                if (visible[0]?.target?.id) {
                    setActiveSection(visible[0].target.id);
                }
            },
            {
                root: null,
                threshold: [0.15, 0.35, 0.55],
                rootMargin: "-20% 0px -60% 0px",
            },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("theme", nextTheme);
    };

    const headerClasses = useMemo(() => {
        const base =
            "fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 transform-gpu";

        const visibility = !hasEntered
            ? "-translate-y-full"
            : isOpen
                ? "translate-y-0"
                : isNavHidden
                    ? "-translate-y-full"
                    : "translate-y-0";

        if (!isScrolled) {
            if (theme === "light") {
                return `${base} ${visibility} bg-white/40 backdrop-blur-sm border-slate-200/50`;
            }

            return `${base} ${visibility} bg-slate-900/30 backdrop-blur-sm border-transparent`;
        }

        if (theme === "light") {
            return `${base} ${visibility} bg-white/70 backdrop-blur-md border-slate-200/60`;
        }

        return `${base} ${visibility} bg-slate-900/80 backdrop-blur-md border-white/10`;
    }, [hasEntered, isNavHidden, isOpen, isScrolled, theme]);

    const scrollToSection = (id) => {
        if (id === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const el = document.getElementById(id);
        if (!el) return;

        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
    };

    const onNavClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        scrollToSection(id);
    };

    return (
        <>
            {/* Scroll progress indicator */}
            <div
                className="fixed top-0 left-0 h-[2px] bg-violet-500 z-[60] transition-all"
                style={{ width: `${scrollProgress}%` }}
                aria-hidden="true"
            />

            <header ref={headerRef} className={headerClasses}>
                <nav className="section-shell flex h-[68px] items-center justify-between">
                    <a
                        href="#home"
                        onClick={(e) => onNavClick(e, "home")}
                        className="group inline-flex items-center gap-2 rounded-full px-2 py-1 transition duration-300"
                    >
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 text-[11px] font-black tracking-wider text-violet-300 shadow-[0_0_18px_rgba(129,140,248,0.25)] transition duration-300 group-hover:scale-105 group-hover:border-violet-300/60 group-hover:text-violet-200">
                            {brandInitials}
                        </span>
                        <span className="text-lg font-extrabold tracking-[0.08em] bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(129,140,248,0.28)] transition duration-300">
                            {brandName}
                        </span>
                    </a>

                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            type="button"
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                            className="rounded-md border border-white/10 p-2 text-slate-200 transition duration-300 hover:border-violet-400 hover:text-violet-400 hover:rotate-12 hover:scale-110 hover:-translate-y-[2px]"
                        >
                            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                            className="rounded-md p-2 text-slate-200 transition duration-300 hover:text-violet-400 hover:scale-110 hover:-translate-y-[2px]"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    <div className="hidden items-center gap-6 md:flex">
                        <ul className="flex items-center gap-8">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <motion.li
                                        key={item.id}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => onNavClick(e, item.id)}
                                            aria-current={isActive ? "page" : undefined}
                                            className={
                                                `relative text-sm font-medium transition duration-300 px-2 py-1 ` +
                                                (isActive
                                                    ? "text-violet-400"
                                                    : "text-slate-300 hover:text-violet-400")
                                            }
                                        >
                                            {item.label}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="activeSection"
                                                    className="absolute -bottom-1 left-0 h-[2px] w-full bg-violet-500 rounded-full shadow-[0_0_8px_rgba(129,140,248,0.8)]"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 380,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                        <button
                            type="button"
                            aria-label="Toggle theme"
                            onClick={toggleTheme}
                            className="rounded-md border border-white/10 p-2 text-slate-200 transition duration-300 hover:border-violet-400 hover:text-violet-400 hover:rotate-12 hover:scale-110 hover:-translate-y-[2px]"
                        >
                            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile dropdown */}
                <div
                    className={
                        `md:hidden overflow-hidden origin-top transition-all duration-300 ` +
                        (isOpen
                            ? "max-h-80 opacity-100 scale-y-100"
                            : "max-h-0 opacity-0 scale-y-0")
                    }
                >
                    <div className="border-t border-white/10 bg-slate-950/90 backdrop-blur-md">
                        <ul className="section-shell flex flex-col py-3">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => onNavClick(e, item.id)}
                                            className={
                                                "block rounded-lg px-2 py-2 text-sm font-medium transition duration-300 " +
                                                (isActive
                                                    ? "text-violet-400"
                                                    : "text-slate-200 hover:text-violet-400")
                                            }
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </header>

            {/* Spacer so content isn't hidden under fixed navbar */}
            <div className="h-16" aria-hidden="true" />
        </>
    );
};

Navbar.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        initials: PropTypes.string,
        navigation: PropTypes.shape({
            brandName: PropTypes.string,
            brandInitials: PropTypes.string,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    id: PropTypes.string.isRequired,
                }),
            ),
        }),
    }).isRequired,
};

export default Navbar;
