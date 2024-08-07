import userData from "/constants/data";
import React from "react";

export default function Experience() {
  return (
    <section>
      <div className="max-w-3xl mx-auto h-48 text-[#6366F1]">
        <h1 className=" text-6xl md:text-8xl font-bold  text-center md:text-center">
          Experience
        </h1>
      </div>
      <div className="-mt-1">
        <div className="grid grid-cols-1 max-w-xl mx-auto">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2">
                  <div className="w-4 h-4 bg-[#6366F1] rounded-full relative z-10">
                    <div className="w-4 h-4 bg-[#6366F1] rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-600 font-bold ">
        {year}
      </h1>
      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-600">{title}</h1>
      <a href={companyLink} className="text-gray-500">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};
