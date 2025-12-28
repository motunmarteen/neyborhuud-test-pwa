'use client';

import React, { useState } from 'react';
import { NeumorphicCard, NeumorphicInset } from '@/components/ui/PremiumCards';

import { StackedGallery } from '@/components/feed/StackedGallery';

export default function FortressFeed() {
    const [view, setView] = useState('FEED');

    // Mock Data for "Statuses" (Instagram Stories)
    const statuses = [
        { id: 0, user: "You", img: "https://i.pravatar.cc/100?u=me", isLive: false },
        { id: 1, user: "Sarah", img: "https://i.pravatar.cc/100?u=sarah", isLive: true },
        { id: 2, user: "Mike", img: "https://i.pravatar.cc/100?u=mike", isLive: false },
        { id: 3, user: "Tunde", img: "https://i.pravatar.cc/100?u=tunde", isLive: false },
        { id: 4, user: "Aisha", img: "https://i.pravatar.cc/100?u=aisha", isLive: true },
    ];

    // Mock Data with Categories
    const posts = [
        {
            type: "TWEET",
            category: "SAFETY",
            user: "Chief Obi",
            handle: "@Chief_Obi_1",
            avatar: "https://i.pravatar.cc/100?u=obi",
            content: "⚠️ Please be careful around the junction tonight. Street lights are out again. I've reported it to the Hub but we need to stay vigilant.",
            time: "2m",
            likes: 24,
            replies: 5,
            echoes: 3,
            views: 450,
            externalShares: 8,
            helpfulVotes: 98,
            isSaved: false,
            verified: true,
            color: "brand-red"
        },
        {
            type: "INSTA",
            category: "EVENT",
            user: "NeyborHuud Events",
            handle: "@Events_Team",
            avatar: "https://i.pravatar.cc/100?u=events",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
            content: "Community Cookout this Saturday! 🍖🥗 Don't forget to bring your rollout mats. It's going to be a vibe!",
            time: "1h",
            likes: 152,
            replies: 12,
            echoes: 45,
            views: 2100,
            externalShares: 120,
            helpfulVotes: 0,
            isSaved: true,
            verified: true,
            color: "neon-green"
        },
        {
            type: "TWEET",
            category: "MARKETPLACE",
            user: "James Ayodeji",
            handle: "@James_Ayo",
            avatar: "https://i.pravatar.cc/100?u=james",
            content: "Anyone know a good plumber that works weekends? My kitchen sink decided to start its own fountain show. 🚿😅",
            time: "3h",
            likes: 8,
            replies: 14,
            echoes: 1,
            views: 89,
            externalShares: 0,
            helpfulVotes: 2,
            isSaved: false,
            verified: false,
            color: "brand-blue"
        },
        {
            type: "INSTA",
            category: "BULLETIN",
            user: "Chiemeka Nwosu",
            handle: "@Chi_Makes",
            avatar: "https://i.pravatar.cc/100?u=chi",
            image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1974&auto=format&fit=crop",
            content: "Just finished this custom landscaped garden for Mrs. K nearby. What do you think Neyborhs? 🌿🌺 #GreenHuud",
            time: "5h",
            likes: 89,
            replies: 21,
            echoes: 12,
            views: 850,
            externalShares: 5,
            helpfulVotes: 15,
            isSaved: false,
            verified: false,
            color: "neon-green"
        },
        {
            type: "GALLERY",
            category: "EVENT",
            user: "Lagos Photo Club",
            handle: "@LagosShooters",
            avatar: "https://i.pravatar.cc/100?u=photo",
            images: [
                "https://images.unsplash.com/photo-1542281286-9e0a16bb7366",
                "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", // Video Test
                "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0",
                "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
                "https://images.unsplash.com/photo-1555793969-56e30520dd90",
                "https://images.unsplash.com/photo-1551972251-12070d63502a",
                "https://images.unsplash.com/photo-1518398046578-8cca57782e39",
                "https://images.unsplash.com/photo-1550989460-0adf9ea622e2",
                "https://images.unsplash.com/photo-1558981420-87aa9dad1c89",
                "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            ],
            content: "Highlights from the Surulere street walk yesterday! We captured 10 amazing moments. Swipe through the stack. 📸✨ #LagosLife",
            time: "30m",
            likes: 420,
            replies: 45,
            echoes: 112,
            views: 5600,
            externalShares: 89,
            helpfulVotes: 0,
            isSaved: true,
            verified: true,
            color: "neon-green"
        }
    ];

    // Helper to get styles based on category
    const getCategoryStyles = (category: string) => {
        switch (category) {
            case 'SAFETY':
                return {
                    border: 'border-brand-red/30',
                    bg: 'bg-brand-red/5',
                    badge: 'text-brand-red bg-brand-red/10 border-brand-red/20',
                    icon: 'bi-exclamation-triangle-fill'
                };
            case 'MARKETPLACE':
                return {
                    border: 'border-brand-blue/30',
                    bg: 'bg-brand-blue/5',
                    badge: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20',
                    icon: 'bi-shop'
                };
            case 'EVENT':
                return {
                    border: 'border-neon-green/30',
                    bg: 'bg-neon-green/5',
                    badge: 'text-neon-green bg-neon-green/10 border-neon-green/20',
                    icon: 'bi-calendar-event-fill'
                };
            default: // BULLETIN
                return {
                    border: 'border-deep-text/10',
                    bg: 'bg-transparent',
                    badge: 'text-deep-text/60 bg-deep-text/5 border-deep-text/10',
                    icon: 'bi-pin-angle-fill'
                };
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground animate-in fade-in duration-700 overflow-x-hidden">
            {/* Mobile-First Header: Optimized Height */}
            <header className="fixed top-0 w-full z-50 glass px-5 py-4 flex justify-between items-center border-b border-charcoal/5">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg border-2 border-white p-1 bg-white">
                        <img
                            src="/icon.png"
                            alt="NeyborHuud Logo"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-light tracking-tighter leading-none uppercase text-charcoal">
                            SURULERE<span className="text-neon-green">CORE</span>
                        </span>
                        <div className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse"></span>
                            <span className="text-[8px] font-light tracking-[0.2em] text-charcoal/50 uppercase">
                                LIVE FEED
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-xl glass flex items-center justify-center text-charcoal active:scale-95 transition-all">
                        <i className="bi bi-search text-lg"></i>
                    </button>
                    <button className="relative w-10 h-10 rounded-xl glass flex items-center justify-center text-charcoal active:scale-95 transition-all">
                        <div className="absolute top-2 right-2 w-2 h-2 bg-brand-red rounded-full border border-white"></div>
                        <i className="bi bi-bell-fill text-lg"></i>
                    </button>
                </div>
            </header>

            <main className="flex-grow pt-28 pb-32 max-w-md mx-auto w-full flex flex-col gap-8">

                {/* Status Reel (Instagram Stories) */}
                <div className="w-full overflow-x-auto no-scrollbar flex gap-4 pb-2 pl-5">
                    <div className="flex flex-col items-center gap-2 flex-shrink-0 group">
                        <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center border border-dashed border-charcoal/30 text-charcoal/40 active:scale-95 transition-all">
                            <i className="bi bi-plus-lg text-2xl"></i>
                        </div>
                        <span className="text-[9px] font-light uppercase tracking-tight text-charcoal/50">Add</span>
                    </div>
                    {statuses.map((status) => (
                        <div key={status.id} className="flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer group active:scale-95 transition-all">
                            <div className={`w-16 h-16 rounded-2xl p-[3px] transition-all duration-300 ${status.isLive ? 'bg-gradient-to-tr from-brand-blue to-neon-green shadow-lg' : 'border border-white/60 glass'}`}>
                                <div className="w-full h-full rounded-[0.8rem] overflow-hidden bg-white border-2 border-white">
                                    <img src={status.img} alt={status.user} className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <span className="text-[9px] font-light uppercase tracking-tight text-charcoal/60">{status.user}</span>
                        </div>
                    ))}
                    {/* Padding right to balance list end */}
                    <div className="w-1 flex-shrink-0"></div>
                </div>

                {/* Hybrid Feed Stream */}
                <div className="flex flex-col gap-6">
                    {posts.map((post, idx) => {
                        const styles = getCategoryStyles(post.category);

                        return (
                            <NeumorphicCard
                                key={idx}
                                className={`flex flex-col gap-0 border border-white/40 overflow-hidden p-0 rounded-none bg-white shadow-[0_4px_30px_rgba(0,255,42,0.1)] hover:shadow-[0_4px_30px_rgba(0,255,42,0.2)] transition-shadow duration-500`}
                            >
                                {/* Header (UserInfo) */}
                                <div className="flex justify-between items-start p-6 pb-2">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md border border-white">
                                            <img src={post.avatar} alt={post.user} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-1">
                                                <span className="text-sm font-black italic uppercase text-charcoal leading-none tracking-tight">{post.user}</span>
                                                {post.verified && <i className="bi bi-patch-check-fill text-brand-blue text-[10px]"></i>}
                                            </div>
                                            <div className="flex items-center gap-2 text-[9px] font-bold text-charcoal/40 uppercase tracking-widest mt-0.5">
                                                <span>{post.handle}</span>
                                                <span className="w-1 h-1 rounded-full bg-charcoal/20"></span>
                                                <span>{post.time}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Meta & Badge */}
                                    <div className="flex flex-col items-end gap-1">
                                        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full border ${styles.badge}`}>
                                            <i className={`bi ${styles.icon} text-[9px]`}></i>
                                            <span className="text-[7px] font-black uppercase tracking-widest">{post.category}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-charcoal/30">
                                            <i className="bi bi-bar-chart-fill text-[10px]"></i>
                                            <span className="text-[9px] font-light">{post.views >= 1000 ? (post.views / 1000).toFixed(1) + 'k' : post.views}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                {post.type === 'TWEET' && (
                                    <div className="px-6 pb-2">
                                        <p className="text-sm font-light text-charcoal/80 leading-relaxed">
                                            {post.content}
                                        </p>
                                    </div>
                                )}

                                {post.type === 'INSTA' && post.image && (
                                    <div className="flex flex-col gap-4">
                                        <div className="w-full h-80 overflow-hidden bg-charcoal/5 relative">
                                            <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
                                        </div>
                                        <p className="text-sm font-light text-charcoal/80 leading-relaxed px-6">
                                            <span className="font-light text-charcoal mr-2 uppercase">{post.handle}</span>
                                            {post.content}
                                        </p>
                                    </div>
                                )}

                                {post.type === 'GALLERY' && post.images && (
                                    <div className="flex flex-col gap-1">
                                        <StackedGallery images={post.images} />
                                        <p className="text-sm font-light text-charcoal/80 leading-relaxed px-6">
                                            <span className="font-light text-charcoal mr-2 uppercase">{post.handle}</span>
                                            {post.content}
                                        </p>
                                    </div>
                                )}

                                {/* Interactions Footer */}
                                <div className="p-6 pt-4 mt-2">
                                    {/* Primary Actions Row */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex gap-4">
                                            {/* Like */}
                                            <button className={`flex items-center gap-1.5 active:scale-90 transition-all ${post.likes > 100 ? 'text-neon-green' : 'text-charcoal/40 hover:text-charcoal'}`}>
                                                <i className={`bi bi-heart${post.likes > 100 ? '-fill' : ''} text-lg`}></i>
                                                <span className="text-xs font-light">{post.likes}</span>
                                            </button>

                                            {/* Comment */}
                                            <button className="flex items-center gap-1.5 text-charcoal/40 hover:text-charcoal active:scale-90 transition-all">
                                                <i className="bi bi-chat text-lg"></i>
                                                <span className="text-xs font-light">{post.replies}</span>
                                            </button>

                                            {/* Echo (Internal Repost) */}
                                            <button className={`flex items-center gap-1.5 active:scale-90 transition-all ${post.echoes > 0 ? 'text-brand-blue' : 'text-charcoal/40 hover:text-charcoal'}`}>
                                                <i className="bi bi-arrow-repeat text-xl"></i>
                                                <span className="text-xs font-light">{post.echoes}</span>
                                            </button>
                                        </div>

                                        {/* External Share & Save */}
                                        <div className="flex gap-4">
                                            <button className="text-charcoal/40 hover:text-charcoal active:scale-90 transition-all" title="Share Externally">
                                                <i className="bi bi-share-fill text-lg"></i>
                                            </button>
                                            <button className={`active:scale-90 transition-all ${post.isSaved ? 'text-neon-green' : 'text-charcoal/40 hover:text-charcoal'}`} title="Save">
                                                <i className={`bi bi-bookmark${post.isSaved ? '-fill' : ''} text-lg`}></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Secondary Context / Helpful Votes */}
                                    {(post.category === 'SAFETY' || post.category === 'BULLETIN' || post.helpfulVotes > 0) && (
                                        <div className="flex items-center justify-between border-t border-charcoal/5 pt-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-yellow-400/10 flex items-center justify-center text-yellow-600">
                                                    <i className="bi bi-lightbulb-fill text-[10px]"></i>
                                                </div>
                                                <span className="text-[10px] font-bold text-charcoal/60">
                                                    Found helpful by <span className="text-charcoal font-black">{post.helpfulVotes} Neyborhs</span>
                                                </span>
                                            </div>
                                            <button className="text-[9px] font-light uppercase text-brand-blue tracking-wider border border-brand-blue/20 px-2 py-1 rounded-md hover:bg-brand-blue/5">
                                                Vote Helpful
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </NeumorphicCard>
                        );
                    })}
                </div>
            </main>

            {/* Mobile Bottom Nav: Native Ergonomics */}
            <nav className="fixed bottom-6 left-6 right-6 z-50">
                <div className="glass border border-white/60 p-3 flex justify-between items-center rounded-[2rem] shadow-2xl backdrop-blur-3xl px-8">
                    <div className="text-neon-green flex flex-col items-center cursor-pointer">
                        <i className="bi bi-grid-fill text-2xl"></i>
                    </div>

                    {/* Center Call to Action */}
                    <div className="w-14 h-14 rounded-full bg-brand-red flex items-center justify-center text-white shadow-xl -translate-y-6 border-[6px] border-background active:scale-90 transition-all cursor-pointer">
                        <i className="bi bi-megaphone-fill text-xl"></i>
                    </div>

                    <div className="text-charcoal/20 flex flex-col items-center cursor-pointer hover:text-charcoal/60 transition-colors">
                        <i className="bi bi-person-fill text-2xl"></i>
                    </div>
                </div>
            </nav>
        </div>
    );
}
