import PropTypes from "prop-types";

const CardImage = ({ src, alt, hint }) => {
  return (
    <div className="mb-4 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-44 w-full object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-44 items-center justify-center px-4 text-center text-xs text-slate-400">
          Add image in portfolio data ({hint})
        </div>
      )}
    </div>
  );
};

CardImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};

export default CardImage;
