import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
    FaBookOpen,
    FaChartBar,
    FaChartLine,
    FaClock,
    FaCode,
    FaCss3,
    FaHtml5,
    FaJava,
    FaDatabase,
    FaLaptopCode,
    FaPuzzlePiece,
    FaSyncAlt,
    FaTools,
    FaUsers,
} from "react-icons/fa";
import {
    SiAppwrite,
    SiC,
    SiCplusplus,
    SiDocker,
    SiGit,
    SiGithub,
    SiGnubash,
    SiJavascript,
    SiMongodb,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiNumpy,
    SiPandas,
    SiPython,
    SiReact,
    SiScikitlearn,
    SiStreamlit,
    SiSupabase,
    SiTailwindcss,
    SiLinux,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

const iconMap = {
    "Programming Languages": FaCode,
    "Web Development": FaLaptopCode,
    Databases: FaDatabase,
    "Data Analysis & Machine Learning": FaChartLine,
    "Tools & Platforms": FaTools,
    "Soft Skills": FaUsers,
    "Computer Science Fundamentals": FaBookOpen,
};

/* ── Category color identity system ── */
const categoryColors = {
    "Programming Languages": {
        accent: "#a78bfa",       // violet-400
        accentBg: "rgba(167, 139, 250, 0.12)",
        accentBorder: "rgba(167, 139, 250, 0.35)",
        chipHoverBg: "rgba(167, 139, 250, 0.18)",
        chipHoverBorder: "rgba(167, 139, 250, 0.50)",
        glowShadow: "rgba(167, 139, 250, 0.25)",
        featured: true,
    },
    "Web Development": {
        accent: "#2dd4bf",       // teal-400
        accentBg: "rgba(45, 212, 191, 0.12)",
        accentBorder: "rgba(45, 212, 191, 0.35)",
        chipHoverBg: "rgba(45, 212, 191, 0.18)",
        chipHoverBorder: "rgba(45, 212, 191, 0.50)",
        glowShadow: "rgba(45, 212, 191, 0.25)",
    },
    Databases: {
        accent: "#60a5fa",       // blue-400
        accentBg: "rgba(96, 165, 250, 0.12)",
        accentBorder: "rgba(96, 165, 250, 0.35)",
        chipHoverBg: "rgba(96, 165, 250, 0.18)",
        chipHoverBorder: "rgba(96, 165, 250, 0.50)",
        glowShadow: "rgba(96, 165, 250, 0.25)",
    },
    "Data Analysis & Machine Learning": {
        accent: "#f97316",       // orange-500
        accentBg: "rgba(249, 115, 22, 0.12)",
        accentBorder: "rgba(249, 115, 22, 0.35)",
        chipHoverBg: "rgba(249, 115, 22, 0.18)",
        chipHoverBorder: "rgba(249, 115, 22, 0.50)",
        glowShadow: "rgba(249, 115, 22, 0.25)",
    },
    "Tools & Platforms": {
        accent: "#f472b6",       // pink-400
        accentBg: "rgba(244, 114, 182, 0.12)",
        accentBorder: "rgba(244, 114, 182, 0.35)",
        chipHoverBg: "rgba(244, 114, 182, 0.18)",
        chipHoverBorder: "rgba(244, 114, 182, 0.50)",
        glowShadow: "rgba(244, 114, 182, 0.25)",
    },
    "Soft Skills": {
        accent: "#34d399",       // emerald-400
        accentBg: "rgba(52, 211, 153, 0.12)",
        accentBorder: "rgba(52, 211, 153, 0.35)",
        chipHoverBg: "rgba(52, 211, 153, 0.18)",
        chipHoverBorder: "rgba(52, 211, 153, 0.50)",
        glowShadow: "rgba(52, 211, 153, 0.25)",
        isSoftSkill: true,
    },
};

const defaultColor = {
    accent: "#818cf8",
    accentBg: "rgba(129, 140, 248, 0.12)",
    accentBorder: "rgba(129, 140, 248, 0.35)",
    chipHoverBg: "rgba(129, 140, 248, 0.18)",
    chipHoverBorder: "rgba(129, 140, 248, 0.50)",
    glowShadow: "rgba(129, 140, 248, 0.25)",
};

const skillIconMap = {
    C: SiC,
    "C++": SiCplusplus,
    HTML: FaHtml5,
    HTML5: FaHtml5,
    CSS: FaCss3,
    CSS3: FaCss3,
    Python: SiPython,
    Java: FaJava,
    JavaScript: SiJavascript,
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    "Tailwind CSS": SiTailwindcss,
    Streamlit: SiStreamlit,
    SQL: FaDatabase,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    Supabase: SiSupabase,
    Appwrite: SiAppwrite,
    NumPy: SiNumpy,
    Pandas: SiPandas,
    Matplotlib: FaChartLine,
    "Scikit-learn": SiScikitlearn,
    "Power BI": FaChartBar,
    Git: SiGit,
    GitHub: SiGithub,
    Linux: SiLinux,
    Docker: SiDocker,
    "Shell Scripting": SiGnubash,
    "VS Code": FaCode,
    "Problem Solving": FaPuzzlePiece,
    "Team Collaboration": FaUsers,
    Adaptability: FaSyncAlt,
    "Time Management": FaClock,
};

const skillIconColorMap = {
    C: "#2563eb",
    "C++": "#1d4ed8",
    HTML: "#e34f26",
    HTML5: "#e34f26",
    CSS: "#1572b6",
    CSS3: "#1572b6",
    Python: "#3776ab",
    Java: "#f89820",
    JavaScript: "#f7df1e",
    React: "#61dafb",
    "Next.js": "#e5e7eb",
    "Node.js": "#339933",
    "Tailwind CSS": "#06b6d4",
    Streamlit: "#ff4b4b",
    SQL: "#38bdf8",
    MySQL: "#4479a1",
    MongoDB: "#47a248",
    Supabase: "#3ecf8e",
    Appwrite: "#fd366e",
    NumPy: "#4dabcf",
    Pandas: "#150458",
    Matplotlib: "#0c7abf",
    "Scikit-learn": "#f7931e",
    "Power BI": "#f2c811",
    Git: "#f05032",
    GitHub: "#a3a3a3",
    Linux: "#fbc02d",
    Docker: "#2496ed",
    "Shell Scripting": "#89e051",
    "VS Code": "#007acc",
    "Problem Solving": "#a855f7",
    "Team Collaboration": "#22c55e",
    Adaptability: "#38bdf8",
    "Time Management": "#fb7185",
};

const normalizeSkillKey = (value) => {
    const trimmed = value.trim();
    const lower = trimmed.toLowerCase();

    if (lower === "html") return "HTML";
    if (lower === "html5") return "HTML5";
    if (lower === "css") return "CSS";
    if (lower === "css3") return "CSS3";

    return trimmed;
};

/* ── Animation variants ── */
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const chipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.04, duration: 0.3, ease: "easeOut" },
    }),
};

/* ── Soft Skill Pill Component ── */
const SoftSkillPill = ({ skill, accentColor, index }) => (
    <motion.span
        custom={index}
        variants={chipVariants}
        className="skill-chip skill-chip--soft"
        style={{
            "--cat-accent": accentColor,
        }}
        whileHover={{ scale: 1.07, y: -2 }}
    >
        <span
            className="skill-chip-dot"
            style={{ backgroundColor: accentColor }}
        />
        <span className="skill-chip-label">{skill}</span>
    </motion.span>
);

SoftSkillPill.propTypes = {
    skill: PropTypes.string.isRequired,
    accentColor: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

/* ── Tech Skill Chip Component ── */
const TechSkillChip = ({ skill, catColors, index }) => {
    const key = normalizeSkillKey(skill);
    const SkillIcon = skillIconMap[key];
    const iconColor = skillIconColorMap[key] || "#818cf8";

    return (
        <motion.span
            custom={index}
            variants={chipVariants}
            className="skill-chip skill-chip--tech"
            style={{
                "--cat-hover-bg": catColors.chipHoverBg,
                "--cat-hover-border": catColors.chipHoverBorder,
                "--cat-accent": catColors.accent,
            }}
            whileHover={{ scale: 1.07, y: -2 }}
        >
            {SkillIcon ? (
                <SkillIcon
                    className="skill-chip-icon"
                    style={{ color: iconColor }}
                    aria-hidden="true"
                />
            ) : null}
            <span className="skill-chip-label">{skill}</span>
        </motion.span>
    );
};

TechSkillChip.propTypes = {
    skill: PropTypes.string.isRequired,
    catColors: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

/* ── Main Skills Component ── */
const Skills = ({ data }) => {
    return (
        <section id="skills" className="section-shell skills-section py-20">
            <SectionHeading
                title="Tools & Technologies"
                subtitle="Core technologies and tools I actively use"
            />

            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {data.skills.map((group) => {
                    const Icon = iconMap[group.category] || FaCode;
                    const colors = categoryColors[group.category] || defaultColor;
                    const isFeatured = colors.featured;
                    const isSoft = colors.isSoftSkill;

                    return (
                        <motion.article
                            key={group.category}
                            variants={cardVariants}
                            whileHover={{ y: -6 }}
                            className={`skill-card-v2 ${isFeatured ? "skill-card-v2--featured" : ""}`}
                            style={{
                                "--cat-accent": colors.accent,
                                "--cat-accent-bg": colors.accentBg,
                                "--cat-accent-border": colors.accentBorder,
                                "--cat-glow": colors.glowShadow,
                            }}
                        >
                            {/* Top accent line */}
                            <div className="skill-card-accent-line" />

                            {/* Header with icon chip */}
                            <div className="skill-card-header">
                                <span
                                    className="skill-card-icon-chip"
                                    style={{
                                        backgroundColor: colors.accentBg,
                                        color: colors.accent,
                                        border: `1px solid ${colors.accentBorder}`,
                                    }}
                                >
                                    <Icon size={16} />
                                </span>
                                <h3 className="skill-card-title">
                                    {group.category}
                                </h3>
                            </div>

                            {/* Skills chips */}
                            <motion.div
                                className="skill-card-chips"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {group.items.map((skill, i) =>
                                    isSoft ? (
                                        <SoftSkillPill
                                            key={skill}
                                            skill={skill}
                                            accentColor={colors.accent}
                                            index={i}
                                        />
                                    ) : (
                                        <TechSkillChip
                                            key={skill}
                                            skill={skill}
                                            catColors={colors}
                                            index={i}
                                        />
                                    )
                                )}
                            </motion.div>
                        </motion.article>
                    );
                })}
            </motion.div>
        </section>
    );
};

Skills.propTypes = {
    data: PropTypes.shape({
        skills: PropTypes.arrayOf(
            PropTypes.shape({
                category: PropTypes.string.isRequired,
                items: PropTypes.arrayOf(PropTypes.string).isRequired,
            }),
        ).isRequired,
    }).isRequired,
};

export default Skills;
