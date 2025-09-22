import { User, Settings, Trophy, History, CreditCard, Shield, Bell } from 'lucide-react';
import type React from 'react';

interface NavigationProfileProps {
    setActiveTab: (val: string) => void;
    activeTab: string;
}

interface TabButtonProps {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number }>;
    activeTab: string;
    onClick: (id: string) => void;
    count?: number | string;
}

const NavigationProfile: React.FC<NavigationProfileProps> = ({
    setActiveTab,
    activeTab
}) => {
    const TabButton: React.FC<TabButtonProps> = ({ id, label, icon: Icon, count }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`flex items-center justify-between w-full 
        px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg transition-all duration-300
        ${activeTab === id
                    ? "floating-action text-black font-semibold"
                    : "profile-card text-gray-300 hover:text-white hover:bg-white/5"
                }`}
        >
            <div className="flex items-center space-x-3">
                <Icon size={20} />
                <span className="text-sm sm:text-base">{label}</span>
            </div>
            {count && (
                <span
                    className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full
            ${activeTab === id ? "bg-black/20" : "bg-yellow-500/20 text-yellow-400"}
          `}
                >
                    {count}
                </span>
            )}
        </button>
    );

    return (
        <div className="lg:col-span-1">
            <div className="space-y-2">
                <TabButton id="profile" label="Profile" icon={User} activeTab={activeTab} onClick={setActiveTab} />
                <TabButton id="achievements" label="Achievements" icon={Trophy} count="3" activeTab={activeTab} onClick={setActiveTab} />
                <TabButton id="transactions" label="Transactions" icon={History} activeTab={activeTab} onClick={setActiveTab} />
                <TabButton id="wallet" label="Wallet & Cards" icon={CreditCard} activeTab={activeTab} onClick={setActiveTab} />
                <TabButton id="security" label="Security" icon={Shield} activeTab={activeTab} onClick={setActiveTab} />
                <TabButton id="notifications" label="Notifications" icon={Bell} activeTab={activeTab} onClick={setActiveTab} />
                <TabButton id="settings" label="Settings" icon={Settings} activeTab={activeTab} onClick={setActiveTab} />
            </div>
        </div>
    );
};

export default NavigationProfile;
