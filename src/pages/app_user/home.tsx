import { useState } from "react"
import Eventhome from "../../UI/components/app_user/home/event"
import ProfileHome from "../../UI/components/app_user/home/profile"
import RecentTransaction from "../../UI/components/app_user/home/recent-transactions"
import WalletHome from "../../UI/components/app_user/home/wallet"
import NavbarUserApp from "../../UI/components/app_user/navbar"
import TopUpWalletUser from "../../UI/components/wallet/top_up"

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