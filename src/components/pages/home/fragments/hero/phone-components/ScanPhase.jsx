import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { QrCode, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ScanPhase = ({ isActive }) => {
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        if (!isActive) {
            setScanned(false);
            return;
        }
        const t = setTimeout(() => setScanned(true), 1200);
        return () => clearTimeout(t);
    }, [isActive]);

    return (
        <div className={cn(
            "absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 p-6",
            isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95 pointer-events-none"
        )}>
            <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">Scan to Order</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Point your camera at the table QR</p>
            </div>

            <div className="relative">
                <div className="relative w-56 h-56 border-2 border-dashed border-primary/50 rounded-[2rem] flex items-center justify-center bg-primary/5 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary blur-[2px] animate-[scan_2s_ease-in-out_infinite]" />
                    <QrCode className="w-32 h-32 text-primary" strokeWidth={1} />

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                        <div className="w-14 h-14 bg-white rounded-xl shadow-lg p-1.5 flex items-center justify-center border border-zinc-100">
                            <img src="/assets/images/bite-logo.png" alt="Bite Logo" className="w-full h-full rounded-lg object-contain" />
                        </div>
                    </div>

                    <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-primary rounded-tl-[1.5rem]" />
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-primary rounded-tr-[1.5rem]" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-primary rounded-bl-[1.5rem]" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-primary rounded-br-[1.5rem]" />
                </div>

                <AnimatePresence>
                    {scanned && (
                        <motion.div
                            initial={{ opacity: 0, y: 16, scale: 0.75 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.75 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                            className="absolute -top-6 -right-2 flex items-center gap-2.5 bg-white border border-zinc-200 dark:border-zinc-800 p-1.5 pr-2 rounded-md shadow-[0_12px_40px_rgba(0,0,0,0.15)] z-30"
                        >
                            <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                                <ExternalLink className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-xs font-bold text-zinc-900 tracking-wide pr-1">bite.com</span>
                            <div className="bg-primary text-white text-[10px] px-3.5 py-1.5 rounded-md font-bold shrink-0 shadow-sm cursor-pointer hover:bg-primary/90 transition-colors">
                                Open
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};
