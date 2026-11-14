import React from "react";
import { Button } from "@/components/ui/button";
import ctaIllustration from "@/assets/images/cta-illustration.svg";

export const CTA: React.FC = () => {
  return (
    <section className="w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        
        <div className="relative bg-positivus-grey rounded-[35px] md:rounded-[45px] p-8 sm:p-10 md:p-12 lg:px-[60px] lg:py-14 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[340px] gap-8 lg:gap-0">
          
          
          <div className="flex flex-col items-center md:items-center text-center md:text-center w-full lg:flex lg:items-start lg:text-left lg:max-w-[500px] gap-5 sm:gap-6 z-10">
            <h3 className="text-2xl sm:text-3xl font-medium text-positivus-dark tracking-tight">
              Let’s make things happen
            </h3>
            
            <p className="text-base sm:text-lg text-positivus-dark font-normal leading-relaxed">
              Contact us today to learn more about how our digital marketing
              services can help your business grow and succeed online.
            </p>

            <Button
              asChild
              variant="dark"
              size="lg"
              className="w-full sm:w-auto px-8 py-5 text-base sm:text-lg rounded-[14px] mt-2"
            >
              <a href="#contact">Get your free proposal</a>
            </Button>
          </div>

         
          <div className="w-full lg:w-auto flex justify-center lg:absolute lg:right-10 xl:right-16 lg:-top-8 xl:-top-10 z-20 pointer-events-none">
            <img
              src={ctaIllustration}
              alt="Let's make things happen illustration"
              className="w-[240px] sm:w-[280px] md:w-[310px] lg:w-[359px] h-auto max-h-[280px] md:max-h-[320px] lg:max-h-[394px] object-contain select-none"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;