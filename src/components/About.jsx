import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { staggerContainer, fadeUp } from "../utils/animations";

const principles = [
    {
        title: "FOCUS",
        text: "Prioritizing efficiency and objective logic in every challenge.",
        rotationClass: "rotate-0 md:-rotate-3",
    },
    {
        title: "GROWTH",
        text: "Continuously improving my understanding of systems, algorithms, and engineering practices.",
        rotationClass: "rotate-0 md:rotate-1",
    },
    {
        title: "CRAFT",
        text: "Writing clean, maintainable code and building software that is reliable and scalable.",
        rotationClass: "rotate-0 md:-rotate-2",
    },
];

const PrincipleCard = ({ title, text, rotationClass, index }) => {
    const overlapClass = index === 0 ? "" : "md:-ml-10 lg:-ml-14";

    return (
        <motion.article
            variants={fadeUp}
            whileHover={{ y: -15, scale: 1.05, rotate: 0, zIndex: 30 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className={
                `group relative w-full md:w-[340px] lg:w-[360px] rounded-[20px] border border-slate-500/25 ` +
                `bg-slate-900/55 px-7 py-8 shadow-[0_16px_40px_rgba(2,6,23,0.42)] backdrop-blur-md ` +
                `transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:border-cyan-400/30 ${rotationClass} ${overlapClass}`
            }
        >
            <h3 className="text-xl font-black uppercase tracking-[0.12em] text-cyan-300 group-hover:text-cyan-200 transition-colors">
                {title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{text}</p>
        </motion.article>
    );
};

const About = () => {
    return (
        <section id="about" className="relative py-24 md:py-28 lg:py-32">
            <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    className="text-center"
                >
                    <h2 className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
                        About Me
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl whitespace-pre-line text-base leading-relaxed text-slate-300 sm:text-lg">
                        {portfolioData.about}
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mt-14 flex flex-col gap-6 md:flex-row md:items-stretch md:justify-center md:gap-0"
                >
                    {principles.map((card, index) => (
                        <PrincipleCard
                            key={card.title}
                            title={card.title}
                            text={card.text}
                            rotationClass={card.rotationClass}
                            index={index}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
