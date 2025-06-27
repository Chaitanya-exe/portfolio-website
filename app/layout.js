import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Chaitanya Yadav",
  description: "Official Website, Chaitanya Yadav to contact professionaly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Chaitanya Yadav – Applied AI Applications Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Chaitanya Yadav, a passionate developer specializing in applied AI, full-stack development, and backend engineering." />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@geist-font/geist@latest/dist/geist.min.css" />
      </head>
      <body className="bg-[#0e0e10] text-white font-geist">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
