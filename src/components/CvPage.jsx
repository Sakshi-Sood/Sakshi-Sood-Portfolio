import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CvPage = () => {
    return (
        <div className="app-root relative min-h-screen overflow-x-hidden bg-slate-950 py-12 sm:py-16">
            <div className="section-shell mx-auto max-w-5xl">
                <div className="mb-8 flex items-center justify-between gap-4">
                    <h1 className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                        Resume Preview
                    </h1>
                    <Link
                        to="/"
                        className="secondary-btn inline-flex rounded-lg px-4 py-2 text-sm font-medium transition duration-300"
                    >
                        Back to Home
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="glass-card p-5 sm:p-6"
                >
                    <div className="overflow-hidden rounded-xl border border-slate-800">
                        <iframe
                            title="CV Preview"
                            src="/public/resume.pdf"
                            className="h-[70vh] min-h-[480px] w-full bg-slate-950"
                        />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <a
                            href="/public/resume.pdf"
                            download
                            className="primary-btn inline-flex rounded-lg px-5 py-3 font-medium transition duration-300"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CvPage;
