import Providers from "./Providers";

import "./globals.css";
// import AuthGuard from "./components/AuthGuard";

export const metadata = {
  title: "FinTrack",
  description: "Finance Tracker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
