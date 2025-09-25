const FeaturLandingPages = ()=>{
    return(
            <section id="features" className="py-32 bg-unicoin-dark">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
                <h2 className="text-5xl font-bold mb-6">Kenapa Pilih UniCoin?</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Fitur-fitur yang dibuat untuk kemudahan transaksi digital sehari-hari
                </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10">
                <div className="bg-gradient-to-br from-white/5 to-white/2 p-12 rounded-3xl border border-unicoin-yellow/10 backdrop-blur-sm hover:scale-105 hover:border-unicoin-yellow/30 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-unicoin-yellow to-unicoin-orange rounded-2xl flex items-center justify-center text-black text-3xl mb-8">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Super Gampang Dipakai</h3>
                    <p className="text-white/70 leading-relaxed">
                        Cukup scan QR code setelah belanja di merchant partner. Langsung dapet UniCoin otomatis ke wallet web kamu. Simpel dan cepat!
                    </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/2 p-12 rounded-3xl border border-unicoin-yellow/10 backdrop-blur-sm hover:scale-105 hover:border-unicoin-yellow/30 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-unicoin-yellow to-unicoin-orange rounded-2xl flex items-center justify-center text-black text-3xl mb-8">
                        <i className="fas fa-gift"></i>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Cashback Setiap Transaksi</h3>
                    <p className="text-white/70 leading-relaxed">
                        Setiap kali belanja di merchant partner, otomatis dapet cashback dalam bentuk UniCoin. Makin sering transaksi, makin banyak coin yang terkumpul.
                    </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/2 p-12 rounded-3xl border border-unicoin-yellow/10 backdrop-blur-sm hover:scale-105 hover:border-unicoin-yellow/30 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-unicoin-yellow to-unicoin-orange rounded-2xl flex items-center justify-center text-black text-3xl mb-8">
                        <i className="fas fa-fire"></i>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Event Airdrop Seru</h3>
                    <p className="text-white/70 leading-relaxed">
                        Ikuti event-event menarik di merchant partner. Dari promo spesial sampai launching produk baru, selalu ada UniCoin gratis menanti!
                    </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/2 p-12 rounded-3xl border border-unicoin-yellow/10 backdrop-blur-sm hover:scale-105 hover:border-unicoin-yellow/30 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-unicoin-yellow to-unicoin-orange rounded-2xl flex items-center justify-center text-black text-3xl mb-8">
                        <i className="fas fa-exchange-alt"></i>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Tukar Kapan Aja</h3>
                    <p className="text-white/70 leading-relaxed">
                        UniCoin yang udah terkumpul bisa langsung dipake buat diskon atau bahkan jadi saldo e-wallet. Fleksibel sesuai kebutuhan kamu.
                    </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/2 p-12 rounded-3xl border border-unicoin-yellow/10 backdrop-blur-sm hover:scale-105 hover:border-unicoin-yellow/30 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-unicoin-yellow to-unicoin-orange rounded-2xl flex items-center justify-center text-black text-3xl mb-8">
                        <i className="fas fa-users"></i>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Komunitas Kece</h3>
                    <p className="text-white/70 leading-relaxed">
                        Gabung dengan ribuan pengguna lain yang sama-sama memanfaatkan UniCoin. Share tips dan rekomendasi merchant terbaik dalam komunitas yang aktif!
                    </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/2 p-12 rounded-3xl border border-unicoin-yellow/10 backdrop-blur-sm hover:scale-105 hover:border-unicoin-yellow/30 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300">
                    <div className="w-20 h-20 bg-gradient-to-br from-unicoin-yellow to-unicoin-orange rounded-2xl flex items-center justify-center text-black text-3xl mb-8">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Nilai Coin Naik</h3>
                    <p className="text-white/70 leading-relaxed">
                        Bukan cuma poin biasa. UniCoin punya potensi nilai yang bisa berkembang seiring pertumbuhan ekosistem. Investasi sambil berbelanja!
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default FeaturLandingPages