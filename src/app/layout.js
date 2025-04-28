// src/app/layout.js
import "./globals.css";
import { AuthProvider } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Salon Booking",
  description: "Book nemt din tid hos Salon",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="da">
        <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}
