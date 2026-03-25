import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { GraduationCap, School, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const EducationCard = ({ item, index, Icon, isLast }) => {
    const formattedIndex = String(index + 1).padStart(2, "0");
    const isLeft = index % 2 === 0;

    return (
        <div className={`edu-tl-row ${isLeft ? "edu-tl-row--left" : "edu-tl-row--right"}`}>
            {/* LEFT card slot */}
            <div className="edu-tl-slot edu-tl-slot--left">
                {isLeft && (
                    <motion.article
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="edu-card"
                    >
                        <CardInner item={item} index={index} Icon={Icon} formattedIndex={formattedIndex} />
                    </motion.article>
                )}
            </div>

            {/* CENTER spine */}
            <div className="edu-tl-spine">
                <motion.div
                    className="edu-tl-node"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.4, delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
                >
                    <span className="edu-tl-node-dot" />
                </motion.div>
                {!isLast && (
                    <motion.div
                        className="edu-tl-connector"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />
                )}
            </div>

            {/* RIGHT card slot */}
            <div className="edu-tl-slot edu-tl-slot--right">
                {!isLeft ? (
                    <motion.article
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="edu-card"
                    >
                        <CardInner item={item} index={index} Icon={Icon} formattedIndex={formattedIndex} />
                    </motion.article>
                ) : (
                    /* Duplicate for mobile: hidden on desktop, shown on mobile */
                    <motion.article
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="edu-card edu-card--mobile-only"
                    >
                        <CardInner item={item} index={index} Icon={Icon} formattedIndex={formattedIndex} />
                    </motion.article>
                )}
            </div>
        </div>
    );
};

const CardInner = ({ item, Icon, formattedIndex }) => (
    <>
        <div className="edu-card-glow" />

        {/* Top row: icon + date + index */}
        <div className="edu-card-top">
            <div className="edu-card-icon-box">
                <Icon className="edu-card-icon" />
            </div>
            <span className="edu-card-date">{item.graduation}</span>
            <span className="edu-card-index">{formattedIndex}</span>
        </div>

        {/* Degree title */}
        <h3 className="edu-card-degree">{item.degree}</h3>

        {/* Institution + location */}
        <p className="edu-card-institution">{item.institution}</p>

        {item.location && (
            <div className="edu-card-location">
                <MapPin className="edu-card-location-icon" />
                <span>{item.location}</span>
            </div>
        )}

        {/* Score badge */}
        <div className="edu-card-badge-row">
            <span className="edu-card-badge">
                <span className="edu-card-badge-dot" />
                {item.coursework}
            </span>
        </div>
    </>
);

CardInner.propTypes = {
    item: PropTypes.object.isRequired,
    Icon: PropTypes.elementType.isRequired,
    formattedIndex: PropTypes.string.isRequired,
    index: PropTypes.number,
};

EducationCard.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    Icon: PropTypes.elementType.isRequired,
    isLast: PropTypes.bool.isRequired,
};

const Education = ({ data }) => {
    return (
        <section id="education" className="section-shell py-16 sm:py-20 md:py-24">
            <SectionHeading
                title="Academics Journey"
                subtitle="Academic timeline and relevant coursework"
            />

            <div className="edu-tl-wrapper">
                {/* Central vertical line (static) */}
                <div className="edu-tl-line-bg" />

                {data.education.map((item, index) => {
                    const isDegree =
                        item.degree.toLowerCase().includes("bachelor") ||
                        item.degree.toLowerCase().includes("b.tech") ||
                        item.degree.toLowerCase().includes("university");
                    const Icon = isDegree ? GraduationCap : School;

                    return (
                        <EducationCard
                            key={item.degree}
                            item={item}
                            index={index}
                            Icon={Icon}
                            isLast={index === data.education.length - 1}
                        />
                    );
                })}
            </div>
        </section>
    );
};

Education.propTypes = {
    data: PropTypes.shape({
        education: PropTypes.arrayOf(
            PropTypes.shape({
                degree: PropTypes.string.isRequired,
                institution: PropTypes.string.isRequired,
                graduation: PropTypes.string.isRequired,
                coursework: PropTypes.string.isRequired,
                location: PropTypes.string,
            }),
        ).isRequired,
    }).isRequired,
};

export default Education;
