import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarUserApp = () => {
    const [navbar, setNavbar] = useState("Home");
    const [scrolled, setScrolled] = useState(false);
    const navigation = useNavigate()
    const location = useLocation();
    const currentPage = location.pathname.split("/")[1];

    useEffect(() => {
        switch (currentPage) {
            case "home":
                setNavbar("Home");
                break;
            case "merchant-user":
                setNavbar("Merchant");
                break;
            case "qrs-canner":
                setNavbar("Scan");
                break;
            case "trading":
                setNavbar("Trading");
                break;
            case "profile-user":
                setNavbar("Profile");
                break;
            default:
                setNavbar(""); // fallback kalau route gak dikenal
                break;
        }
    }, [currentPage]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed bottom-0 left-0 right-0 gradient-card ${scrolled ? "bg-white/20 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
            <div className="grid grid-cols-5 py-3">
                {[
                    { icon: "fas fa-home", label: "Home", url: "/home" },
                    { icon: "fas fa-store", label: "Merchant", url: "/merchant-user" },
                    { icon: "fas fa-qrcode", label: "Scan", url: "/qrs-canner" },
                    { icon: "fas fa-chart-line", label: "Trading", url: "/trading" },
                    { icon: "fas fa-user", label: "Profile", url: "/profile-user" }
                ].map((nav, idx) => (
                    <button
                        onClick={() => {
                            setNavbar(nav.label)
                            navigation(nav.url)
                        }}
                        key={idx}
                        className={`flex flex-col items-center gap-1 py-2 ${nav.label === navbar ? 'text-yellow-400' : 'text-gray-400'}`}
                    >
                        <i className={`${nav.icon} text-lg`}></i>
                        <span className="text-xs">{nav.label}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default NavbarUserApp