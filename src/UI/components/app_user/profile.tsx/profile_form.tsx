import { Edit3, Camera, Crown } from 'lucide-react';
import type React from 'react';
import InputSecundary from '../../global/imput_secundary';
import SelectSecundary from '../../global/input_option_secundary';
import SelectSearchSecundary from '../../global/input_option_search_secundary';

interface ProfileFormProps {
    setIsEditMode: (val: boolean) => void;
    isEditMode: boolean;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ setIsEditMode, isEditMode }) => {
    const userData = {
        nama_depan: "Ahmad",
        nama_belakang: "Rizki",
        email: "ahmad.rizki@email.com",
        phone: "+62 812-3456-7890",
        nama_usaha: "", // kosong karena user biasa
        jenis_usaha: "", // kosong karena user biasa
        business_address: "", // kosong karena user biasa
        provinsi: "DKI Jakarta",
        kota: "DKI Jakarta",
        joinDate: "Januari 2024",
        totalEarned: 2.450,
        totalSpent: 1.890,
        level: "Gold Member",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        // Additional user-specific data
        favoriteCategory: "food",
        totalMerchants: 15, // jumlah merchant yang pernah dikunjungi
        loyaltyPoints: 2450
    };

    const optionsProvinsi = [
        { value: "DKI Jakarta", label: "DKI Jakarta" },
        { value: "Jawa Barat", label: "Jawa Barat" },
        { value: "Jawa Tengah", label: "Jawa Tengah" },
        { value: "Jawa Timur", label: "Jawa Timur" },
        { value: "Yogyakarta", label: "D.I. Yogyakarta" },
        { value: "Banten", label: "Banten" },
        { value: "Bali", label: "Bali" },
    ];

    // favoriteCategories.ts
    const favoriteCategories = [
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


    return (
        <div className="space-y-6">

            {/* Profile Header */}
            <div className="profile-card rounded-xl p-6">
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <img
                                src={userData.avatar}
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400"
                            />
                            <button className="absolute -bottom-1 -right-1 w-8 h-8 floating-action rounded-full flex items-center justify-center text-black">
                                <Camera size={16} />
                            </button>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">{userData.nama_depan} {userData.nama_belakang}</h2>
                            <p className="text-gray-400">{userData.email}</p>
                            <div className="flex items-center mt-2">
                                <Crown size={16} className="unicoin-yellow mr-1" />
                                <span className="unicoin-yellow font-medium">{userData.level}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsEditMode(!isEditMode)}
                        className="floating-action text-black px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-between"
                    >
                        <Edit3 size={16} className="mr-2" />
                        {isEditMode ? 'Save' : 'Edit'}
                    </button>
                </div>

                {/* Stats Cards - Updated for regular user */}
                {/* Stats Cards - Updated for regular user */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="gradient-card rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold unicoin-yellow truncate" title={userData.totalEarned.toString()}>
                            {userData.totalEarned}
                        </div>
                        <div className="text-sm text-gray-400">Total Earned UC</div>
                    </div>

                    <div className="gradient-card rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-red-400 truncate" title={userData.totalSpent.toString()}>
                            {userData.totalSpent}
                        </div>
                        <div className="text-sm text-gray-400">Total Spent UC</div>
                    </div>

                    <div className="gradient-card rounded-lg p-4 text-center">
                        {/* Hitung selisih lalu tampilkan truncate */}
                        <div
                            className="text-2xl font-bold text-green-400 truncate"
                            title={(userData.totalEarned - userData.totalSpent).toString()}
                        >
                            {userData.totalEarned - userData.totalSpent}
                        </div>
                        <div className="text-sm text-gray-400">Current Balance</div>
                    </div>

                    <div className="gradient-card rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-400 truncate" title={userData.totalMerchants.toString()}>
                            {userData.totalMerchants}
                        </div>
                        <div className="text-sm text-gray-400">UMKM Visited</div>
                    </div>
                </div>

                {/* Profile Form - Updated dengan struktur yang benar */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <InputSecundary
                            label='Nama Depan'
                            value={userData.nama_depan}
                            type='text'
                            name='nama_depan'
                            disabled={!isEditMode}
                        />
                    </div>
                    <div>
                        <InputSecundary
                            label='Nama Belakang'
                            value={userData.nama_belakang}
                            type='text'
                            name='nama_belakang'
                            disabled={!isEditMode}
                        />
                    </div>
                    <div>
                        <InputSecundary
                            label='Email'
                            value={userData.email}
                            type='email'
                            name='email'
                            disabled={!isEditMode}
                        />
                    </div>
                    <div>
                        <InputSecundary
                            label='No. Telepon'
                            value={userData.phone}
                            type='tel'
                            name='no_telepon'
                            disabled={!isEditMode}
                        />
                    </div>
                    <div>
                        <SelectSearchSecundary
                            label='Provinsi'
                            value={userData.provinsi}
                            disabled={!isEditMode}
                            name='provinsi'
                            onChange={() => console.log("tes")}
                            options={optionsProvinsi}
                        />
                    </div>
                    <div>
                        <SelectSearchSecundary
                            label='Kota'
                            value={userData.kota}
                            disabled={!isEditMode}
                            name='kota'
                            onChange={() => console.log("tes")}
                            options={optionsProvinsi}
                        />
                    </div>
                    <div>
                        <SelectSecundary
                            label='Kategori Favorit'
                            value={userData.favoriteCategory}
                            disabled={!isEditMode}
                            name='kategory_favorit'
                            options={favoriteCategories}
                        />
                    </div>
                    <div>
                        <InputSecundary
                            label='Member Sejak'
                            value={userData.joinDate}
                            type='date'
                            name='member_sejak'
                            disabled={!isEditMode}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileForm