// src/components/BookingForm.js
"use client";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useAuth } from "../hooks/useAuth";
import Calendar from "./Calendar";

export default function BookingForm({ service }) {
  const { user } = useAuth();
  const [date, setDate] = useState(null);
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Du skal være logget ind for at booke.");

    await addDoc(collection(db, "bookings"), {
      serviceId: service.id,
      userId: user.uid,
      date: date.toISOString(),
      note,
      createdAt: new Date().toISOString(),
    });
    alert("Din tid er nu booket!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-12 p-8 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-serif text-gray-900 mb-4">
        Book: {service.name}
      </h2>
      <p className="mb-6 text-gray-700">
        Pris:{" "}
        <span className="font-bold text-blue-600">{service.price} DKK</span>
      </p>

      <Calendar selectedDate={date} onSelect={setDate} />

      <textarea
        placeholder="Bemærkninger (valgfrit)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full h-24 mt-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <button
        type="submit"
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
      >
        Bekræft booking
      </button>
    </form>
  );
}
