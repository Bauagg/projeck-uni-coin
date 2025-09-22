import { Bell, LogOut, Settings } from "lucide-react"
import NavbarUserApp from "../../UI/compponents/app_user/navbar"
import ImageLogo from "../../assets/image/logo-unicoin-mini.svg"
import { useState } from "react";
import NavigationProfile from "../../UI/compponents/app_user/profile.tsx/navigation_button_profile";
import ProfileForm from "../../UI/compponents/app_user/profile.tsx/profile_form";
import Achievements from "../../UI/compponents/app_user/profile.tsx/achievements";
import TransactionProfile from "../../UI/compponents/app_user/profile.tsx/transactions";
import WalletProfile from "../../UI/compponents/app_user/profile.tsx/wallet";
import Security from "../../UI/compponents/app_user/profile.tsx/security";

const ProfileUser = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <div className="min-h-screen bg-unicoin-dark text-white pb-20">
            {/* Header */}
            <div className="gradient-card border-b border-gray-800">
                <div className="max-w-6xl mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                <img alt="Image Logo" src={ImageLogo} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-white">My Profile</h1>
                                <p className="text-sm unicoin-yellow">Manage your UniCoin account</p>
                            </div>
                        </div>

                        <button className="floating-action text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center">
                            <LogOut size={18} className="mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <NavigationProfile activeTab={activeTab} setActiveTab={setActiveTab} />
                    <div className="lg:col-span-3">
                        {
                            activeTab === "profile" && (
                                <ProfileForm setIsEditMode={setIsEditMode} isEditMode={isEditMode} />
                            )
                        }
                        {
                            activeTab === "achievements" && (
                                <Achievements />
                            )
                        }
                        {
                            activeTab === "transactions" && (
                                <TransactionProfile />
                            )
                        }
                        {
                            activeTab === "wallet" && (
                                <WalletProfile />
                            )
                        }
                        {
                            activeTab === "security" && (
                                <Security />
                            )
                        }

                        {(activeTab === 'notifications' || activeTab === 'settings') && (
                            <div className="profile-card rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4 unicoin-yellow">
                                    {activeTab === 'notifications' ? 'Notification Settings' : 'App Settings'}
                                </h3>
                                <div className="text-center py-12 text-gray-400">
                                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                                        {activeTab === 'notifications' ? <Bell size={24} /> : <Settings size={24} />}
                                    </div>
                                    <p>Coming soon...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="fixed bottom-0 left-0 right-0 lg:relative">
                <NavbarUserApp />
            </div>
        </div>
    )
}

export default ProfileUser