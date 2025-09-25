import InputSearchGlobal from "../../global/input_search";
import "./merchant.css"
import React from "react";

interface HeaderMerchantUserProps {
    activeCategory: string;
    setActiveCategory: (val: string) => void;
    searchQuery: string;
    setSearchQuery: (val: string) => void
    viewMode: "grid" | "list";
    setViewMode: React.Dispatch<React.SetStateAction<"grid" | "list">>;
}

const HeaderMerchantUser: React.FC<HeaderMerchantUserProps> = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery, viewMode, setViewMode }) => {
    const categories = [
        { id: 'all', name: 'Semua', icon: 'fas fa-th-large' },
        { id: 'food', name: 'Makanan', icon: 'fas fa-utensils' },
        { id: 'coffee', name: 'Kopi & Teh', icon: 'fas fa-coffee' },
        { id: 'fashion', name: 'Fashion', icon: 'fas fa-tshirt' },
        { id: 'health', name: 'Kesehatan', icon: 'fas fa-heart' },
        { id: 'services', name: 'Jasa', icon: 'fas fa-handshake' }
    ];
    return (
        <div className="gradient-card sticky top-0 z-50">
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl font-bold">Merchant Partner</h1>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                            className="p-2 rounded-lg bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 transition-all"
                        >
                            <i className={`fas ${viewMode === 'grid' ? 'fa-list' : 'fa-th-large'}`}></i>
                        </button>
                        <button className="p-2 rounded-lg bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 transition-all">
                            <i className="fas fa-map-marker-alt"></i>
                        </button>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative mb-4">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <i className="fas fa-search"></i>
                    </div>
                    <InputSearchGlobal
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Cari merchant, makanan, atau layanan..."
                    />
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 overflow-x-auto overflow-y-hidden pb-2 custom-scroll">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`category-pill flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${activeCategory === category.id
                                ? 'bg-yellow-400 text-black font-medium'
                                : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                }`}
                        >
                            <i className={`${category.icon} text-sm`}></i>
                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HeaderMerchantUser