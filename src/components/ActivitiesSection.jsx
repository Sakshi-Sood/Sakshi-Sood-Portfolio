import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";
import SectionHeading from "./SectionHeading";

/* ── Fan transform calculator ── */
function getFanStyle(offset) {
    const abs = Math.abs(offset);
    const sign = offset > 0 ? 1 : -1;

    if (abs === 0) {
        return { x: 0, rotate: 0, scale: 1, zIndex: 20, blur: 0, opacity: 1 };
    }
    if (abs === 1) {
        return {
            x: sign * 400,
            rotate: sign * 12,
            scale: 0.75,
            zIndex: 10,
            blur: 2,
            opacity: 0.45,
        };
    }
    // Hidden
    return { x: sign * 500, rotate: sign * 20, scale: 0.5, zIndex: 1, blur: 6, opacity: 0 };
}

/* ── Info strip fade ── */
const infoVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.28, delay: 0.18, ease: "easeOut" },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.15 },
    },
};

/* ── Component ── */
const ActivitiesSection = ({ data }) => {
    const activities = data.activities || [];
    const [[activeIndex], setActive] = useState([0]);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);
    const n = activities.length;
    const hasActivities = n > 0;

    const goTo = useCallback(
        (idx) => {
            if (!hasActivities) return;
            setActive([((idx % n) + n) % n]);
        },
        [hasActivities, n]
    );

    const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
    const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

    /* Auto-advance */
    useEffect(() => {
        if (isPaused || !hasActivities) return;
        timerRef.current = setInterval(() => {
            setActive(([prev]) => [(prev + 1) % n]);
        }, 4000);
        return () => clearInterval(timerRef.current);
    }, [hasActivities, isPaused, n]);

    if (!hasActivities) return null;

    /* Only 3 visible: center + 1 on each side */
    const visibleCards = [];
    for (let offset = -1; offset <= 1; offset++) {
        const idx = ((activeIndex + offset) % n + n) % n;
        visibleCards.push({ idx, offset });
    }

    const slide = activities[activeIndex];

    return (
        <section
            className="activities-section section-shell py-20"
            id="activities"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <SectionHeading
                title="Extracurricular Activities"
                subtitle="Growth through coding, competitions, and continuous learning"
            />

            <div className="fan-container">
                {/* ── Fan stage ── */}
                <div className="fan-stage">
                    {visibleCards.map(({ idx, offset }) => {
                        const s = getFanStyle(offset);
                        return (
                            <motion.div
                                key={`fan-${idx}`}
                                className="fan-card"
                                animate={{
                                    x: s.x,
                                    rotate: s.rotate,
                                    scale: s.scale,
                                    opacity: s.opacity,
                                    filter: `blur(${s.blur}px)`,
                                }}
                                transition={{
                                    duration: 0.62,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                style={{ zIndex: s.zIndex }}
                                onClick={() => offset !== 0 && goTo(idx)}
                            >
                                <div className="fan-card-inner">
                                    <img
                                        src={activities[idx].image}
                                        alt={activities[idx].title}
                                        className="fan-card-image"
                                        draggable={false}
                                        onError={(e) => {
                                            e.target.style.display = "none";
                                        }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── Info strip ── */}
                <div className="fan-info-strip">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            className="fan-info-content"
                            variants={infoVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <span
                                className="fan-info-badge"
                                style={{
                                    "--badge-color": slide.badgeColor,
                                }}
                            >
                                {slide.badge}
                            </span>
                            <h3 className="fan-info-title">{slide.title}</h3>
                            <p className="fan-info-org">
                                {slide.org}
                                <span className="fan-info-date"> · {slide.date}</span>
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* ── Navigation: arrows + dots ── */}
                <div className="fan-nav-row">
                    <button
                        onClick={prev}
                        className="fan-nav-btn"
                        aria-label="Previous activity"
                    >
                        <FiChevronLeft size={16} />
                    </button>

                    <div className="fan-dots">
                        {activities.map((_, i) => (
                            <button
                                key={`dot-${activities[i].title}-${i}`}
                                onClick={() => goTo(i)}
                                className={`fan-dot ${i === activeIndex ? "fan-dot--active" : ""}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="fan-nav-btn"
                        aria-label="Next activity"
                    >
                        <FiChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
};

ActivitiesSection.propTypes = {
    data: PropTypes.shape({
        activities: PropTypes.arrayOf(
            PropTypes.shape({
                badge: PropTypes.string,
                badgeColor: PropTypes.string,
                title: PropTypes.string.isRequired,
                org: PropTypes.string,
                date: PropTypes.string,
                image: PropTypes.string,
            }),
        ),
    }).isRequired,
};

export default ActivitiesSection;
