import "./globals.css";


export const metadata = {
  title: "Chaitanya Yadav",
  description: "Official Website, Chaitanya Yadav to contact professionaly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
      {children}
      </body>
    </html>
  );
}
