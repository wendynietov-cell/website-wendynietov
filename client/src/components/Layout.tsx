import { ReactNode } from "react";
import { RightSidebar } from "./RightSidebar";
import { WhatsAppButton } from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <RightSidebar />
      
      {/* Main Content Area */}
      <main className="md:pr-[80px] pt-16 md:pt-0 w-full min-h-screen">
        {children}
      </main>
      
      {/* Floating Elements */}
      <WhatsAppButton />
    </div>
  );
}
