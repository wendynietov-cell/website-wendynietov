"use client";

import { ReactNode } from "react";
import { RightSidebar } from "./RightSidebar";
import { WhatsAppButton } from "./WhatsAppButton";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Sidebar — fixed, always 80px collapsed, expands as overlay on hover */}
      <RightSidebar />

      {/* Content area — offset by sidebar width on desktop */}
      <div className="md:ml-[80px] flex flex-col min-h-screen">
        {/* Mobile top bar spacer */}
        <div className="md:hidden h-16 shrink-0" />

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </div>
  );
}
