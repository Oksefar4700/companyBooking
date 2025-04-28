"use client";
import ServiceCard from "./ServiceCard";
import { useServices } from "../hooks/useServices";

export default function ServiceList() {
  const services = useServices();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
