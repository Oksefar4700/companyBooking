import ServiceList from "../components/ServiceList";

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Vælg din behandling</h1>
      <ServiceList />
    </>
  );
}
