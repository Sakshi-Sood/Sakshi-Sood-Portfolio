import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SectionHeading = ({
    title,
    subtitle,
    titleClassName,
    subtitleClassName,
}) => {
    return (
        <div className="mb-12 mt-4 text-center md:mb-16">
            <motion.h2
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent pb-1 ${titleClassName}`}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className={`mt-4 text-base md:text-lg font-medium text-slate-400 ${subtitleClassName}`}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

SectionHeading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    titleClassName: PropTypes.string,
    subtitleClassName: PropTypes.string,
};

SectionHeading.defaultProps = {
    subtitle: "",
    titleClassName: "",
    subtitleClassName: "",
};

export default SectionHeading;
