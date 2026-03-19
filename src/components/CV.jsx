import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Cv = () => {
  return (
    <section id="cv" className="section-shell py-20">
      {/* CV Section */}
      <SectionHeading title="CV" subtitle="Preview and download my resume" />

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6"
      >
        <div className="overflow-hidden rounded-xl border border-slate-800">
          <iframe
            title="CV Preview"
            src="/cv.pdf"
            className="h-[420px] w-full bg-slate-950"
          />
        </div>
        <div className="mt-5">
          <a
            href="/cv.pdf"
            download
            className="inline-flex rounded-lg bg-primary px-5 py-3 font-medium text-slate-900 transition hover:bg-cyan-300"
          >
            Download CV
          </a>
        </div>
      </motion.article>
    </section>
  );
};

export default Cv;
