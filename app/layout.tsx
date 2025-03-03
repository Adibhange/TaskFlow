import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "TaskFlow - Organize, Collaborate, Achieve | Your All-in-One Task & Project Management Tool",
  description:
    "TaskFlow: Your ultimate productivity hub for organizing tasks, projects, and goals. Streamline workflows, collaborate with teams, and achieve more with intuitive tools designed to simplify task management. Track progress, set deadlines, and stay on top of your work—all in one powerful, user-friendly platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
