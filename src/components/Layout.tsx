"use client";

import { ReactNode } from "react";
import { RightSidebar } from "./RightSidebar";
import { WhatsAppButton } from "./WhatsAppButton";
import { Footer } from "./Footer";
import { BackgroundAtmosphere } from "./BackgroundAtmosphere";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      {/* Animated orbs + mesh grid */}
      <BackgroundAtmosphere />

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Sidebar */}
      <RightSidebar />

      {/* Content — padded below fixed top nav */}
      <div className="flex flex-col min-h-screen relative z-10 pt-[72px]">

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  );
}
