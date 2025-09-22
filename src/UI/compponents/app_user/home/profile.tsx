import "./home.css"
import { useEffect, useState } from "react";

const ProfileHome = () => {
    const [scrolled, setScrolled] = useState(false);
    // const [user, setUser] = useState({
    //     name: "Sarah Wijaya",
    //     level: "Gold Member",
    //     avatar: "https://avatar.iran.liara.run/public"
    // });

    const user = {
        name: "Sarah Wijaya",
        level: "Gold Member",
        avatar: "https://avatar.iran.liara.run/public"
    }

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white/20 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                    <img
                        src={user.avatar}
                        alt="Profile"
                        className="w-12 h-12 rounded-full border-2 border-unicoin-yellow"
                    />
                    <div>
                        <h2 className="font-bold text-lg">{user.name}</h2>
                        <p className="text-sm text-yellow-400">{user.level}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-full bg-yellow-400/20 hover:bg-yellow-400/30 transition-all">
                        <i className="fas fa-bell text-yellow-400"></i>
                    </button>
                    <button className="p-2 rounded-full bg-yellow-400/20 hover:bg-yellow-400/30 transition-all">
                        <i className="fas fa-cog text-yellow-400"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProfileHome