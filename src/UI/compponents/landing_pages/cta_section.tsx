import { Link } from "react-router-dom"

const CtaSection = ()=>{
    return(
           <section id="community" className="py-24 bg-gradient-to-br from-unicoin-gray to-unicoin-dark text-center relative">
        <div className="absolute inset-0 bg-gradient-radial from-unicoin-yellow/10 via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-8 relative z-10">
            <h2 className="text-5xl font-bold mb-6">Siap Bergabung dengan UniCoin?</h2>
            <p className="text-xl text-white/70 mb-12">
                Mulai transaksi digital yang lebih menguntungkan dengan UniCoin sekarang juga!
            </p>
            <Link to={"/register"} className="inline-block px-12 py-4 bg-gradient-to-r from-unicoin-yellow to-unicoin-orange text-black hover:scale-105 hover:shadow-lg hover:shadow-unicoin-yellow/40 transition-all duration-300 rounded-full font-bold text-xl">
                Mulai Sekarang
            </Link>
        </div>
    </section>
    )
}

export default CtaSection