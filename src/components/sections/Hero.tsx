
import { Button } from "@/components/ui/button";

import heroIllustration from "@/assets/images/hero-illustration.svg";

import amazonLogo from "@/assets/Logo/amazon.svg";
import dribbbleLogo from "@/assets/Logo/dribbble.svg";
import hubspotLogo from "@/assets/Logo/hubspot.svg";
import notionLogo from "@/assets/Logo/notion.svg";
import netflixLogo from "@/assets/Logo/netflix.svg";
import zoomLogo from "@/assets/Logo/zoom.svg";

const partnerLogos = [
  { name: "Amazon", src: amazonLogo },
  { name: "Dribbble", src: dribbbleLogo },
  { name: "HubSpot", src: hubspotLogo },
  { name: "Notion", src: notionLogo },
  { name: "Netflix", src: netflixLogo },
  { name: "Zoom", src: zoomLogo },
];

function Hero() {
  return (
    <section className="w-full pt-6 pb-16 md:py-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Main Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Text Content */}
          <div className="flex flex-col items-center text-center md:items-center md:text-center lg:items-start lg:text-left gap-7 max-w-xl mx-auto lg:mx-0">

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] pr-4 font-medium leading-[1.15] text-positivus-dark tracking-tight">
              Navigating the digital landscape for success
            </h1>

            

            <p className="text-lg sm:text-xl text-positivus-dark font-normal leading-relaxed">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>

            <Button
              asChild
              variant="dark"
              size="lg"
              className="w-full sm:w-auto px-9 py-5 text-lg"
            >
              <a href="#contact">Book a consultation</a>
            </Button>
          </div>

          

           <div className="order-first lg:order-none flex justify-center lg:justify-end">
                  <img
                    src={heroIllustration}
                    alt="Digital marketing megaphone illustration"
                    className="w-full max-w-[420px] lg:max-w-[600px] h-auto object-contain"
                  />
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16 md:mt-24">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center justify-center h-10 w-28 md:w-32"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-8 md:max-h-9 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
