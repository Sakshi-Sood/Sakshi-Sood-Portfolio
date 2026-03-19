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

const Skills = ({ data }) => {
    return (
        <section id="skills" className="section-shell skills-section py-20">
            {/* Skills Section */}
            <SectionHeading
                title="Tools & Technologies"
                subtitle="Core technologies and tools I actively use"
            />

            <div className="skills-grid">
                {data.skills.map((group, idx) => {
                    const Icon = iconMap[group.category] || FaCode;
                    return (
                        <motion.article
                            key={group.category}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: idx * 0.08 }}
                            className="glass-card skill-card hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <Icon className="text-primary" size={20} />
                                <h3 className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-xl font-semibold text-transparent">
                                    {group.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => {
                                    const key = normalizeSkillKey(skill);
                                    const SkillIcon = skillIconMap[key];
                                    const iconColor = skillIconColorMap[key] || "#22d3ee";
                                    return (
                                        <span key={skill} className="skill-chip">
                                            {SkillIcon ? (
                                                <SkillIcon
                                                    className="skill-chip-icon"
                                                    style={{ color: iconColor }}
                                                    aria-hidden="true"
                                                />
                                            ) : null}
                                            <span className="skill-chip-label">{skill}</span>
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.article>
                    );
                })}
            </div>
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
