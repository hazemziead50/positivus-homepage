import SectionHeading from "@/components/common/SectionHeading";
import { caseStudiesData } from "@/data/caseStudies";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        
        <SectionHeading
          title="Case Studies"
          description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
        />

        {/** Desktop */}
        <div className="hidden lg:block">
          <Card className="bg-positivus-dark text-white rounded-[45px] border-none p-12 xl:p-16">
            <CardContent className="p-0 grid grid-cols-3 gap-0">
              {caseStudiesData.map((item, index) => (
                <div
                  key={item.id}
                  className={`flex flex-col justify-between gap-5 ${
                    index !== 0 ? "border-l border-white/20 pl-8 xl:pl-14" : ""
                  } ${index !== caseStudiesData.length - 1 ? "pr-8 xl:pr-14" : ""}`}
                >
                  <p className="text-base xl:text-lg text-white font-normal leading-relaxed">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    className="inline-flex items-center gap-3 text-positivus-green group hover:opacity-80 transition-opacity"
                  >
                    <span className="text-lg font-normal">Learn more</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Mobile & Tablets */}
        <div className="flex flex-col gap-6 lg:hidden">
          {caseStudiesData.map((item) => (
            <Card
              key={item.id}
              className="bg-positivus-dark text-white rounded-[35px] border-none p-8 sm:p-10"
            >
              <CardContent className="p-0 flex flex-col justify-between gap-6 min-h-[170px]">
                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
                  {item.description}
                </p>

                <a
                  href={item.link}
                  className="inline-flex items-center justify-center gap-2 text-positivus-green group hover:opacity-80 transition-opacity"
                >
                  <span className="text-base sm:text-lg font-normal">Learn more</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;