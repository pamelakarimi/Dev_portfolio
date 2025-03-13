

import type { Metadata } from "next";
import { Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const geistSans = GeistSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = GeistMono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pamela Portfolio",
  description: "Modern & Minimalist",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

// app/layout.tsx (Server Component)
// import type { Metadata } from "next";
// import { Geist as GeistSans, Geist_Mono as GeistMono } from "next/font/google";
// import ClientProvider from "./ClientProvider";

// const geistSans = GeistSans({
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
// });

// const geistMono = GeistMono({
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
// });

// export const metadata: Metadata = {
//   title: "Pamela Portfolio",
//   description: "Modern & Minimalist",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable}`}>
//         <ClientProvider>{children}</ClientProvider>
//       </body>
//     </html>
//   );
// }
