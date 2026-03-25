import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const Contact = ({ data }) => {
    const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [statusType, setStatusType] = useState("idle");

    useEffect(() => {
        if (!statusMessage) return;

        const timeoutId = setTimeout(() => {
            setStatusMessage("");
            setStatusType("idle");
        }, 3500);

        return () => clearTimeout(timeoutId);
    }, [statusMessage]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = formValues.name.trim();
        const email = formValues.email.trim();
        const message = formValues.message.trim();

        if (!name || !email || !message) {
            setStatusType("error");
            setStatusMessage("Please fill in all fields before sending.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setStatusType("error");
            setStatusMessage("Please enter a valid email address.");
            return;
        }

        if (!web3FormsAccessKey) {
            setStatusType("error");
            setStatusMessage("Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY in your .env file.");
            return;
        }

        setIsSubmitting(true);
        setStatusType("idle");
        setStatusMessage("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: web3FormsAccessKey,
                    subject: `Portfolio contact from ${name}`,
                    from_name: name,
                    name,
                    email,
                    message,
                    replyto: email,
                }),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.message || "Something went wrong while sending your message.");
            }

            setStatusType("success");
            setStatusMessage("Message sent successfully. Thanks for reaching out!");
            setFormValues({ name: "", email: "", message: "" });
        } catch (error) {
            setStatusType("error");
            setStatusMessage(error.message || "Unable to send message right now. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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
                        name="name"
                        placeholder="Name"
                        value={formValues.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="theme-field w-full rounded-lg px-4 py-3 outline-none transition duration-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/40"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="theme-field w-full rounded-lg px-4 py-3 outline-none transition duration-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/40"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows={5}
                        value={formValues.message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="theme-field min-h-[160px] w-full rounded-lg px-4 py-3 outline-none transition duration-300 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/40"
                    />
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-lg bg-gradient-to-r from-violet-400 to-indigo-500 px-5 py-3 font-medium text-slate-900 transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
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

            <AnimatePresence>
                {statusMessage ? (
                    <motion.div
                        role="alert"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 16 }}
                        transition={{ duration: 0.22 }}
                        className={`fixed bottom-6 right-6 z-50 max-w-sm rounded-xl border px-4 py-3 shadow-lg backdrop-blur ${
                            statusType === "error"
                                ? "border-rose-400/40 bg-rose-500/15 text-rose-100"
                                : "border-violet-400/40 bg-violet-500/15 text-violet-100"
                        }`}
                    >
                        <div className="flex items-start justify-between gap-3">
                            <p className="text-sm">{statusMessage}</p>
                            <button
                                type="button"
                                onClick={() => {
                                    setStatusMessage("");
                                    setStatusType("idle");
                                }}
                                className="text-base leading-none opacity-75 transition hover:opacity-100"
                                aria-label="Close notification"
                            >
                                ×
                            </button>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
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
