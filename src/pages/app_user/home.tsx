import { useState } from "react"
import Eventhome from "../../UI/compponents/app_user/home/event"
import ProfileHome from "../../UI/compponents/app_user/home/profile"
import RecentTransaction from "../../UI/compponents/app_user/home/recent-transactions"
import WalletHome from "../../UI/compponents/app_user/home/wallet"
import NavbarUserApp from "../../UI/compponents/app_user/navbar"
import TopUpInputNominal from "../../UI/compponents/wallet/top_up/input_nominal"
import { Building, CreditCard, Smartphone } from "lucide-react"
import BankWalletList from "../../UI/compponents/wallet/top_up/bank_wallet_list"

const HomeUser = () => {
    const [isOpenTopUp, setOpenTopUp] = useState(false)
    const [isOpenBankWallet, setIsOpenBankWallet] = useState(false)
    const [isOpenPaymentDetail, setIsOpenPaymentDetail] = useState(false)
    const [amount, setAmount] = useState('');
    const [selectedMethod, setSelectedMethod] = useState('');
    const [selectedWallet, setSelectedWallet] = useState("unicoin");

    const walletTypes = [
        {
            id: 'unicoin',
            name: 'UniCoin',
            symbol: 'UC',
            rate: 100,
            color: 'from-yellow-400 to-orange-500',
            description: 'Main cryptocurrency for trading & purchases'
        },
        {
            id: 'rupiah',
            name: 'Rupiah',
            symbol: 'Rp',
            rate: 1,
            color: 'from-green-500 to-emerald-500',
            description: 'Cash balance for instant transactions'
        }
    ];

    const selectedWalletData = walletTypes.find(w => w.id === selectedWallet);

    const calculateReceived = () => {
        if (!amount || !selectedWalletData) return 0;
        const numAmount = parseFloat(amount);
        if (selectedWallet === 'unicoin') {
            return Math.floor(numAmount / selectedWalletData.rate);
        }
        return numAmount;
    };

    return (
        <div className="min-h-screen bg-unicoin-dark text-white pb-5">
            <ProfileHome />
            <WalletHome isOpenTopUp={isOpenTopUp} setOpenTopUp={setOpenTopUp} />
            <Eventhome />
            <RecentTransaction />
            <NavbarUserApp />

            {
                isOpenTopUp && (
                    <TopUpInputNominal
                        onClose={() => setOpenTopUp(false)}
                        setIsOpenBankWallet={() => setIsOpenBankWallet(true)}
                        amount={amount}
                        setAmount={setAmount}
                        selectedWalletData={selectedWalletData}
                        walletTypes={walletTypes}
                        calculateReceived={calculateReceived}
                    />
                )
            }


            {
                isOpenBankWallet && (
                    <BankWalletList
                        onClose={() => setIsOpenBankWallet(false)}
                        setIsOpenPaymentDetail={() => setIsOpenPaymentDetail(true)}
                        amount={amount}
                        calculateReceived={calculateReceived}
                        setOpenTopUp={() => setOpenTopUp(!isOpenTopUp)}
                        selectedWalletData={selectedWalletData}
                    />
                )
            }
        </div>
    )
}

export default HomeUser