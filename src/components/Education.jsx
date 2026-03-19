import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { GraduationCap, School } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CardContent = ({ item, isLeft, Icon }) => {
    return (
        <motion.article
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-md w-full px-5 py-4 flex flex-col justify-center rounded-xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm group hover:border-cyan-500/30 hover:bg-slate-800/60 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.15)] transition-all duration-300 relative overflow-hidden"
        >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan-500/5 blur-[40px] group-hover:bg-cyan-500/15 transition-all duration-500" />

            <div className="flex items-center gap-2 mb-2 relative z-10 w-full">
                <h3 className="text-lg md:text-xl font-bold text-slate-100 leading-tight group-hover:text-cyan-100 transition-colors truncate">
                    {item.degree}
                </h3>
            </div>

            <p className="text-[11px] md:text-xs font-mono tracking-widest text-cyan-400/80 mb-2 relative z-10">
                {item.graduation}
            </p>

            <h4 className="text-sm md:text-base font-medium text-slate-300 mb-2 relative z-10">
                {item.institution}
            </h4>

            <p className="text-xs md:text-sm text-slate-500 font-light line-clamp-2 relative z-10">
                {item.coursework}
            </p>
        </motion.article>
    );
};

CardContent.propTypes = {
    item: PropTypes.object.isRequired,
    isLeft: PropTypes.bool.isRequired,
    Icon: PropTypes.elementType.isRequired,
};

const Education = ({ data }) => {
    return (
        <section id="education" className="section-shell py-16 sm:py-20 md:py-24">
            <SectionHeading
                title="Academics Journey"
                subtitle="Academic timeline and relevant coursework"
            />

            <div className="relative max-w-5xl mx-auto mt-16 w-full">
                {/* Vertical Line */}
                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-cyan-400/30 transform -translate-x-1/2" />

                <div className="space-y-10 md:space-y-12 flex flex-col py-6">
                    {data.education.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        const isDegree = item.degree.toLowerCase().includes("bachelor") || item.degree.toLowerCase().includes("b.tech") || item.degree.toLowerCase().includes("university");
                        const Icon = isDegree ? GraduationCap : School;

                        return (
                            <div key={item.degree} className="relative flex justify-between items-center w-full">

                                {/* Left Side Component Container */}
                                <div className="w-[45%] flex justify-end pl-2 pr-5 sm:pr-12">
                                    {isLeft && (
                                        <CardContent item={item} isLeft={isLeft} Icon={Icon} />
                                    )}
                                </div>

                                {/* Center Timeline Icon */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center z-20">
                                    <motion.div
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900 border-2 border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.5)] flex items-center justify-center text-cyan-400"
                                        animate={{ boxShadow: ["0 0 10px rgba(34,211,238,0.4)", "0 0 20px rgba(34,211,238,0.7)", "0 0 10px rgba(34,211,238,0.4)"] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    >
                                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </motion.div>
                                </div>

                                {/* Right Side Component Container */}
                                <div className="w-[45%] flex justify-start pl-5 sm:pl-12 pr-2">
                                    {!isLeft && (
                                        <CardContent item={item} isLeft={isLeft} Icon={Icon} />
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
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
