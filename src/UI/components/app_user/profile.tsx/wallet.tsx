import { Settings } from "lucide-react"

const WalletProfile = () => {
    return (
        <div className="space-y-6">

            {/* Multiple Wallet Balances */}
            <div className="profile-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 unicoin-yellow">My Wallets</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {/* UniCoin Wallet */}
                    <div className="gradient-card rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold unicoin-yellow">UniCoin</h4>
                            <div className="w-8 h-8 floating-action rounded-full flex items-center justify-center">
                                <span className="text-black font-bold text-sm">UC</span>
                            </div>
                        </div>
                        <div className="text-2xl font-bold">560 UC</div>
                        <div className="text-sm text-gray-400">≈ Rp 56,000</div>
                    </div>

                    {/* UniCoin Mini Wallet */}
                    <div className="gradient-card rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-purple-400">UniCoin Mini</h4>
                            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">M</span>
                            </div>
                        </div>
                        <div className="text-2xl font-bold">1,250 UCM</div>
                        <div className="text-sm text-gray-400">≈ Rp 1,250</div>
                    </div>

                    {/* Rupiah Balance */}
                    <div className="gradient-card rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-green-400">Rupiah</h4>
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">Rp</span>
                            </div>
                        </div>
                        <div className="text-2xl font-bold">Rp 125,000</div>
                        <div className="text-sm text-gray-400">Cash Balance</div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    <button className="floating-action text-black py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                        Top Up
                    </button>
                    <button className="bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                        Withdraw
                    </button>
                    <button className="bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                        Convert
                    </button>
                    <button className="bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                        Transfer
                    </button>
                </div>
            </div>

            {/* Payment Methods */}
            <div className="profile-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold unicoin-yellow">Payment Methods</h3>
                    <button className="text-unicoin-yellow hover:text-unicoin-orange text-sm font-medium">
                        + Add New
                    </button>
                </div>

                <div className="space-y-3">
                    {/* Primary Card */}
                    <div className="gradient-card rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">VISA</span>
                                </div>
                                <div>
                                    <div className="font-medium">**** **** **** 1234</div>
                                    <div className="text-sm text-gray-400">BCA - Primary Card</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Active</span>
                                <button className="text-unicoin-yellow hover:text-unicoin-orange">
                                    <Settings size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Card */}
                    <div className="gradient-card rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">DANA</span>
                                </div>
                                <div>
                                    <div className="font-medium">+62 812-****-7890</div>
                                    <div className="text-sm text-gray-400">DANA Wallet</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full">Inactive</span>
                                <button className="text-unicoin-yellow hover:text-unicoin-orange">
                                    <Settings size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* GoPay */}
                    <div className="gradient-card rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-8 bg-green-600 rounded flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">GPay</span>
                                </div>
                                <div>
                                    <div className="font-medium">+62 812-****-7890</div>
                                    <div className="text-sm text-gray-400">GoPay Wallet</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Active</span>
                                <button className="text-unicoin-yellow hover:text-unicorn-orange">
                                    <Settings size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transaction Limits & Info */}
            <div className="profile-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 unicoin-yellow">Account Limits</h3>

                <div className="grid grid-cols-2 gap-4">
                    <div className="gradient-card rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Daily Top Up Limit</div>
                        <div className="text-lg font-semibold">Rp 1,000,000</div>
                        <div className="text-xs text-green-400 mt-1">Available: Rp 850,000</div>
                    </div>

                    <div className="gradient-card rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Daily Withdraw Limit</div>
                        <div className="text-lg font-semibold">Rp 500,000</div>
                        <div className="text-xs text-green-400 mt-1">Available: Rp 500,000</div>
                    </div>

                    <div className="gradient-card rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Monthly Transaction</div>
                        <div className="text-lg font-semibold">Rp 15,000,000</div>
                        <div className="text-xs text-blue-400 mt-1">Used: Rp 2,450,000</div>
                    </div>

                    <div className="gradient-card rounded-lg p-4">
                        <div className="text-sm text-gray-400 mb-1">Account Level</div>
                        <div className="text-lg font-semibold unicoin-yellow">Gold Member</div>
                        <div className="text-xs text-gray-400 mt-1">Upgrade for higher limits</div>
                    </div>
                </div>
            </div>

            {/* Conversion Rates */}
            <div className="profile-card rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 unicoin-yellow">Available Conversions</h3>

                <div className="space-y-3">
                    {/* RP to UC */}
                    <div className="flex justify-between items-center p-3 gradient-card rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                                <span className="font-medium">Rp 100</span>
                                <span className="text-gray-400">→</span>
                                <span className="font-medium">1 UC</span>
                            </div>
                        </div>
                        <span className="text-green-400 text-sm">No Fee</span>
                    </div>

                    {/* UC to RP */}
                    <div className="flex justify-between items-center p-3 gradient-card rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                                <span className="font-medium">1 UC</span>
                                <span className="text-gray-400">→</span>
                                <span className="font-medium">Rp 100</span>
                            </div>
                        </div>
                        <span className="text-yellow-400 text-sm">1% Fee</span>
                    </div>

                    {/* UCM to UC */}
                    <div className="flex justify-between items-center p-3 gradient-card rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                                <span className="font-medium">100 UCM</span>
                                <span className="text-gray-400">→</span>
                                <span className="font-medium">1 UC</span>
                            </div>
                        </div>
                        <span className="text-green-400 text-sm">No Fee</span>
                    </div>

                    <div className="text-xs text-gray-400 mt-4 p-3 bg-gray-800/30 rounded-lg">
                        <strong>Note:</strong> UCM can only be converted to UC. UC can be converted to RP. RP can be converted to UC.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WalletProfile