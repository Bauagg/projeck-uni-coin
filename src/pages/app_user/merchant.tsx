import { useState } from "react";
import HeaderMerchantUser from "../../UI/components/app_user/merchant/header"
import NavbarUserApp from "../../UI/components/app_user/navbar"
import StatsBannerMerchantUser from "../../UI/components/app_user/merchant/stats_banner";

const MerchantUser = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    return (
        <div className="min-h-screen bg-unicoin-dark text-white pb-[100px]">
            <HeaderMerchantUser
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                viewMode={viewMode}
                setViewMode={setViewMode}
            />
            <StatsBannerMerchantUser
                activeCategory={activeCategory}
                searchQuery={searchQuery}
                viewMode={viewMode}
            />
            <button className="fixed bottom-24 right-4 floating-action w-14 h-14 rounded-full flex items-center justify-center text-black z-40">
                <i className="fas fa-qrcode text-xl"></i>
            </button>
            <NavbarUserApp />
        </div>
    )
}

export default MerchantUser