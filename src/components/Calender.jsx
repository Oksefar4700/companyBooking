// src/components/Calendar.jsx
"use client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar({ selectedDate, onSelect }) {
  return (
    <div className="mt-4">
      <label className="block text-gray-700 mb-2">Vælg dato & tidspunkt</label>
      <DatePicker
        selected={selectedDate}
        onChange={onSelect}
        showTimeSelect
        dateFormat="Pp"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        placeholderText="Klik for at vælge"
      />
    </div>
  );
}
