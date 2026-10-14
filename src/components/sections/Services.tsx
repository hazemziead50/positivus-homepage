import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import { servicesData } from "@/data/services";

 function Services() {
  return (
    <section id="services" className="w-full py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* title and description */}
        <SectionHeading
          title="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />

        {/* cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}  export default Services