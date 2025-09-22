import type React from "react";
import "./merchant.css"

interface StatsBannerMerchantUserProps {
    activeCategory: string;
    searchQuery: string;
    viewMode: "grid" | "list";
}

const StatsBannerMerchantUser: React.FC<StatsBannerMerchantUserProps> = ({ activeCategory, searchQuery, viewMode }) => {
    const merchants = [
        {
            id: 1,
            name: "Warung Makan Sari",
            category: "food",
            rating: 4.8,
            distance: "0.2 km",
            cashbackRate: 5,
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
            description: "Masakan rumahan autentik dengan cita rasa tradisional",
            isOpen: true,
            totalTransactions: 1250,
            specialOffer: "Cashback 10% untuk pembelian di atas 50k",
            tags: ["Halal", "Takeaway", "Dine-in"],
            openHours: "06:00 - 22:00"
        },
        {
            id: 2,
            name: "Kopi Nusantara",
            category: "coffee",
            rating: 4.9,
            distance: "0.5 km",
            cashbackRate: 7,
            image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=200&fit=crop",
            description: "Kopi premium dari berbagai daerah di Indonesia",
            isOpen: true,
            totalTransactions: 890,
            specialOffer: "Beli 2 gratis 1 setiap Jumat pagi",
            tags: ["WiFi", "Outdoor", "Premium"],
            openHours: "07:00 - 23:00"
        },
        {
            id: 3,
            name: "Bakso Malang Pak Joko",
            category: "food",
            rating: 4.7,
            distance: "0.8 km",
            cashbackRate: 4,
            image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=200&fit=crop",
            description: "Bakso legendaris dengan kuah kaldu sapi segar",
            isOpen: true,
            totalTransactions: 2100,
            specialOffer: null,
            tags: ["Legendaris", "Takeaway", "Delivery"],
            openHours: "10:00 - 21:00"
        },
        {
            id: 4,
            name: "Toko Fashion Cantik",
            category: "fashion",
            rating: 4.6,
            distance: "1.2 km",
            cashbackRate: 3,
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
            description: "Fashion trendy untuk remaja dan dewasa muda",
            isOpen: false,
            totalTransactions: 560,
            specialOffer: "Diskon 20% untuk member baru",
            tags: ["Trendy", "Affordable", "Local"],
            openHours: "09:00 - 21:00"
        },
        {
            id: 5,
            name: "Apotek Sehat Mandiri",
            category: "health",
            rating: 4.9,
            distance: "0.3 km",
            cashbackRate: 2,
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
            description: "Apotek lengkap dengan konsultasi gratis",
            isOpen: true,
            totalTransactions: 3400,
            specialOffer: "Konsultasi gratis untuk pembelian obat",
            tags: ["24 Jam", "Konsultasi", "Lengkap"],
            openHours: "24 Jam"
        },
        {
            id: 6,
            name: "Salon Kecantikan Ayu",
            category: "services",
            rating: 4.8,
            distance: "0.7 km",
            cashbackRate: 6,
            image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=200&fit=crop",
            description: "Perawatan kecantikan lengkap untuk wanita",
            isOpen: true,
            totalTransactions: 720,
            specialOffer: "Paket treatment 3 bulan dengan harga spesial",
            tags: ["Profesional", "Lengkap", "Wanita"],
            openHours: "08:00 - 20:00"
        }
    ];

    const filteredMerchants = merchants.filter(merchant => {
        const matchCategory = activeCategory === 'all' || merchant.category === activeCategory;
        const matchSearch = merchant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            merchant.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchSearch;
    });

    const handleMerchantClick = (merchant: any) => {
        alert(`Navigating to ${merchant.name} detail page...`);
    };

    return (
        <>
            <div className="p-4">
                <div className="gradient-card rounded-xl p-4 mb-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-yellow-400">{filteredMerchants.length}</div>
                            <div className="text-sm text-gray-400">Merchant Aktif</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-green-400">4.8</div>
                            <div className="text-sm text-gray-400">Rata-rata Rating</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-blue-400">5.2%</div>
                            <div className="text-sm text-gray-400">Avg Cashback</div>
                        </div>
                    </div>
                </div>
            </div>

            {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 gap-4 mx-5">
                    {filteredMerchants.map((merchant) => (
                        <div
                            key={merchant.id}
                            onClick={() => handleMerchantClick(merchant)}
                            className="merchant-card rounded-xl p-4 cursor-pointer"
                        >
                            <div className="flex gap-4">
                                <div className="relative">
                                    <img
                                        src={merchant.image}
                                        alt={merchant.name}
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${merchant.isOpen ? 'bg-green-500' : 'bg-red-500'
                                        }`}></div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-1">
                                        <h3 className="font-semibold text-white text-lg">{merchant.name}</h3>
                                        <div className="flex items-center gap-1">
                                            <i className="fas fa-star text-yellow-400 text-sm"></i>
                                            <span className="text-sm font-medium">{merchant.rating}</span>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-300 mb-2 line-clamp-2">{merchant.description}</p>

                                    <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>{merchant.distance}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <i className="fas fa-clock"></i>
                                            <span>{merchant.openHours}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <i className="fas fa-receipt"></i>
                                            <span>{merchant.totalTransactions} transaksi</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {merchant.tags.slice(0, 2).map((tag, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
                                                Cashback {merchant.cashbackRate}%
                                            </div>
                                        </div>
                                    </div>

                                    {merchant.specialOffer && (
                                        <div className="mt-2 bg-orange-500/20 text-orange-400 p-2 rounded-lg text-xs">
                                            <i className="fas fa-gift mr-1"></i>
                                            {merchant.specialOffer}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-3">
                    {filteredMerchants.map((merchant) => (
                        <div
                            key={merchant.id}
                            onClick={() => handleMerchantClick(merchant)}
                            className="merchant-card rounded-xl overflow-hidden cursor-pointer"
                        >
                            <div className="relative">
                                <img
                                    src={merchant.image}
                                    alt={merchant.name}
                                    className="w-full h-32 object-cover"
                                />
                                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${merchant.isOpen ? 'bg-green-500' : 'bg-red-500'
                                    }`}></div>
                                <div className="absolute bottom-2 left-2 bg-yellow-400/20 backdrop-blur text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
                                    {merchant.cashbackRate}%
                                </div>
                            </div>

                            <div className="p-3">
                                <h3 className="font-semibold text-white text-sm mb-1">{merchant.name}</h3>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-1">
                                        <i className="fas fa-star text-yellow-400 text-xs"></i>
                                        <span className="text-xs">{merchant.rating}</span>
                                    </div>
                                    <span className="text-xs text-gray-400">{merchant.distance}</span>
                                </div>
                                <div className="flex gap-1">
                                    {merchant.tags.slice(0, 2).map((tag, idx) => (
                                        <span key={idx} className="px-1 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>

    )
}

export default StatsBannerMerchantUser