import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { type ServiceItem } from "@/data/services";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const cardThemes = {
    grey: "bg-positivus-grey text-positivus-dark border-positivus-dark",
    green: "bg-positivus-green text-positivus-dark border-positivus-dark",
    dark: "bg-positivus-dark text-white border-positivus-dark",
  };

  const badgeThemes = {
    green: "bg-positivus-green text-positivus-dark",
    white: "bg-white text-positivus-dark",
  };

  const isDark = service.theme === "dark";

  return (
    <Card
      className={`w-full rounded-[35px] md:rounded-[45px] border border-positivus-dark p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0px_5px_0px_#191A23] transition-all duration-300 hover:-translate-y-1 ${cardThemes[service.theme]}`}
    >
      <CardContent className="p-0 h-full flex flex-col justify-between">
       
        <div className="flex flex-col-reverse justify-between items-center md:grid md:grid-cols-2 md:items-center gap-6 md:gap-8 h-full">
          
          {/* titles and button*/}
          <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left w-full h-full gap-6 md:gap-8">
            
            {/* titles*/}
            <div className="flex flex-col items-center md:items-start  w-full">
              <span
                className={`text-xl sm:text-2xl font-medium px-2 py-0.5 rounded-[7px] leading-snug break-words ${badgeThemes[service.badgeTheme]}`}
              >
                {service.titlePart1}
              </span>
              <span
                className={`text-xl sm:text-2xl font-medium px-2 py-0.5 rounded-[7px] leading-snug break-words ${badgeThemes[service.badgeTheme]}`}
              >
                {service.titlePart2}
              </span>
            </div>

            {/* learn more button*/}
            <div className="w-full flex justify-center md:justify-start mt-2 md:mt-auto">
              <a
                href={service.link}
                className="inline-flex items-center gap-3 group"
                aria-label={`Learn more about ${service.titlePart1} ${service.titlePart2}`}
              >
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:rotate-45 ${
                    isDark
                      ? "bg-white text-positivus-dark"
                      : "bg-positivus-dark text-positivus-green"
                  }`}
                >
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </span>
                <span
                  className={`inline-block text-base sm:text-lg font-normal ${
                    isDark ? "text-white" : "text-positivus-dark"
                  }`}
                >
                  Learn more
                </span>
              </a>
            </div>
          </div>

          {/* illustration*/}
          <div className="w-full flex items-center justify-center md:justify-end py-2 md:py-0">
            <img
              src={service.image}
              alt={`${service.titlePart1} ${service.titlePart2}`}
              className="w-full max-w-[190px] sm:max-w-[220px] md:max-w-[210px] h-auto max-h-[160px] md:max-h-[190px] object-contain select-none"
              loading="lazy"
            />
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;