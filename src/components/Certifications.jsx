import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiCheckCircle, FiExternalLink } from "react-icons/fi";
import SectionHeading from "./SectionHeading";

const Certifications = ({ data }) => {
    const [showAll, setShowAll] = useState(false);
    const certifications = useMemo(
        () => data.certifications ?? [],
        [data.certifications],
    );

    if (certifications.length === 0) return null;

    const visibleCertifications = showAll
        ? certifications
        : certifications.slice(0, 3);
    const getPreviewLink = (cert) => cert.certificateLink || "";

    return (
        <section id="certifications" className="section-shell py-20 lg:py-24">
            <SectionHeading
                title="Certifications & Credentials"
                subtitle="A focused view of verified learning milestones"
            />

            <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-8 lg:gap-12">
                {visibleCertifications.map((cert, index) => (
                    <motion.div
                        key={cert.title + index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex w-full max-w-[320px] flex-col items-center text-center"
                    >
                        {/* Flipping Badge */}
                        <div className="group relative mx-auto mb-6 h-[240px] w-[240px] perspective-1000 sm:h-[280px] sm:w-[280px]">
                            <div className="absolute h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                {/* Front side: Badge Image */}
                                <div className="absolute inset-0 flex h-full w-full items-center justify-center [backface-visibility:hidden]">
                                    {cert.image ? (
                                        <img
                                            src={cert.image}
                                            alt={`${cert.title} badge`}
                                            className="h-full w-full object-contain drop-shadow-[0_15px_25px_rgba(34,211,238,0.3)] transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-cyan-500/30 bg-slate-800/50 text-slate-400">
                                            <FiCheckCircle className="mb-2 text-4xl text-cyan-400" />
                                            <p className="text-sm">Preview not available</p>
                                        </div>
                                    )}
                                </div>

                                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-full border border-cyan-500/30 bg-[#061824]/95 p-6 text-center shadow-xl backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
                                    <p className="line-clamp-3 text-sm leading-relaxed text-slate-300 sm:text-sm">
                                        {cert.description}
                                    </p>
                                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                                        {(cert.skills || []).slice(0, 2).map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-full border border-cyan-700/50 bg-cyan-900/50 px-2 py-0.5 text-[10px] text-cyan-300"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-4 pb-2">
                                        {getPreviewLink(cert) ? (
                                            <a
                                                href={getPreviewLink(cert)}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-cyan-500/50 bg-cyan-500/20 px-3.5 py-1.5 text-xs font-semibold text-cyan-100 transition-colors hover:bg-cyan-500/40 hover:text-white"
                                            >
                                                Verify
                                                <FiExternalLink size={14} />
                                            </a>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/50 px-3.5 py-1.5 text-xs font-medium text-slate-400">
                                                No Link
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text underneath */}
                        <div className="mt-2 flex flex-col items-center gap-1">
                            <h3 className="text-xl font-bold leading-tight text-white">
                                {cert.title}
                            </h3>
                            <p className="text-md font-medium tracking-wide text-cyan-400">
                                {cert.issuer}
                            </p>
                            {cert.issueDate && (
                                <p className="text-sm font-medium text-slate-400">
                                    {cert.issueDate}
                                </p>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>

            {certifications.length > 3 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 flex justify-center"
                >
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-cyan-500/50 bg-cyan-500/10 px-8 py-3 font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-100 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                    >
                        <span>{showAll ? "View Less" : "View More Credentials"}</span>
                    </button>
                </motion.div>
            )}
        </section>
    );
};

Certifications.propTypes = {
    data: PropTypes.shape({
        certifications: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                issuer: PropTypes.string.isRequired,
                issueDate: PropTypes.string,
                description: PropTypes.string,
                skills: PropTypes.arrayOf(PropTypes.string),
                image: PropTypes.string,
                certificateLink: PropTypes.string,
            }),
        ).isRequired,
    }).isRequired,
};

export default Certifications;
