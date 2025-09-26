import { useState } from "react";
import Eventhome from "../../UI/components/app_user/home/event";
import ProfileHome from "../../UI/components/app_user/home/profile";
import RecentTransaction from "../../UI/components/app_user/home/recent-transactions";
import WalletHome from "../../UI/components/app_user/home/wallet";
import NavbarUserApp from "../../UI/components/app_user/navbar";
import TopUpWalletUser from "../../UI/components/wallet/top_up";
import WithdrawIndexUser from "../../UI/components/wallet/withdraw";
import ConvertIndexUser from "../../UI/components/wallet/convert";

const HomeUser = () => {
  const [isOpenTopUp, setOpenTopUp] = useState(false);
  const [isOpenWithdraw, setOpenWithdraw] = useState(false);
  const [isOpenCnvert, setOpenConvert] = useState(false);
  const [isOpenTransfers, setOpenTransfers] = useState(false);

  return (
    <div className="min-h-screen bg-unicoin-dark text-white pb-5">
      <ProfileHome />
      <WalletHome
        isOpenTopUp={isOpenTopUp}
        setOpenTopUp={setOpenTopUp}
        isOpenWithdraw={isOpenWithdraw}
        setOpenWithdraw={setOpenWithdraw}
      />
      <Eventhome />
      <RecentTransaction />
      <NavbarUserApp />

      {isOpenTopUp && <TopUpWalletUser onClose={() => setOpenTopUp(false)} />}

      {isOpenWithdraw && (
        <WithdrawIndexUser onClose={() => setOpenWithdraw(false)} />
      )}

      {isOpenCnvert && (
        <ConvertIndexUser onClose={() => setOpenConvert(false)} />
      )}
    </div>
  );
};

export default HomeUser;
