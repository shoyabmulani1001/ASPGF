"use client";

import { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Nunito, Cabin } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const cabin = Cabin({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function LeadershipSection() {
    useEffect(() => {
        // Floating up and down animation for badges
        gsap.to(".badge-trust", {
            y: 10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.2,
                from: "random"
            }
        });

        gsap.to(".badge-vision", {
            y: -10,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.2,
                from: "random"
            }
        });
    }, []);

    return (
        <section className="bg-white py-20">
            <div className="max-w-5xl mx-auto px-8 space-y-40">
                {/* ================= SECTION 1: DR. SUSHANT PATIL ================= */}
                <div>
                    <div className="mb-12">
                        <h2 className={`${nunito.className} text-[26px] text-black font-black tracking-tight leading-none pb-2`}>
                            MESSAGE FROM THE FOUNDER
                        </h2>
                        <div className="h-1.5 w-32 bg-black rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                        <div className="relative flex flex-col items-start">


                            <div className="relative group w-full aspect-square max-w-[400px]">
                                {/* Trustworthy Badge - Floating Outside */}
                                <div className="badge-trust absolute -top-3 -left-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Trustworthy
                                </div>

                                <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-transparent border-[6px] border-white relative z-10">
                                    <Image
                                        src="/Images/Sushant-patil.png"
                                        alt="Dr. Sushant Patil"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Vision & Aim Badge - Floating Outside */}
                                <div className="badge-vision absolute -bottom-3 -right-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                    <span className="text-teal-500 text-[10px]">◈</span>
                                    Vision & Aim
                                </div>
                            </div>

                            <div className="mt-6 text-left w-full max-w-[400px]">
                                <h4 className={`${nunito.className} font-extrabold text-[18px] text-black`}>
                                    Dr. Sushant Patil
                                </h4>
                                <p className={`${cabin.className} text-[14px] font-medium text-gray-600`}>Founder</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    A Vision Rooted in Service
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    Global Foundation was established with a deep commitment to
                                    service and social responsibility. Our purpose is to uplift
                                    underserved communities and ensure equal access to
                                    opportunities for growth and dignity.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    Empowering Lives Through Opportunity
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    We believe empowerment begins with access — access to
                                    education, healthcare, skill development, and sustainable
                                    livelihood initiatives that enable individuals to shape their
                                    own future.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    Building Partnerships for Impact
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    Collaboration is the cornerstone of meaningful change. Through
                                    partnerships with communities, volunteers, and institutions,
                                    we strengthen our ability to create measurable and lasting
                                    impact.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    A Future Focused on Sustainability
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    Our long-term vision centers on sustainable development —
                                    fostering self-reliant communities, protecting the
                                    environment, and nurturing leadership that drives positive
                                    transformation for generations to come.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= SECTION 2: ANUJA PATIL ================= */}
                <div>
                    <div className="mb-12">
                        <h2 className={`${nunito.className} text-[26px] text-black font-black tracking-tight leading-none pb-2`}>
                            MESSAGE FROM THE FOUNDER
                        </h2>
                        <div className="h-1.5 w-32 bg-black rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
                        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    A Commitment to Purpose-Driven Change
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    At Global Foundation, our mission begins with compassion and
                                    responsibility. We are dedicated to building inclusive
                                    communities where every individual, regardless of background,
                                    has access to education, opportunity, and dignity.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    Empowering Communities Through Action
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    We believe real change happens at the grassroots level.
                                    Through community-driven initiatives, skill development
                                    programs, and outreach activities, we empower individuals to
                                    become catalysts of transformation within their own
                                    communities.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    Guided by Integrity and Transparency
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    Trust is the foundation of impact. We operate with complete
                                    transparency, measurable outcomes, and ethical governance to
                                    ensure that every effort contributes meaningfully toward
                                    sustainable development.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    Building a Sustainable Future Together
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    Our vision extends beyond short-term relief. We focus on
                                    long-term solutions that create lasting social impact —
                                    strengthening education, healthcare access, livelihood
                                    opportunities, and environmental sustainability for
                                    generations to come.
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-start">

                            <div className="relative group w-full aspect-square max-w-[400px]">
                                {/* Trustworthy Badge - Floating Outside */}
                                <div className="badge-trust absolute -top-3 -left-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Trustworthy
                                </div>

                                <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-transparent border-[6px] border-white relative z-10">
                                    <Image
                                        src="/Images/Anuja-patil.png"
                                        alt="Anuja Patil"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Vision & Aim Badge - Floating Outside */}
                                <div className="badge-vision absolute -bottom-3 -right-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                    <span className="text-teal-500 text-[10px]">◈</span>
                                    Vision & Aim
                                </div>
                            </div>
                            <div className="mt-6 text-left w-full max-w-[400px]">
                                <h4 className={`${nunito.className} font-extrabold text-[18px] text-black`}>
                                    Adv. Anuja Patil
                                </h4>
                                <p className={`${cabin.className} text-[14px] font-medium text-gray-600`}>Founder</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= SECTION 3: DR. SHRIRAM CHAVAN ================= */}
                <div>
                    <div className="mb-12">
                        <h2 className={`${nunito.className} text-[26px] text-black font-black tracking-tight leading-none pb-2`}>
                            MESSAGE FROM PROJECT DIRECTOR
                        </h2>
                        <div className="h-1.5 w-32 bg-black rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
                        {/* RIGHT IMAGE SIDE (Moved to Left) */}
                        <div className="relative flex flex-col items-start">


                            <div className="relative group w-full aspect-square max-w-[400px]">
                                {/* Trustworthy Badge - Floating Outside */}
                                <div className="badge-trust absolute -top-3 -left-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                    Trustworthy
                                </div>

                                <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-transparent border-[6px] border-white relative z-10">
                                    <Image
                                        src="/Images/SHRIRAM.png"
                                        alt="Dr. Shriram Chavan"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Vision & Aim Badge - Floating Outside */}
                                <div className="badge-vision absolute -bottom-3 -right-3 text-black bg-white px-3 py-2.5 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-xl z-20 w-fit">
                                    <span className="text-teal-500 text-[10px]">◈</span>
                                    Vision & Aim
                                </div>
                            </div>

                            <div className="mt-6 text-left w-full max-w-[400px]">
                                <h4 className={`${nunito.className} font-extrabold text-[18px] text-black uppercase`}>
                                    DR. SHRIRAM CHAVAN
                                </h4>
                                <p className={`${cabin.className} text-[14px] font-medium text-gray-600 uppercase tracking-wide`}>
                                    Project Director
                                </p>
                            </div>
                        </div>

                        {/* LEFT CONTENT (Moved to Right) */}
                        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    Turning Vision into Measurable Impact
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    At Global Foundation, our focus is on translating purpose into
                                    practical action. Every initiative is designed to create
                                    measurable outcomes that uplift communities and improve lives.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    Strengthening Systems for Sustainable Growth
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    We build structured programs, transparent governance models,
                                    and accountable systems that ensure long-term sustainability
                                    across education, healthcare, livelihood, and environmental
                                    development initiatives.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    Community-Centered Leadership
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    True development begins with listening. By collaborating with
                                    local stakeholders, volunteers, and partners, we create
                                    inclusive solutions tailored to real community needs.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className={`${nunito.className} font-extrabold text-[16px] text-gray-900`}>
                                    Accountability with Compassion
                                </h3>
                                <p className={`${cabin.className} text-[14px] text-gray-700 leading-relaxed`}>
                                    While compassion drives our mission, accountability ensures
                                    our impact. We continuously evaluate our programs to guarantee
                                    that every contribution creates meaningful and lasting change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
