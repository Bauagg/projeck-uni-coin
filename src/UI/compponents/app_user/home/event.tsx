import "./home.css"
import { useState } from "react";

interface EventItem {
    id: number;
    title: string;
    description: string;
    reward: string;
    type: string;
    icon: string;
    status: "available" | "progress" | "active" | "completed" | "cooldown";
    bgColor: string;
    cooldown?: string | null;
    progress?: string;
    timeLeft?: string;
    streak?: string;
}

const Eventhome = () => {
    const [events, setEvents] = useState<EventItem[]>([
        {
            id: 1,
            title: "Spin & Win Daily",
            description: "Putar roda beruntung harian",
            reward: "50-500 UniCoin",
            type: "game",
            icon: "🎯",
            status: "available",
            cooldown: null,
            bgColor: "from-purple-500 to-pink-500",
        },
        {
            id: 2,
            title: "UMKM Shopping Challenge",
            description: "Belanja di 5 merchant berbeda",
            reward: "1000 UniCoin",
            type: "challenge",
            icon: "🛍️",
            status: "progress",
            progress: "3/5",
            bgColor: "from-blue-500 to-cyan-500",
        },
        {
            id: 3,
            title: "Kopi Mantap Festival",
            description: "Event weekend di Taman Kota",
            reward: "200 UniCoin",
            type: "airdrop",
            icon: "☕",
            status: "active",
            timeLeft: "2 hari lagi",
            bgColor: "from-orange-500 to-yellow-500",
        },
        {
            id: 4,
            title: "Lucky Numbers",
            description: "Tebak angka beruntung hari ini",
            reward: "100-1000 UniCoin",
            type: "game",
            icon: "🎲",
            status: "available",
            cooldown: null,
            bgColor: "from-green-500 to-emerald-500",
        },
        {
            id: 5,
            title: "Check-in Streak",
            description: "Check-in harian berturut-turut",
            reward: "25 UniCoin",
            type: "daily",
            icon: "📅",
            status: "completed",
            streak: "7 hari",
            bgColor: "from-indigo-500 to-purple-500",
        },
        {
            id: 6,
            title: "Refer a Friend",
            description: "Ajak teman pakai UniCoin",
            reward: "500 UniCoin",
            type: "referral",
            icon: "👥",
            status: "available",
            bgColor: "from-pink-500 to-rose-500",
        },
    ]);

    return (
        <div className="px-5">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Events & Games</h3>
                <span className="text-yellow-400 text-sm">Lihat semua</span>
            </div>

            <div className="space-y-3">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className={`gradient-card rounded-xl p-4 hover:scale-[1.02] transition-all cursor-pointer relative overflow-hidden ${event.status === "completed" ? "opacity-60" : ""
                            }`}
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-r ${event.bgColor} opacity-10`}
                        ></div>
                        <div className="relative flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="text-3xl animate-bounce-slow">{event.icon}</div>
                                <div>
                                    <h4 className="font-semibold text-white">{event.title}</h4>
                                    <p className="text-sm text-gray-300 mb-1">
                                        {event.description}
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full">
                                            {event.reward}
                                        </span>
                                        {event.progress && (
                                            <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                                                Progress: {event.progress}
                                            </span>
                                        )}
                                        {event.timeLeft && (
                                            <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
                                                {event.timeLeft}
                                            </span>
                                        )}
                                        {event.cooldown && (
                                            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                                                Cooldown: {event.cooldown}
                                            </span>
                                        )}
                                        {event.streak && (
                                            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                                                Streak: {event.streak}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                {event.status === "available" && (
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                )}
                                {event.status === "active" && (
                                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                                )}
                                {event.status === "progress" && (
                                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                )}
                                {event.status === "completed" && (
                                    <i className="fas fa-check text-green-500"></i>
                                )}
                                {event.status === "cooldown" && (
                                    <i className="fas fa-clock text-red-400"></i>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Eventhome;
