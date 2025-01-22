"use client";

import ServiceCard from "./service-card";
import { OUR_SERVICES } from "@/lib/constants";

function OurServices() {
  return (
    <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-4 py-6 px-4">
      <div className="md:col-span-2 lg:col-span-4">
        <h2 className="text-center">Our Services</h2>
      </div>
      {OUR_SERVICES.map((service) => (
        <ServiceCard
          key={service.title.replaceAll(" ", "_")}
          title={service.title}
          image={service.image}
          path={service.path}
        />
      ))}
    </div>
  );
}

export default OurServices;
