import React, { useState } from "react";
import QRScannerUser from "../../UI/compponents/app_user/QRScaner/scan_qr";
import NavbarUserApp from "../../UI/compponents/app_user/navbar";

export default function QRScanner() {
    const [qrResult, setQrResult] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-unicoin-dark text-white pb-20">
            {/* HEADER */}
            <div className="gradient-card sticky top-0 z-50">
                <div className="text-center p-4">
                    <h1 className="text-xl font-bold">QR Scanner</h1>
                </div>
            </div>

            {/* QR SCANNER AUTO START */}
            <QRScannerUser
                onResult={(text) => setQrResult(text)}
            />

            {/* NAVBAR */}
            <NavbarUserApp />
        </div>
    );
}
