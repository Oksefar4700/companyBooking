// src/components/ServiceCard.js
"use client";
import Link from "next/link";

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-[1.02] p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{service.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">
          {service.price} DKK
        </span>
        <Link
          href={`/booking/${service.id}`}
          className="bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-blue-700"
        >
          Book nu
        </Link>
      </div>
    </div>
  );
}
