import PropTypes from "prop-types";

const Footer = ({ data }) => {
  const year = new Date().getFullYear();
  const footerText = data.footer?.text || "";

  return (
    <footer className="border-t border-slate-800 py-6">
      {/* Footer Section */}
      <div className="section-shell text-center text-sm text-slate-400">
        © {year} {data.name} {footerText ? `• ${footerText}` : ""}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    footer: PropTypes.shape({
      text: PropTypes.string,
    }),
  }).isRequired,
};

export default Footer;
