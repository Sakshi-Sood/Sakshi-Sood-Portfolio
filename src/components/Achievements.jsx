import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiAward } from "react-icons/fi";
import CardImage from "./CardImage";
import SectionHeading from "./SectionHeading";

const Achievements = ({ data }) => {
  return (
    <section id="achievements" className="section-shell py-20">
      {/* Achievements Section */}
      <SectionHeading
        title="Extracurricular Activities"
        subtitle="Growth through coding, events, and leadership"
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.achievements.map((item, idx) => {
          const achievement = typeof item === "string" ? { title: item } : item;

          return (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="glass-card p-5"
            >
              <CardImage
                src={achievement.image}
                alt={`${achievement.title} achievement`}
                hint="/images/achievements/achievement-image.png"
              />
              <FiAward className="text-primary" size={20} />
              <p className="mt-3 text-sm text-slate-200">{achievement.title}</p>
              {achievement.description && (
                <p className="mt-1 text-sm text-slate-400">
                  {achievement.description}
                </p>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

Achievements.propTypes = {
  data: PropTypes.shape({
    achievements: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string,
          image: PropTypes.string,
        }),
      ]),
    ).isRequired,
  }).isRequired,
};

export default Achievements;
