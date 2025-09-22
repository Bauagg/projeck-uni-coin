import { Users, ShoppingCart, Coffee } from 'lucide-react';
import type React from 'react';

interface PortofolioTredingProps {
    userUniCoin: number;
    currentPrice: number;
}

const PortofolioTreding: React.FC<PortofolioTredingProps> = ({ userUniCoin, currentPrice }) => {
    return (
        <div className="trading-card rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 unicoin-yellow">My Portfolio</h3>
            <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 gradient-card rounded-lg">
                    <div className="text-3xl font-bold unicoin-yellow">{userUniCoin} UC</div>
                    <div className="text-sm text-gray-400">Total UniCoin</div>
                    <div className="text-xl font-semibold mt-1">≈ Rp {(userUniCoin * currentPrice).toLocaleString()}</div>
                </div>
                <div className="text-center p-4 gradient-card rounded-lg">
                    <div className="text-3xl font-bold text-green-400">+12.5%</div>
                    <div className="text-sm text-gray-400">Total Return</div>
                    <div className="text-xl font-semibold mt-1">+Rp 125,000</div>
                </div>
            </div>

            <div className="mt-6">
                <h4 className="font-semibold mb-3">Earning Sources</h4>
                <div className="space-y-2">
                    <div className="flex justify-between items-center p-3 gradient-card rounded-lg">
                        <div className="flex items-center space-x-3">
                            <Coffee size={20} className="unicoin-orange" />
                            <span>Coffee Shop Loyalty</span>
                        </div>
                        <span className="font-semibold unicoin-yellow">+450 UC</span>
                    </div>
                    <div className="flex justify-between items-center p-3 gradient-card rounded-lg">
                        <div className="flex items-center space-x-3">
                            <ShoppingCart size={20} className="text-blue-400" />
                            <span>UMKM Purchases</span>
                        </div>
                        <span className="font-semibold unicoin-yellow">+280 UC</span>
                    </div>
                    <div className="flex justify-between items-center p-3 gradient-card rounded-lg">
                        <div className="flex items-center space-x-3">
                            <Users size={20} className="text-purple-400" />
                            <span>Event Airdrops</span>
                        </div>
                        <span className="font-semibold unicoin-yellow">+120 UC</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortofolioTreding