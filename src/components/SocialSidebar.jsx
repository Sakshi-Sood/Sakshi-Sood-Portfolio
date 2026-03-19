import PropTypes from "prop-types";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const SocialSidebar = ({ links }) => {
  const socialItems = [
    {
      href: links.github || "https://github.com",
      label: "GitHub",
      Icon: FaGithub,
    },
    {
      href: links.linkedin || "https://linkedin.com",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      href: links.twitter || "https://x.com",
      label: "X (Twitter)",
      Icon: FaXTwitter,
    },
    {
      href: links.leetcode || "https://leetcode.com",
      label: "LeetCode",
      Icon: SiLeetcode,
    },
  ];

  return (
    <aside className="fixed left-10 bottom-0 z-40 hidden lg:flex flex-col items-center">
      <div className="flex flex-col items-center gap-4">
        {socialItems.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
      <div className="w-[1px] h-24 bg-slate-400/30 mt-4" />
    </aside>
  );
};

SocialSidebar.propTypes = {
  links: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
    twitter: PropTypes.string,
    leetcode: PropTypes.string,
  }),
};

SocialSidebar.defaultProps = {
  links: {},
};

export default SocialSidebar;
