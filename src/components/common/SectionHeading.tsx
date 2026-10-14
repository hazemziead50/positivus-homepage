import React from "react";

export interface SectionHeadingProps {
  title: string;
  description: string;
  className?: string;
  
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-10 mb-10 md:mb-16 text-center lg:text-left ${className}`}
    >

      <h2 className="inline-block bg-positivus-green text-positivus-dark font-medium text-3xl md:text-4xl px-2.5 py-1 rounded-[7px] shrink-0">
        {title}
      </h2>

   
      <p className="text-base md:text-lg text-positivus-dark font-normal max-w-[580px]">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;