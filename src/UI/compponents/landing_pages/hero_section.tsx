import { Link } from "react-router-dom"

const HeroSection = ()=>{

    return (
            <section id="home" className="w-full min-h-screen flex items-center relative overflow-hidden pt-20 sm:pt-24 lg:pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-unicoin-dark via-unicoin-gray to-unicoin-dark"></div>
        <div className="absolute inset-0 bg-gradient-radial from-unicoin-yellow/10 via-transparent to-transparent"></div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                    Coin untuk <span className="bg-gradient-to-r from-unicoin-yellow to-unicoin-orange bg-clip-text text-transparent">Semua Orang</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    UniCoin adalah mata uang digital yang mudah digunakan untuk transaksi sehari-hari. Belanja di merchant favorit, dapatkan cashback, dan rasakan kemudahan pembayaran digital yang menguntungkan!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                    <Link to={"/register"} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-unicoin-yellow to-unicoin-orange text-black hover:scale-105 hover:shadow-lg hover:shadow-unicoin-yellow/40 transition-all duration-300 rounded-full font-bold text-base sm:text-lg">
                        Mulai Sekarang
                    </Link>
                    <a href="#" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-unicoin-yellow text-unicoin-yellow hover:bg-unicoin-yellow hover:text-black transition-all duration-300 rounded-full font-semibold text-base sm:text-lg">
                        Pelajari Lebih
                    </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-8">
                    <div className="text-center sm:text-left p-4 sm:p-6 bg-white/5 rounded-2xl border border-unicoin-yellow/10">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-unicoin-yellow mb-2">200K+</div>
                        <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">Total Pengguna</div>
                    </div>
                    <div className="text-center sm:text-left p-4 sm:p-6 bg-white/5 rounded-2xl border border-unicoin-yellow/10">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-unicoin-yellow mb-2">5K+</div>
                        <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">F&B Partner</div>
                    </div>
                    <div className="text-center sm:text-left p-4 sm:p-6 bg-white/5 rounded-2xl border border-unicoin-yellow/10">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-unicoin-yellow mb-2">10M+</div>
                        <div className="text-xs sm:text-sm text-white/70 uppercase tracking-wider">Transaksi</div>
                    </div>
                </div>
            </div>
            
            {/* Illustration Section */}
            <div className="relative flex justify-center items-center mt-12 lg:mt-0">
                {/* Main Coin */}
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-unicoin-yellow to-unicoin-orange rounded-full flex items-center justify-center text-black text-4xl sm:text-6xl lg:text-8xl shadow-2xl shadow-unicoin-yellow/50 animate-float relative">
                    <i className="fa-solid fa-coins"></i>
                    <div className="absolute -inset-5 border-2 border-unicoin-yellow/30 rounded-full animate-rotate"></div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-8 sm:top-16 left-8 sm:left-16 w-12 h-12 sm:w-15 sm:h-15 bg-unicoin-yellow/10 border-2 border-unicoin-yellow/30 rounded-full flex items-center justify-center text-unicoin-yellow text-xl sm:text-2xl animate-float-1">
                    <i className="fa-solid fa-mug-hot"></i>
                </div>
                <div className="absolute top-10 sm:top-20 right-8 sm:right-16 w-12 h-12 sm:w-15 sm:h-15 bg-unicoin-yellow/10 border-2 border-unicoin-yellow/30 rounded-full flex items-center justify-center text-unicoin-yellow text-xl sm:text-2xl animate-float-2">
                    <i className="fa-solid fa-burger"></i>
                </div>
                <div className="absolute bottom-10 sm:bottom-20 left-4 sm:left-8 w-12 h-12 sm:w-15 sm:h-15 bg-unicoin-yellow/10 border-2 border-unicoin-yellow/30 rounded-full flex items-center justify-center text-unicoin-yellow text-xl sm:text-2xl animate-float-3">
                    <i className="fa-solid fa-ice-cream"></i>
                </div>
                <div className="absolute bottom-8 sm:bottom-16 right-12 sm:right-24 w-12 h-12 sm:w-15 sm:h-15 bg-unicoin-yellow/10 border-2 border-unicoin-yellow/30 rounded-full flex items-center justify-center text-unicoin-yellow text-xl sm:text-2xl animate-float-4">
                    <i className="fa-solid fa-pizza-slice"></i>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection