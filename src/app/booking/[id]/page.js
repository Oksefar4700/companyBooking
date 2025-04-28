"use client";
import BookingPage from "../../../components/BookingPage";
export default function ServiceBooking({ params }) {
  return <BookingPage id={params.id} />;
}
