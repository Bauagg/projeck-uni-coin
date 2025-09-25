import { Link, useNavigate } from "react-router-dom"
import LogoUnicoin from "../../../assets/image/logo-unicoin.svg"
import { useState } from "react"

const NavbarLandingPages = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState<'id' | 'en'>('id');
    const navigator = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'id' ? 'en' : 'id');
    };

    const menuItems = {
        id: {
            home: 'Beranda',
            vision: 'Visi & Misi',
            features: 'Fitur',
            community: 'Komunitas',
            login: 'Masuk',
            register: 'Daftar'
        },
        en: {
            home: 'Home',
            vision: 'Vision & Mission',
            features: 'Features',
            community: 'Community',
            login: 'Login',
            register: 'Register'
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-unicoin-dark/95 backdrop-blur-lg z-50 py-4 border-b border-unicoin-yellow/10">
            <div className="container max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <img className="h-8 sm:h-10" alt="Image Logo COIN" src={LogoUnicoin} />
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 rounded-md text-unicoin-yellow hover:bg-unicoin-yellow/10 transition-colors"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex gap-6 xl:gap-12">
                        <li><a href="#home" className="text-white hover:text-unicoin-yellow transition-colors duration-300 font-medium relative group">
                            {menuItems[language].home}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-unicoin-yellow transition-all duration-300 group-hover:w-full"></span>
                        </a></li>
                        <li><a href="#vision" className="text-white hover:text-unicoin-yellow transition-colors duration-300 font-medium relative group">
                            {menuItems[language].vision}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-unicoin-yellow transition-all duration-300 group-hover:w-full"></span>
                        </a></li>
                        <li><a href="#features" className="text-white hover:text-unicoin-yellow transition-colors duration-300 font-medium relative group">
                            {menuItems[language].features}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-unicoin-yellow transition-all duration-300 group-hover:w-full"></span>
                        </a></li>
                        <li><a href="#community" className="text-white hover:text-unicoin-yellow transition-colors duration-300 font-medium relative group">
                            {menuItems[language].community}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-unicoin-yellow transition-all duration-300 group-hover:w-full"></span>
                        </a></li>
                    </ul>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link to={"/login"} className="px-6 py-2 xl:px-8 xl:py-3 border-2 border-unicoin-yellow text-unicoin-yellow hover:bg-unicoin-yellow hover:text-black transition-all duration-300 rounded-full font-semibold hover:shadow-lg hover:shadow-unicoin-yellow/30">
                        {menuItems[language].login}
                    </Link>
                    <Link to={"/register"} className="px-6 py-2 xl:px-8 xl:py-3 bg-gradient-to-r from-unicoin-yellow to-unicoin-orange text-black hover:scale-105 hover:shadow-lg hover:shadow-unicoin-yellow/40 transition-all duration-300 rounded-full font-bold">
                        {menuItems[language].register}
                    </Link>
                    {/* Language Toggle - Small version */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1 px-2 py-1 text-unicoin-yellow transition-colors duration-300 text-sm border border-white/20 rounded-md hover:border-unicoin-yellow"
                    >
                        <span className="font-medium">{language.toUpperCase()}</span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden w-full ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
                    <nav className="border-t border-unicoin-yellow/10 pt-4">
                        <ul className="flex flex-col gap-4">
                            <li><a href="#home" className="block text-white hover:text-unicoin-yellow transition-colors duration-300 font-medium">
                                {menuItems[language].home}
                            </a></li>
                            <li><a href="#vision" className="block text-white hover:text-unicoin-yellow transition-colors duration-300 font-medium">
                                {menuItems[language].vision}
                            </a></li>
                            <li><a href="#features" className="block text-white hover:text-unicoin-yellow transition-colors duration-300 font-medium">
                                {menuItems[language].features}
                            </a></li>
                            <li><a href="#community" className="block text-white hover:text-unicoin-yellow transition-colors duration-300 font-medium">
                                {menuItems[language].community}
                            </a></li>
                        </ul>
                        <div className="flex flex-col gap-4 mt-4">
                            <button onClick={()=> navigator("/login")} className="w-full text-center px-6 py-2 border-2 border-unicoin-yellow text-unicoin-yellow hover:bg-unicoin-yellow hover:text-black transition-all duration-300 rounded-full font-semibold">
                                {menuItems[language].login}
                            </button>
                            <button onClick={()=> navigator("/register")} className="w-full text-center px-6 py-2 bg-gradient-to-r from-unicoin-yellow to-unicoin-orange text-black hover:scale-105 transition-all duration-300 rounded-full font-bold">
                                {menuItems[language].register}
                            </button>
                            {/* Mobile Language Toggle - Small version */}
                            <button
                                onClick={toggleLanguage}
                                className="w-full text-center px-2 py-1.5 text-unicoin-yellow transition-colors duration-300 text-sm border border-white/20 rounded-md hover:border-unicoin-yellow"
                            >
                                <span className="font-medium">{language.toUpperCase()}</span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavbarLandingPages