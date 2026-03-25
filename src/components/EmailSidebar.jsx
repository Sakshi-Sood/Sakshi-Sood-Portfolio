import PropTypes from "prop-types";

const EmailSidebar = ({ email }) => {
  const displayEmail = email || "";

  if (!displayEmail) return null;

  return (
    <aside className="fixed right-10 bottom-0 z-40 hidden lg:flex flex-col items-center">
      <a
        href={`mailto:${displayEmail}`}
        className="[writing-mode:vertical-rl] text-sm tracking-[0.2em] text-slate-400 hover:text-violet-400 transition-all duration-300 hover:-translate-y-1"
        aria-label={`Send email to ${displayEmail}`}
      >
        {displayEmail}
      </a>
      <div className="w-[1px] h-24 bg-slate-400/30 mt-4" />
    </aside>
  );
};

EmailSidebar.propTypes = {
  email: PropTypes.string,
};

EmailSidebar.defaultProps = {
  email: "",
};

export default EmailSidebar;
