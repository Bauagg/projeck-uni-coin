import { useState } from "react"
import Eventhome from "../../UI/compponents/app_user/home/event"
import ProfileHome from "../../UI/compponents/app_user/home/profile"
import RecentTransaction from "../../UI/compponents/app_user/home/recent-transactions"
import WalletHome from "../../UI/compponents/app_user/home/wallet"
import NavbarUserApp from "../../UI/compponents/app_user/navbar"
import TopUpWalletUser from "../../UI/compponents/wallet"

const HomeUser = () => {
    const [isOpenTopUp, setOpenTopUp] = useState(false)

    return (
        <div className="min-h-screen bg-unicoin-dark text-white pb-5">
            <ProfileHome />
            <WalletHome isOpenTopUp={isOpenTopUp} setOpenTopUp={setOpenTopUp} />
            <Eventhome />
            <RecentTransaction />
            <NavbarUserApp />

            {isOpenTopUp && (
                <TopUpWalletUser onClose={() => setOpenTopUp(false)} />
            )}
        </div>
    )
}

export default HomeUser