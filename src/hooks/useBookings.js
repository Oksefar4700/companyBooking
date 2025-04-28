import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useAuth } from "./useAuth";

export function useBooking() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!user) return;
    async function load() {
      const q = query(
        collection(db, "bookings"),
        where("userId", "==", user.uid)
      );
      const snap = await getDocs(q);
      setBookings(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
    load();
  }, [user]);

  return bookings;
}
