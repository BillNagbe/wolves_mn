import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-screen p-6">
          <section className="book border-4 border-black rounded-lg inset-shadow-sm h-screen flex flex-col gap-4 md:grid md:grid-cols-3 md:grid-rows-5 md:gap-4 lg:">
              {children}
          </section>
        </main>
      </body>
    </html>
  );
}
