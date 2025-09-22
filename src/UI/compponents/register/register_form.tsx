
import React, { useState } from "react";
import InputGlobal from "../global/input";
import SelectGlobal from "../global/input_options";
import TextAreaGlobal from "../global/text_area";
import SelectSearchGlobal from "../global/input_options_search";
import { Link } from "react-router-dom";
import ButtonPrimary from "../global/button_primary";
import CheckboxGlobal from "../global/checbox";

const RegisterForm: React.FC = () => {
  const [role, setRole] = useState<'user' | 'merchant'>('user');
  const [formData, setFormData] = useState({
    nama_depan: "",
    nama_belakang: "",
    email: "",
    phone: "",
    nama_usaha: "",
    jenis_usaha: "",
    business_address: "",
    provinsi: "",
    kota: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const optionsJenisUsaha = [
    { value: "food", label: "Food & Beverage" },
    { value: "coffee", label: "Coffee Shop" },
    { value: "fashion", label: "Fashion & Clothing" },
    { value: "health", label: "Health & Beauty" },
    { value: "services", label: "Services" },
    { value: "electronics", label: "Electronics" },
    { value: "books", label: "Books & Education" },
    { value: "sports", label: "Sports & Fitness" },
    { value: "home", label: "Home & Garden" },
    { value: "automotive", label: "Automotive" },
  ];

  const optionsProvinsi = [
    { value: "DKI Jakarta", label: "DKI Jakarta" },
    { value: "Jawa Barat", label: "Jawa Barat" },
    { value: "Jawa Tengah", label: "Jawa Tengah" },
    { value: "Jawa Timur", label: "Jawa Timur" },
    { value: "Yogyakarta", label: "D.I. Yogyakarta" },
    { value: "Banten", label: "Banten" },
    { value: "Bali", label: "Bali" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submit Data:", formData);
  };


  return (
    <div className="w-full flex-auto items-center justify-center bg-black backdrop-blur-md px-4 py-12 border-l border-yellow-400/10 min-h-[500px]">
      <div className="w-full bg-white/5 border border-yellow-400/10 rounded-2xl shadow-2xl p-8 md:p-12 overflow-y-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">Bergabung Sekarang</h2>
          <p className="text-white/70 text-base">Mulai perjalanan digital yang menguntungkan</p>
        </div>

        {/* Role Selector */}
        <div className="mb-6">
          <div className="text-yellow-400 font-bold mb-2 text-center">Pilih Cara Bergabung:</div>
          <div className="flex gap-4 flex-col sm:flex-row">
            <label className={`flex-1 cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center transition-all ${role === 'user' ? 'border-yellow-400 bg-yellow-400/10 shadow' : 'border-yellow-400/20 bg-white/5'}`}>
              <input type="radio" name="role" value="user" checked={role === 'user'} onChange={() => setRole('user')} className="hidden" />
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 text-black text-xl mb-2 shadow"><i className="fa-solid fa-wallet" /></div>
              <div className="font-bold text-white text-sm mb-1">Coin Collector</div>
              <div className="text-xs text-white/70">Belanja → Dapat Coin</div>
            </label>
            <label className={`flex-1 cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center transition-all ${role === 'merchant' ? 'border-yellow-400 bg-yellow-400/10 shadow' : 'border-yellow-400/20 bg-white/5'}`}>
              <input type="radio" name="role" value="merchant" checked={role === 'merchant'} onChange={() => setRole('merchant')} className="hidden" />
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 text-black text-xl mb-2 shadow"><i className="fa-solid fa-store" /></div>
              <div className="font-bold text-white text-sm mb-1">UMKM Partner</div>
              <div className="text-xs text-white/70">Jual → Bagi Coin</div>
            </label>
          </div>
        </div>

        {/* Benefit Info */}
        {role === 'user' && (
          <div className="mb-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 animate-fadein">
            <div className="flex items-center gap-2 text-yellow-400 font-bold mb-2"><i className="fa-solid fa-gift" /> Keuntungan Collector:</div>
            <ul className="text-xs text-white/90 list-disc pl-5 space-y-1">
              <li>Cashback 1 UniCoin = Rp100 setiap transaksi</li>
              <li>Join airdrop events gratis coin</li>
              <li>Redeem coin jadi saldo e-wallet</li>
              <li>Trading potential nilai naik</li>
            </ul>
          </div>
        )}
        {role === 'merchant' && (
          <div className="mb-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-4 animate-fadein">
            <div className="flex items-center gap-2 text-yellow-400 font-bold mb-2"><i className="fa-solid fa-rocket" /> Keuntungan UMKM:</div>
            <ul className="text-xs text-white/90 list-disc pl-5 space-y-1">
              <li>Dashboard analytics real-time</li>
              <li>Tools create airdrop events</li>
              <li>Program loyalitas otomatis</li>
              <li>Revenue sharing dari trading</li>
              <li>Marketing exposure komunitas</li>
            </ul>
          </div>
        )}

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <InputGlobal
                label="Nama Depan"
                placeholder="Nama depan"
                name="nama_depan"
                required={true}
              />
            </div>
            <div>
              <InputGlobal
                label="Nama Belakang"
                placeholder="Nama belakang"
                name="nama_belakang"
                required={true}
              />
            </div>
          </div>
          <div>
            <InputGlobal
              label="Email"
              type="email"
              placeholder="contoh@email.com"
              name="email"
              required={true}
            />
          </div>
          <div>
            <InputGlobal
              label="Nomor WhatsApp"
              placeholder="08xxxxxxxxxx"
              type="number"
              name="phone"
              required={true}
            />
          </div>

          {/* Field khusus UMKM */}
          {role === 'merchant' && (
            <>
              <div className="border-t border-yellow-400/20 pt-4 mt-2">
                <div className="flex items-center gap-2 text-yellow-400 font-bold mb-2"><i className="fa-solid fa-store" /> Informasi UMKM</div>
                <div className="mb-3">
                  <InputGlobal
                    label="Nama Usaha"
                    placeholder="Nama Usaha"
                    name="nama_usaha"
                    required={true}
                  />
                </div>
                <div className="mb-3">
                  <SelectGlobal
                    label="Jenis Usaha"
                    options={optionsJenisUsaha}
                    required={true}
                    name="jenis_usaha"
                  />
                </div>
                <div className="mb-3">
                  <TextAreaGlobal
                    label="Alamat Lengkap"
                    required={true}
                    name="business_address"
                    placeholder="Jl. Nama Jalan No. 123, RT/RW, Kelurahan, Kecamatan"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <SelectSearchGlobal
                      label="Provinsi"
                      options={optionsProvinsi}
                      value={formData.provinsi}
                      onChange={(val) => handleChange("provinsi", String(val))}
                      required
                    />
                  </div>
                  <div>
                    <SelectSearchGlobal
                      label="Kota"
                      options={optionsProvinsi}
                      value={formData.provinsi}
                      onChange={(val) => handleChange("kota", String(val))}
                      required
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <InputGlobal
                label="Password"
                placeholder="Minimal 8 karakter"
                type="password"
                name="password"
                required={true}
              />
            </div>
            <div>
              <InputGlobal
                label="Konfirmasi Password"
                placeholder="Ulangi password"
                type="password"
                name="confirm_password"
                required={true}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <CheckboxGlobal
                name="persyaratan"
                required={true}
              />
              <label className="leading-tight text-white/80 font-normal">
                Saya menyetujui{" "}
                <Link
                  to={""}
                  className="text-[#ffc107] font-semibold hover:underline hover:text-[#ffc107]"
                >
                  Syarat & Ketentuan
                </Link>{" "}
                dan{" "}
                <Link
                  to={""}
                  className="text-[#ffc107] font-semibold hover:underline hover:text-[#ffc107]"
                >
                  Kebijakan Privasi
                </Link>{" "}
                UniCoin
              </label>
            </div>

          </div>
          <ButtonPrimary
            type="submit"
            label={role === 'merchant' ? 'DAFTAR UMKM PARTNER' : 'MULAI KUMPULKAN COIN'}
          />
        </form>
        <p className="text-[#ffffffb3] text-center mt-3">Sudah punya akun? <Link to={"/login"} className="text-[#ffc107] hover:text-[#ffc107]">Masuk di sini</Link></p>
      </div>
    </div>
  );
};


export default RegisterForm;
