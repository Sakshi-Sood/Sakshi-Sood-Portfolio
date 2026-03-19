import React from "react";
import { portfolioData } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const ActivitiesSection = () => {
  const { activities } = portfolioData;

  return (
    <section className="max-w-5xl mx-auto px-4 py-12" id="activities">
      <SectionHeading
        title="Extracurricular Activities"
        subtitle="Growth through coding, competitions, and continuous learning"
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[210px] mt-10 md:mt-12">
        {activities.map((activity, index) => {
          // First item takes up 2 columns and 2 rows on desktop for that staggered Bento look
          const isLarge = index === 0;

          return (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 flex items-end shadow-lg transition-all duration-500 hover:shadow-cyan-500/20 ${isLarge ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                }`}
            >
              {/* Image filling the exact container bounds */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={activity.src}
                  alt={activity.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-500"></div>

              {/* Content / Info Overlay */}
              <div className="relative z-10 p-5 w-full flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                  <h3 className={`font-bold text-slate-100 ${isLarge ? 'text-2xl mb-1' : 'text-lg leading-tight'}`}>
                    {activity.name}
                  </h3>
                  {activity.designation && (
                    <p className="text-cyan-400 font-medium text-xs mt-1">
                      {activity.designation}
                    </p>
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isLarge
                      ? 'max-h-[100px] opacity-90 mt-2'
                      : 'max-h-0 opacity-0 group-hover:max-h-[100px] group-hover:opacity-100 group-hover:mt-2'
                    }`}
                >
                  <p className="text-slate-300 text-xs opacity-90 line-clamp-3">
                    {activity.quote}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ActivitiesSection;
