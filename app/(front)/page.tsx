// import React from 'react';

import { DashboardPreview } from "@/components/ftrontend/dashboard-preview";
import GridFeatures from "@/components/ftrontend/grid-features";
import HeroSection from "@/components/ftrontend/herosection";
import LogoCloud from "@/components/ftrontend/logo-cloud";
import Pricing from "@/components/ftrontend/pricing";
import TabbedFeatures from "@/components/ftrontend/tabbed-features";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoCloud />
      <DashboardPreview/>
      <GridFeatures />
      <TabbedFeatures />
      <Pricing />
    </div>
  );
}
