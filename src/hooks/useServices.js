import { useState, useEffect } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export function useServices() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    async function load() {
      const snap = await getDocs(collection(db, "services"));
      setServices(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
    load();
  }, []);
  return services;
}
