import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const Contact = ({ data }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section id="contact" className="section-shell py-20">
            {/* Contact Section */}
            <SectionHeading
                title="Let's Connect"
                subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to collaborate."
            />

            <div className="grid gap-6 lg:grid-cols-2">
                <motion.form
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45 }}
                    className="glass-card space-y-4 p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(129,140,248,0.2)]"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition duration-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/40"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition duration-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/40"
                    />
                    <textarea
                        placeholder="Message"
                        rows={5}
                        className="min-h-[160px] w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition duration-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/40"
                    />
                    <button
                        type="submit"
                        className="rounded-lg bg-gradient-to-r from-violet-400 to-indigo-500 px-5 py-3 font-medium text-slate-900 transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        Send Message
                    </button>

                    {isSubmitted && (
                        <p className="text-sm text-violet-300">
                            Thanks for reaching out! I'll get back to you soon.
                        </p>
                    )}
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="glass-card p-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(129,140,248,0.2)]"
                >
                    <h3 className="text-xl font-semibold">Contact Details</h3>
                    <div className="mt-4 space-y-3 text-slate-300">
                        <a
                            href={data.socialLinks.email}
                            className="flex items-center gap-3 transition duration-300 hover:translate-x-1 hover:text-violet-400"
                        >
                            <FaEnvelope /> {data.contact.email}
                        </a>
                        <p className="flex items-center gap-3">
                            <FaPhoneAlt /> {data.contact.phone}
                        </p>
                        <a
                            href={data.socialLinks.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 transition duration-300 hover:translate-x-1 hover:text-violet-400"
                        >
                            <FaLinkedin /> LinkedIn
                        </a>
                        <a
                            href={data.socialLinks.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 transition duration-300 hover:translate-x-1 hover:text-violet-400"
                        >
                            <FaGithub /> GitHub
                        </a>
                    </div>

                    <div className="mt-7 border-t border-slate-700/60 pt-5">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">
                            Available For
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-slate-400">
                            <li>• Internships</li>
                            <li>• Collaboration</li>
                            <li>• Open Source Projects</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

Contact.propTypes = {
    data: PropTypes.shape({
        contact: PropTypes.shape({
            email: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        }).isRequired,
        socialLinks: PropTypes.shape({
            github: PropTypes.string.isRequired,
            linkedin: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Contact;
