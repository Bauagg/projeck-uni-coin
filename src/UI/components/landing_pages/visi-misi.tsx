const VisiMisiComponen = ()=>{
    return(
            <section id="vision" className="py-32 bg-gradient-to-br from-unicoin-gray to-unicoin-dark">
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-20">
                <h2 className="text-5xl font-bold mb-6">Visi & Misi UniCoin</h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                    Membangun masa depan ekonomi digital yang inklusif untuk semua orang
                </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
                <div className="bg-white/3 p-12 rounded-3xl border border-unicoin-yellow/10 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-gradient-to-br from-unicoin-yellow to-unicoin-orange rounded-2xl flex items-center justify-center text-black text-3xl mb-8">
                        <i className="fas fa-eye"></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-6">Visi</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                        Menjadi mata uang digital terdepan yang menghubungkan setiap transaksi harian dengan nilai tambah ekonomi digital, menciptakan ekosistem finansial yang modern, mudah diakses, dan berkelanjutan untuk semua kalangan di Indonesia.
                    </p>
                </div>
                
                <div className="bg-white/3 p-12 rounded-3xl border border-unicoin-yellow/10 backdrop-blur-sm">
                    <div className="w-20 h-20 bg-gradient-to-br from-unicoin-yellow to-unicoin-orange rounded-2xl flex items-center justify-center text-black text-3xl mb-8">
                        <i className="fas fa-rocket"></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-6">Misi</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                        Memberdayakan masyarakat dengan teknologi finansial yang inovatif, mendukung pertumbuhan UMKM lokal, dan menciptakan pengalaman berbelanja yang rewarding melalui sistem cashback dan reward yang transparan, menguntungkan, dan mudah digunakan.
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default VisiMisiComponen