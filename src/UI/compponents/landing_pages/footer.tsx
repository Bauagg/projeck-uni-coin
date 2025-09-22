import LogoUnicoin from "../../../assets/image/logo-unicoin.svg"

const FooterLandingPages = ()=>{
    return(
         <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-6 gap-12 mb-12">
                <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                         <img className="h-8 sm:h-10" alt="Image Logo COIN" src={LogoUnicoin} />
                    </div>
                    <p className="text-white/60 leading-relaxed mb-8">
                        Mata uang digital untuk transaksi sehari-hari yang mendukung ekonomi lokal Indonesia dengan sistem cashback dan reward yang menguntungkan.
                    </p>
                    <div>
                        <h4 className="text-unicoin-yellow font-semibold mb-4">Ikuti Kami</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-white/60 hover:text-unicoin-yellow text-2xl transition-colors duration-300">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-white/60 hover:text-unicoin-yellow text-2xl transition-colors duration-300">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-white/60 hover:text-unicoin-yellow text-2xl transition-colors duration-300">
                                <i className="fab fa-telegram"></i>
                            </a>
                            <a href="#" className="text-white/60 hover:text-unicoin-yellow text-2xl transition-colors duration-300">
                                <i className="fab fa-discord"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold text-unicoin-yellow mb-6">Platform</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Web Wallet</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Merchant Dashboard</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Trading Exchange</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">API Developer</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Payment Gateway</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold text-unicoin-yellow mb-6">Layanan</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Cara Kerja</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Merchant Partner</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Cashback Program</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Event Airdrop</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Referral Program</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold text-unicoin-yellow mb-6">Perusahaan</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Tentang Kami</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Tim</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Karir</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Blog</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Press Kit</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold text-unicoin-yellow mb-6">Dukungan</h3>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Pusat Bantuan</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">FAQ</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Kontak</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Live Chat</a></li>
                        <li><a href="#" className="text-white/60 hover:text-unicoin-yellow transition-colors duration-300">Status System</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="pt-8 border-t border-unicoin-yellow/10 text-center">
                <p className="text-white/50">&copy; 2024 UniCoin. Seluruh hak cipta dilindungi. | Terdaftar dan diawasi oleh OJK.</p>
            </div>
        </div>
    </footer>
    )
}

export default FooterLandingPages