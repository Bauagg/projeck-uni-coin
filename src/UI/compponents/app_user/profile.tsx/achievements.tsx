import "./profile.css"
import { Gift, Target, Crown, Star, Trophy } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        { id: 1, title: "Early Adopter", description: "Bergabung di 1000 user pertama", icon: Crown, unlocked: true, progress: 100 },
        { id: 2, title: "Coffee Enthusiast", description: "Beli kopi di 10 coffee shop berbeda", icon: Trophy, unlocked: true, progress: 100 },
        { id: 3, title: "UMKM Supporter", description: "Belanja di 15 UMKM berbeda", icon: Target, unlocked: true, progress: 100 },
        { id: 4, title: "Loyal Customer", description: "Transaksi 100x dalam sebulan", icon: Star, unlocked: false, progress: 67 },
        { id: 5, title: "Community Builder", description: "Refer 5 teman untuk join", icon: Gift, unlocked: false, progress: 60 },
    ];

    return (
        <div className="space-y-6">
            <div className="profile-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 unicoin-yellow">My Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {achievements.map((achievement) => {
                        const IconComponent = achievement.icon;
                        return (
                            <div
                                key={achievement.id}
                                className={`p-4 rounded-lg border ${achievement.unlocked
                                    ? 'achievement-badge text-black border-yellow-400'
                                    : 'gradient-card border-gray-600'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center space-x-3">
                                        <IconComponent size={24} className={achievement.unlocked ? 'text-black' : 'unicoin-yellow'} />
                                        <div>
                                            <h4 className={`font-semibold ${achievement.unlocked ? 'text-black' : 'text-white'}`}>
                                                {achievement.title}
                                            </h4>
                                            <p className={`text-sm ${achievement.unlocked ? 'text-black/70' : 'text-gray-400'}`}>
                                                {achievement.description}
                                            </p>
                                        </div>
                                    </div>
                                    {achievement.unlocked && (
                                        <div className="w-6 h-6 bg-black/20 rounded-full flex items-center justify-center">
                                            <span className="text-xs">✓</span>
                                        </div>
                                    )}
                                </div>

                                {!achievement.unlocked && (
                                    <div className="mt-3">
                                        <div className="flex justify-between text-sm mb-1">
                                            <span>Progress</span>
                                            <span>{achievement.progress}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="floating-action h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${achievement.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Achievements