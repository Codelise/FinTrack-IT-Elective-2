import "./globals.css";

export const metadata = {
  title: "FinTrack",
  description: "Finance Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
