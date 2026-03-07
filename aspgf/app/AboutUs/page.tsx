import { Metadata } from "next";
import AboutClient from "@/Components/AboutUs/AboutClient";
import AboutHero from "@/Components/AboutUs/AboutHero";
import LeadershipSection from "@/Components/AboutUs/LeadershipSection";
import HistorySection from "@/Components/AboutUs/HistorySection";
import StatsSection from "@/Components/StatsSection";

export const metadata: Metadata = {
    title: "About Us | Global Foundation",
    description:
        "Learn about Global Foundation's mission, vision, and leadership committed to empowering communities through education, healthcare, and sustainable development.",
    openGraph: {
        title: "About Us | Global Foundation",
        description:
            "Discover our mission, vision, and leadership driving sustainable social impact.",
        url: "https://yourdomain.com/about",
        siteName: "Global Foundation",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            {/* HERO SECTION specifically for About Us */}
            <AboutHero />

            {/* CLIENT PART */}
            <AboutClient />

            <StatsSection />

            {/* LEADERSHIP PORTFOLIO PART */}
            <LeadershipSection />

            {/* HISTORY PART */}
            <HistorySection />
        </main>
    );
}