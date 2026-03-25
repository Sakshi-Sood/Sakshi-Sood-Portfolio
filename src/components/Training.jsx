import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import SectionHeading from "./SectionHeading";

const Training = ({ data }) => {
  const trainingItem = data.training[0];

  if (!trainingItem) return null;

  const dateBadge =
    trainingItem.period?.replace("Jun", "June")?.replace("Jul", "July") || "";

  const issuedDate = dateBadge.split("–")[0]?.trim() || "";
  const certificateLink =
    trainingItem.certificateLink || trainingItem.certificateImage || "";

  return (
    <section id="training" className="section-shell py-20">
      <SectionHeading
        title="Professional Training"
        subtitle="Hands-on learning and applied problem solving"
        titleClassName="text-4xl"
        subtitleClassName="text-slate-400 mt-2"
      />

      <div className="grid items-stretch gap-10 md:grid-cols-2">
        <motion.article
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="relative flex flex-col h-full rounded-xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg shadow-violet-500/10 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-violet-500/20"
        >
          <span className="absolute -left-[6px] top-8 h-3 w-3 rounded-full bg-violet-500 shadow-lg shadow-violet-500/60 animate-pulse" />

          <div>
            <p className="text-xs uppercase tracking-widest text-violet-400">
              Professional Training
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-100">
              {trainingItem.title}
            </h3>
            <span className="mt-3 inline-block rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-400">
              {dateBadge}
            </span>
          </div>

          <div className="mt-6 max-w-xl flex-grow">
            <p className="text-sm text-slate-400 mb-2">Key Highlights</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300 leading-relaxed">
              {(trainingItem.points || []).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="mt-auto pt-6 border-t border-white/5">
            <p className="text-sm font-medium text-slate-400 mb-3">
              Coding Profiles
            </p>
            <div className="flex flex-wrap gap-3">
              {data.socialLinks?.leetcode && (
                <a
                  href={data.socialLinks.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800/50 px-3 py-2 text-sm text-slate-300 transition duration-300 hover:border-violet-400/50 hover:bg-slate-800"
                >
                  <SiLeetcode className="text-[#FFA116] transition duration-300 group-hover:scale-110" />
                  <span className="transition duration-300 group-hover:text-violet-400">
                    LeetCode
                  </span>
                </a>
              )}
              {data.socialLinks?.gfg && (
                <a
                  href={data.socialLinks.gfg}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800/50 px-3 py-2 text-sm text-slate-300 transition duration-300 hover:border-violet-400/50 hover:bg-slate-800"
                >
                  <SiGeeksforgeeks className="text-[#2F8D46] transition duration-300 group-hover:scale-110" />
                  <span className="transition duration-300 group-hover:text-violet-400">
                    GeeksforGeeks
                  </span>
                </a>
              )}
              {data.socialLinks?.codechef && (
                <a
                  href={data.socialLinks.codechef}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800/50 px-3 py-2 text-sm text-slate-300 transition duration-300 hover:border-violet-400/50 hover:bg-slate-800"
                >
                  <SiCodechef className="text-white transition duration-300 group-hover:scale-110" />
                  <span className="transition duration-300 group-hover:text-violet-400">
                    CodeChef
                  </span>
                </a>
              )}
            </div>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="flex flex-col h-full rounded-xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md shadow-lg shadow-violet-500/10 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40"
        >
          <p className="text-xs uppercase tracking-widest text-violet-400">
            Certificate
          </p>

          <div className="mt-4 overflow-hidden rounded-lg border border-white/10 shadow-md">
            {trainingItem.certificateImage ? (
              <img
                src={trainingItem.certificateImage}
                alt={`${trainingItem.title} certificate`}
                className="h-[180px] xl:h-[200px] w-full object-cover object-top transition duration-300 hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-[180px] xl:h-[200px] items-center justify-center bg-slate-900 text-sm text-slate-400">
                Add certificate image in training data
              </div>
            )}
          </div>

          <div className="mt-auto pt-6">
            <p className="text-sm text-slate-300">
              {trainingItem.issuer ? `Issued by ${trainingItem.issuer}` : ""}
            </p>
            <p className="mt-1 text-sm text-slate-400">{issuedDate}</p>

            {certificateLink ? (
              <a
                href={certificateLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-violet-400 px-4 py-2 text-violet-400 transition hover:bg-violet-500/10"
              >
                View Certificate
                <FiExternalLink size={16} />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="mt-4 inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-slate-600 px-4 py-2 text-slate-500"
              >
                View Certificate
              </button>
            )}
          </div>
        </motion.article>
      </div>
    </section>
  );
};

Training.propTypes = {
  data: PropTypes.shape({
    training: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        period: PropTypes.string.isRequired,
        issuer: PropTypes.string,
        points: PropTypes.arrayOf(PropTypes.string).isRequired,
        certificateImage: PropTypes.string,
        certificateLink: PropTypes.string,
      }),
    ).isRequired,
    socialLinks: PropTypes.shape({
      leetcode: PropTypes.string,
      gfg: PropTypes.string,
      codechef: PropTypes.string,
    }),
  }).isRequired,
};

export default Training;
