export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Salon Booking. All rights reserved.
      </div>
    </footer>
  );
}
