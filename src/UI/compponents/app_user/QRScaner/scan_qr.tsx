import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode, type Html5QrcodeCameraScanConfig } from "html5-qrcode";
import ButtonPrimary from "../../global/button_primary";

interface QRScannerUserProps {
    isControlled?: boolean;
    externalCommand?: "start" | "stop" | null;
    onResult?: (text: string) => void;
}

export default function QRScannerUser({
    externalCommand = null,
    onResult,
}: QRScannerUserProps) {
    const scannerId = useRef("qr-reader");
    const scannerRef = useRef<Html5Qrcode | null>(null);
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        scannerRef.current = new Html5Qrcode(scannerId.current);
        return () => {
            (async () => {
                try {
                    if (scannerRef.current) {
                        await scannerRef.current.stop();
                        await scannerRef.current.clear();
                    }
                } catch { }
            })();
        };
    }, []);

    useEffect(() => {
        if (!externalCommand) return;
        if (externalCommand === "start") startScanner();
        if (externalCommand === "stop") stopScanner();
    }, [externalCommand]);

    const startScanner = async () => {
        if (!scannerRef.current) return;
        try {
            setIsScanning(true);
            const config: Html5QrcodeCameraScanConfig = { fps: 10, qrbox: 250 };

            await scannerRef.current.start(
                { facingMode: "environment" },
                config,
                (decodedText) => {
                    onResult?.(decodedText); // kirim ke parent
                    stopScanner(); // auto stop
                },
                () => { }
            );
        } catch (err) {
            setIsScanning(false);
        }
    };

    const stopScanner = async () => {
        if (!scannerRef.current) return;
        try {
            await scannerRef.current.stop();
            await scannerRef.current.clear();
        } catch (err) {
            console.error("Stop error:", err);
        } finally {
            setIsScanning(false);
        }
    };

    // Function untuk toggle antara start dan stop
    const handleToggleScan = () => {
        if (isScanning) {
            stopScanner();
        } else {
            startScanner();
        }
    };

    return (
        <div className="text-center px-5 w-full md:w-[600px] max-w-full mx-auto">
            {/* Button yang berubah tergantung state */}
            <div className="mb-6">
                <ButtonPrimary
                    onClick={handleToggleScan}
                    label={isScanning ? "Stop Scan" : "Mula Scan"}
                />
            </div>

            {/* Tampilkan instruksi ketika sedang scanning */}
            {isScanning && (
                <p className="text-gray-600 text-sm mb-2">Arahkan kamera ke QR code</p>
            )}

            {/* Container untuk scanner */}
            <div className="relative mx-auto rounded-lg overflow-hidden shadow-lg border-2 border-gray-200 bg-gray-50">
                {/* Placeholder dengan icon camera ketika tidak scanning */}
                {!isScanning && (
                    <div className="flex flex-col items-center justify-center h-64 md:h-80">
                        {/* Camera Icon SVG */}
                        <svg
                            className="w-16 h-16 text-gray-400 mb-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>

                        {/* Text */}
                        <p className="text-gray-500 text-sm">Klik "Mula Scan" untuk memulai</p>
                    </div>
                )}

                {/* Scanner container - akan diisi oleh Html5Qrcode */}
                <div
                    id={scannerId.current}
                    className={`${isScanning ? 'block' : 'hidden'} h-64 md:h-80`}
                />
            </div>
        </div>
    );
}