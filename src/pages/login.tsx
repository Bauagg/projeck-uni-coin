import React from "react";
import ButtonPrimary from "../UI/components/global/button_primary";
import InputGlobal from "../UI/components/global/input";
import CheckboxGlobal from "../UI/components/global/checbox";
import LogoImage from "../assets/image/logo-unicoin-mini.svg";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigator = useNavigate();

  return (
    <>
      <div className="min-h-screen bg-unicoin-dark font-sans overflow-x-hidden flex items-center justify-center relative">
        {/* Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-unicoin-dark via-unicoin-gray to-unicoin-dark z-0">
          <div className="absolute inset-0 bg-radial animate-float"></div>
        </div>

        {/* Floating Icons */}
        <div className="fixed top-16 left-16 w-16 h-16 bg-unicoin-yellow/10 border-2 border-unicoin-yellow/30 rounded-full flex items-center justify-center text-unicoin-yellow text-2xl animate-float-1 z-[5] pointer-events-none">
          <i className="fas fa-coins"></i>
        </div>
        <div className="fixed top-20 right-20 w-16 h-16 bg-unicoin-yellow/10 border-2 border-unicoin-yellow/30 rounded-full flex items-center justify-center text-unicoin-yellow text-2xl animate-float-2 z-[5] pointer-events-none">
          <i className="fas fa-wallet"></i>
        </div>
        <div className="fixed bottom-20 left-12 w-16 h-16 bg-unicoin-yellow/10 border-2 border-unicoin-yellow/30 rounded-full flex items-center justify-center text-unicoin-yellow text-2xl animate-float-3 z-[5] pointer-events-none">
          <i className="fas fa-gift"></i>
        </div>
        <div className="fixed bottom-16 right-16 w-16 h-16 bg-unicoin-yellow/10 border-2 border-unicoin-yellow/30 rounded-full flex items-center justify-center text-unicoin-yellow text-2x animate-float-4 z-[5] pointer-events-none">
          <i className="fas fa-chart-line"></i>
        </div>

        {/* Link kembali ke beranda */}
        <Link
          to="/"
          className="absolute top-6 md:top-10 left-6 md:left-20 font-semibold text-white/80 hover:text-[#ffc107] z-50"
        >
          Kembali ke Beranda
        </Link>
        <div className="relative z-30 w-full max-w-md mx-4 ">
          <div className="glass-effect border border-unicoin-yellow/20 rounded-3xl p-8 shadow-2xl gradient-border my-16">
            {/* Logo */}
            <div className="text-center mb-10">
              <div className="gap-3 mb-6">
                <div className="flex items-center justify-center">
                  <img
                    alt="Logo Images"
                    width={100}
                    height={100}
                    src={LogoImage}
                  />
                </div>
                <p className="text-unicoin-yellow font-bold text-3xl">
                  UniCoin
                </p>
              </div>
              <h1 className="text-white text-3xl font-semibold mb-2">
                Selamat Datang Kembali!
              </h1>
              <p className="text-white/70">
                Masuk ke akun UniCoin Anda untuk melanjutkan transaksi digital
                yang menguntungkan
              </p>
            </div>

            {/* Login Form */}
            <form
              className="space-y-6"
              onSubmit={() => navigator("/home")}
              autoComplete="off"
            >
              {/* Email Input */}
              <div className="space-y-2">
                <InputGlobal
                  label="Email"
                  required={true}
                  type="email"
                  name="email"
                  placeholder="Masukkan email Anda"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <InputGlobal
                  label="Password"
                  required={true}
                  type="password"
                  name="password"
                  placeholder="Masukkan password Anda"
                />
              </div>

              {/* Form Extras */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-white/80 cursor-pointer">
                  <CheckboxGlobal name="ingat_saya" width={14} height={14} />
                  <span>Ingat saya</span>
                </label>
                <Link
                  to={""}
                  className="text-unicoin-yellow hover:text-unicoin-orange font-medium transition-colors"
                  type="button"
                >
                  Lupa password?
                </Link>
              </div>

              {/* Login Button */}
              <ButtonPrimary type="submit" label="MASUK SEKARANG" />
            </form>

            {/* Divider */}
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-white/20"></div>
              <span className="px-4 text-white/50 text-sm">
                atau masuk dengan
              </span>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-4">
              <button className="input-glass border border-white/20 rounded-xl py-3 flex items-center justify-center gap-2 text-white font-medium hover:bg-white/15 hover:border-unicoin-yellow hover:transform hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-google text-lg"></i>
                <span>Google</span>
              </button>
              <button className="input-glass border border-white/20 rounded-xl py-3 flex items-center justify-center gap-2 text-white font-medium hover:bg-white/15 hover:border-unicoin-yellow hover:transform hover:-translate-y-1 transition-all duration-300">
                <i className="fab fa-facebook text-lg"></i>
                <span>Facebook</span>
              </button>
            </div>

            {/* Register Link */}
            <div className="text-center mt-8 pt-6 border-t border-white/10">
              <span className="text-white/70">Belum punya akun? </span>
              <Link
                to={"/register"}
                className="text-unicoin-yellow hover:text-unicoin-orange font-semibold transition-colors"
              >
                Daftar sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
