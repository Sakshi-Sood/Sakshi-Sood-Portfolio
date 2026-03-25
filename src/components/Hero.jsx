import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { staggerContainer, fadeUp, fadeUpScale } from "../utils/animations";

const Hero = ({ data }) => {
    const titles = data.title ? data.title.split("|").map((t) => t.trim()) : [];
    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        if (titles.length <= 1) return;
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <section
            id="home"
            className="hero hero-section relative flex min-h-[calc(100vh-68px)] items-center py-8 sm:py-10 lg:py-14"
        >
            {/* Hero Content */}
            <div className="container w-full">
                <div className="hero-content w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
                    {/* Left Side - Text Content */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="hero-text flex-1 flex flex-col justify-center space-y-5"
                    >
                        <motion.div
                            variants={fadeUp}
                            className="hero-pill rounded-full px-4 py-1.5 text-[10px] sm:text-xs tracking-[0.12em] w-fit uppercase font-semibold"
                        >
                            Welcome to my portfolio
                        </motion.div>

                        <motion.h1
                            variants={fadeUpScale}
                            className="theme-text hero-name text-5xl font-extrabold sm:text-6xl lg:text-7xl tracking-tight bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(129,140,248,0.2)] pb-1"
                        >
                            {data.name}
                        </motion.h1>

                        <motion.div
                            variants={fadeUp}
                            className="flex h-8 sm:h-10 items-center overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={titleIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="text-xl font-bold tracking-wide text-violet-400 sm:text-2xl"
                                >
                                    {titles[titleIndex]}
                                </motion.h2>
                            </AnimatePresence>
                        </motion.div>

                        <motion.p
                            variants={fadeUp}
                            className="theme-muted max-w-xl text-base leading-relaxed sm:text-lg"
                        >
                            {data.intro}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="primary-btn rounded-xl px-7 py-3 font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(129,140,248,0.3)]"
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                href="/cv"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="secondary-btn rounded-xl px-7 py-3 font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                            >
                                Resume
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Profile Image */}
                    <div className="hero-image flex justify-center mt-10 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="hero-avatar-shell relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                        >
                            {/* Floating Animation Wrapper */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{
                                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                                }}
                                className="h-full w-full"
                            >
                                <div className="profile-img relative z-10 h-full w-full overflow-hidden rounded-[2rem] border border-violet-500/20 shadow-[0_0_30px_rgba(129,140,248,0.15)] bg-slate-900/50">
                                    {data.profileImage ? (
                                        <img
                                            src={data.profileImage}
                                            alt={`${data.name} profile`}
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="theme-muted flex h-full items-center justify-center px-6 text-center text-sm">
                                            Add your image path in portfolio data
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

Hero.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        profileImage: PropTypes.string,
        title: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
    }).isRequired,
};

export default Hero;
