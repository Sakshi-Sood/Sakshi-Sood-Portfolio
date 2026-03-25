import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const FeaturedProject = ({
    title,
    description,
    image,
    duration,
    category,
    highlights,
    techStack,
    githubLink,
    liveLink,
    reverse,
    index,
}) => {
    const imageOrderClass = reverse ? "md:order-2" : "md:order-1";
    const contentOrderClass = reverse
        ? "md:order-1 md:items-start"
        : "md:order-2 md:items-end";
    const contentAlignClass = reverse ? "text-left" : "text-left md:text-right";
    const overlayOffsetClass = reverse
        ? "md:-mr-8 lg:-mr-12 xl:-mr-16"
        : "md:-ml-8 lg:-ml-12 xl:-ml-16";
    const stackJustifyClass = reverse
        ? "justify-start"
        : "justify-start md:justify-end";

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group transition duration-300 hover:scale-[1.01]"
        >
            <div className="grid items-center gap-8 md:grid-cols-12 md:gap-10 lg:gap-12">
                <div className={`relative md:col-span-7 ${imageOrderClass}`}>
                    <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-xl shadow-violet-500/10 transition duration-500 group-hover:shadow-[0_24px_60px_rgba(129,140,248,0.16)]">
                        {image ? (
                            <img
                                src={image}
                                alt={`${title} screenshot`}
                                className="h-[210px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[250px] md:h-[280px] lg:h-[360px]"
                            />
                        ) : (
                            <div className="flex h-[210px] w-full items-center justify-center bg-slate-900/70 text-sm text-slate-400 sm:h-[250px] md:h-[280px] lg:h-[360px]">
                                Add a project screenshot
                            </div>
                        )}

                        <div className="pointer-events-none absolute inset-0 bg-slate-950/20 transition duration-500 group-hover:bg-slate-950/20" />
                    </div>
                </div>

                <div
                    className={`relative flex flex-col ${contentOrderClass} md:col-span-5 ${contentAlignClass}`}
                >
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-violet-400">
                        Featured Project
                    </p>
                    {category && (
                        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                            {category}
                        </p>
                    )}
                    <h3 className="text-2xl font-bold text-slate-100 sm:text-3xl">
                        {title}
                    </h3>
                    {duration && (
                        <p className="mt-1 text-sm font-medium text-slate-400">
                            {duration}
                        </p>
                    )}

                    <div
                        className={`relative z-10 mt-4 max-w-lg rounded-xl border border-white/10 bg-slate-800/70 p-6 shadow-lg backdrop-blur-lg ${overlayOffsetClass}`}
                    >
                        <p className="leading-relaxed text-slate-200 text-justify">{description}</p>

                        {highlights?.length > 0 && (
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300 text-justify">
                                {highlights.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className={`mt-5 flex flex-wrap gap-2 ${stackJustifyClass}`}>
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-white/10 px-3 py-1 text-sm text-violet-400 transition duration-300 hover:border-violet-400 hover:text-violet-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className={`mt-5 flex items-center gap-5 ${stackJustifyClass}`}>
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-slate-300 transition duration-300 hover:-translate-y-1 hover:text-violet-400"
                            aria-label={`${title} GitHub repository`}
                        >
                            <FiGithub size={18} />
                            <span className="text-sm">GitHub</span>
                        </a>

                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-slate-300 transition duration-300 hover:-translate-y-1 hover:text-violet-400"
                                aria-label={`${title} live demo`}
                            >
                                <FiExternalLink size={18} />
                                <span className="text-sm">Live</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

FeaturedProject.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    duration: PropTypes.string,
    category: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    reverse: PropTypes.bool,
    index: PropTypes.number,
};

FeaturedProject.defaultProps = {
    image: "",
    duration: "",
    category: "",
    highlights: [],
    liveLink: "",
    reverse: false,
    index: 0,
};

export default FeaturedProject;
