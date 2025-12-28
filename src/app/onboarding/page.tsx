'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Lottie from 'lottie-react';

// --- Placeholder Lottie Imports (User to replace with real IconScout JSONs) ---
// For now, these are null, which triggers the "Beautiful 3D Icon" fallback.
const lottieAnimations: Record<string, any> = {
    safety: null, // import safetyAnim from '@/public/animations/shield.json';
    commerce: null,
    community: null,
    identity: null
};

export default function OnboardingPage() {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const slides = [
        {
            id: 'safety',
            title: "Zero-Lag Safety",
            subtitle: "Trigger an SOS in 2 seconds. Sentinel AI watches over your street.",
            icon: "bi-shield-check",
            lottieId: 'safety',
            color: "text-neon-green",
            glow: "shadow-[0_0_40px_rgba(0,255,42,0.4)]",
            accentBg: "bg-neon-green"
        },
        {
            id: 'commerce',
            title: "Trade with Trust",
            subtitle: "Hire artisans and shop locally with people you can verify.",
            icon: "bi-shop",
            lottieId: 'commerce',
            color: "text-brand-blue",
            glow: "shadow-[0_0_40px_rgba(107,159,237,0.4)]",
            accentBg: "bg-brand-blue"
        },
        {
            id: 'community',
            title: "Your Voice Matters",
            subtitle: "Join the conversation. Build your Reputation. Lead your street.",
            icon: "bi-people-fill",
            lottieId: 'community',
            color: "text-brand-red",
            glow: "shadow-[0_0_40px_rgba(255,107,107,0.4)]",
            accentBg: "bg-brand-red"
        },
        {
            id: 'identity',
            title: "Identity is Power",
            subtitle: "Build your Trust Score. Unlock the Huud Economy.",
            icon: "bi-patch-check-fill",
            lottieId: 'identity',
            color: "text-brand-purple",
            glow: "shadow-[0_0_40px_rgba(159,122,234,0.4)]",
            accentBg: "bg-brand-purple"
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide(prev => prev + 1);
                setIsAnimating(false);
            }, 250);
        } else {
            router.push('/signup');
        }
    };

    const handleSkip = () => {
        router.push('/signup');
    };

    const activeSlide = slides[currentSlide];

    return (
        <div className="min-h-screen bg-soft-bg flex flex-col items-center justify-between py-12 px-6 overflow-hidden relative">
            {/* Background Ambient Glows */}
            <div className={`absolute top-[-20%] left-[-20%] w-[140%] h-[60%] rounded-full blur-[100px] opacity-20 transition-all duration-1000 ${activeSlide.accentBg}`}></div>

            {/* Header: Skip */}
            <div className="w-full flex justify-end z-20">
                <button
                    onClick={handleSkip}
                    className="text-sm font-bold text-charcoal/40 uppercase tracking-widest hover:text-charcoal transition-colors"
                >
                    Skip
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md z-10 gap-12">

                {/* 3D Container (Holds Lottie OR Icon) */}
                <div className={`
                    neumorphic-extreme rounded-[3rem] w-64 h-64 flex items-center justify-center
                    animate-soft-float transition-all duration-500
                    ${isAnimating ? 'scale-90 opacity-0 blur-sm' : 'scale-100 opacity-100 blur-0'}
                `}>

                    {lottieAnimations[activeSlide.lottieId] ? (
                        // --- Lottie Render Mode ---
                        <div className="w-48 h-48">
                            <Lottie
                                animationData={lottieAnimations[activeSlide.lottieId]}
                                loop={true}
                            />
                        </div>
                    ) : (
                        // --- Fallback: Extreme Neumorphism Icon Mode ---
                        <div className={`
                            neumorphic-socket rounded-full w-40 h-40 flex items-center justify-center
                            ${activeSlide.glow} transition-shadow duration-700
                        `}>
                            <i className={`bi ${activeSlide.icon} text-8xl ${activeSlide.color} drop-shadow-md`}></i>
                        </div>
                    )}

                </div>

                {/* Text Content */}
                <div className={`
                    text-center flex flex-col gap-4 transition-all duration-500 delay-100
                    ${isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}
                `}>
                    <h1 className="text-3xl font-light text-charcoal tracking-tight">
                        {activeSlide.title}
                    </h1>
                    <p className="text-deep-text/70 leading-relaxed max-w-xs mx-auto text-lg font-light">
                        {activeSlide.subtitle}
                    </p>
                </div>
            </div>

            {/* Footer: Controls */}
            <div className="w-full max-w-md flex flex-col gap-8 z-20">

                {/* Indicators */}
                <div className="flex justify-center gap-3">
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`
                                h-1.5 rounded-full transition-all duration-500
                                ${currentSlide === idx ? `w-8 ${slide.accentBg}` : 'w-2 bg-charcoal/10'}
                            `}
                        ></div>
                    ))}
                </div>

                {/* Main Action Button */}
                <button
                    onClick={nextSlide}
                    className="neumorphic-btn w-full py-6 rounded-3xl flex items-center justify-center relative overflow-hidden group shadow-xl"
                >
                    <span className="text-charcoal font-black uppercase tracking-[0.3em] z-10 text-base">
                        {currentSlide === slides.length - 1 ? 'Get Started' : 'Continue'}
                    </span>
                    {/* Hover Gradient */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${activeSlide.accentBg}`}></div>
                </button>

                {/* Login Link */}
                <div className="text-center">
                    <span className="text-charcoal/40 font-light text-sm">Already have an account? </span>
                    <Link href="/login" className="text-brand-blue font-bold text-sm hover:underline">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
}
