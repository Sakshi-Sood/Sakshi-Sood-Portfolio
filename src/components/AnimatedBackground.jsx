const stars = [
  { top: "8%", left: "12%", size: "sm", delay: "0s", duration: "3.8s" },
  { top: "14%", left: "78%", size: "md", delay: "0.7s", duration: "4.6s" },
  { top: "20%", left: "28%", size: "sm", delay: "1.1s", duration: "4.2s" },
  { top: "28%", left: "62%", size: "lg", delay: "1.8s", duration: "5s" },
  { top: "35%", left: "88%", size: "sm", delay: "0.4s", duration: "3.9s" },
  { top: "42%", left: "10%", size: "md", delay: "1.6s", duration: "4.8s" },
  { top: "50%", left: "48%", size: "sm", delay: "2.3s", duration: "3.7s" },
  { top: "57%", left: "72%", size: "md", delay: "0.9s", duration: "4.4s" },
  { top: "64%", left: "18%", size: "lg", delay: "1.4s", duration: "5.2s" },
  { top: "72%", left: "84%", size: "sm", delay: "0.2s", duration: "4.1s" },
  { top: "80%", left: "34%", size: "md", delay: "2.1s", duration: "4.7s" },
  { top: "88%", left: "60%", size: "sm", delay: "1.3s", duration: "3.9s" },
];

const shootingStars = [
  { top: "14%", left: "-15%", delay: "0.5s", duration: "7.5s" },
  { top: "34%", left: "-20%", delay: "5.8s", duration: "8.6s" },
  { top: "58%", left: "-12%", delay: "11.2s", duration: "7.9s" },
  { top: "76%", left: "-18%", delay: "16.8s", duration: "9.1s" },
];

const AnimatedBackground = () => {
  return (
    <div className="universe-bg" aria-hidden="true">
      <div className="universe-nebula" />
      <div className="stars-layer">
        {stars.map((star, index) => (
          <span
            key={`${star.top}-${star.left}-${index}`}
            className={`star-dot star-${star.size}`}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      <div className="shooting-stars-layer">
        {shootingStars.map((shootingStar, index) => (
          <span
            key={`${shootingStar.top}-${shootingStar.left}-${index}`}
            className="shooting-star"
            style={{
              top: shootingStar.top,
              left: shootingStar.left,
              animationDelay: shootingStar.delay,
              animationDuration: shootingStar.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
