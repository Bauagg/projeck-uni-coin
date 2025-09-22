import React from "react";
import { Link } from "react-router-dom";
import LogoUniCoin from "../../../assets/image/logo-unicoin-mini.svg";

const floatingCoinClass =
  "absolute flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-black shadow-lg shadow-yellow-400/40 animate-pulse";

const RegisterBranding: React.FC = () => (
  <div className="flex-auto relative flex flex-col justify-center items-center px-8 py-12 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden min-h-[500px]">
    <Link
      to="/"
      className="absolute top-6 md:top-10 left-6 md:left-20 font-semibold text-white/80 hover:text-[#ffc107] z-50"
    >
      Kembali ke Beranda
    </Link>
    {/* Floating coins */}
    <div className="pointer-events-none absolute inset-0 w-full h-full">
      <div className={`${floatingCoinClass} w-10 h-10 left-[10%] top-[10%] animate-float1`}><i className="fa-solid fa-coins" /></div>
      <div className={`${floatingCoinClass} w-10 h-10 right-[15%] top-[20%] animate-float2`}><i className="fa-solid fa-gift" /></div>
      <div className={`${floatingCoinClass} w-10 h-10 left-[20%] bottom-[4%] lg:bottom-[10%]  animate-float3`}><i className="fa-solid fa-fire" /></div>
      <div className={`${floatingCoinClass} w-10 h-10 right-[10%] bottom-[15%] animate-float4`}><i className="fa-solid fa-rocket" /></div>
      <div className={`${floatingCoinClass} w-10 h-10 left-[5%] top-[60%] animate-float5`}><i className="fa-solid fa-star" /></div>
      <div className={`${floatingCoinClass} w-10 h-10 right-[5%] top-[40%] animate-float6`}><i className="fa-solid fa-bolt" /></div>
    </div>
    {/* Hero content */}
    <div className="relative z-10 text-center w-full mx-auto">
      <div
        className="mx-auto  mt-20 sm:mt-24 md:mt-32 mb-8 w-36 h-36 sm:w-28 sm:h-28 md:w-40 md:h-40 bg-gradient-to-br  to-orange-500 rounded-full flex items-center justify-center text-6xl text-black shadow-2xl animate-bounce cursor-pointer transition-transform duration-300 hover:scale-110 hover:rotate-6"
      >
        {/* <i className="fa-solid fa-coins" /> */}
        <img alt="Logo UniCoin" src={LogoUniCoin} />
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-2 bg-gradient-to-r text-yellow-400 to-white bg-clip-text text-transparent animate-pulse">
        UniCoin
      </h1>
      <div className="text-lg font-bold text-yellow-400 mb-1 animate-fadein">Coin of Everyday Life</div>
      <div className="text-base text-white/80 mb-6 animate-fadein delay-100">Belanja, Airdrop, Trading - Semua dalam Satu Ekosistem</div>
      <div className="grid grid-cols-2 gap-4 mt-6 animate-fadein delay-200">
        <div className="rounded-xl bg-white/5 border border-yellow-400/20 p-4 text-center shadow hover:scale-105 transition-all">
          <span className="block text-2xl font-bold text-yellow-400 mb-1">200K+</span>
          <span className="block text-xs text-white/70 font-semibold uppercase">Total Users</span>
        </div>
        <div className="rounded-xl bg-white/5 border border-yellow-400/20 p-4 text-center shadow hover:scale-105 transition-all">
          <span className="block text-2xl font-bold text-yellow-400 mb-1">5K+</span>
          <span className="block text-xs text-white/70 font-semibold uppercase">UMKM Partners</span>
        </div>
        <div className="rounded-xl bg-white/5 border border-yellow-400/20 p-4 text-center shadow hover:scale-105 transition-all">
          <span className="block text-2xl font-bold text-yellow-400 mb-1">10M+</span>
          <span className="block text-xs text-white/70 font-semibold uppercase">Transaksi</span>
        </div>
        <div className="rounded-xl bg-white/5 border border-yellow-400/20 p-4 text-center shadow hover:scale-105 transition-all">
          <span className="block text-2xl font-bold text-yellow-400 mb-1">50M+</span>
          <span className="block text-xs text-white/70 font-semibold uppercase">Coin Tersebar</span>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterBranding;
