import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { CheckCircle2, Utensils, Receipt } from "lucide-react";

export const OrderStatusPhase = ({ isActive }) => {
    const [status, setStatus] = useState(0);

    useEffect(() => {
        if (!isActive) {
            setStatus(0);
            return;
        }
        const t1 = setTimeout(() => setStatus(1), 1500);
        const t2 = setTimeout(() => setStatus(2), 2800);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [isActive]);

    return (
        <div className={cn(
            "absolute inset-0 flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-all duration-700",
            isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105 pointer-events-none"
        )}>
            <div className="px-4 py-6 bg-white dark:bg-zinc-900 z-10 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between shadow-sm">
                <div>
                    <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">Order #482</h3>
                    <p className="text-xs text-zinc-500 font-medium">Table 04</p>
                </div>
                <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider animate-pulse transition-colors duration-500",
                    status === 0 ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-500" :
                        status === 1 ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-500" :
                            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500"
                )}>
                    {status === 0 ? "Accepted" : status === 1 ? "Preparing" : "Served"}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-6 no-scrollbar">
                <div className="flex flex-col relative px-2 mt-2">
                    {/* Background Line */}
                    <div className="absolute top-4 left-6 right-6 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full z-0" />

                    {/* Active Line */}
                    <div className={cn(
                        "absolute top-4 left-6 h-1 bg-primary rounded-full z-0 transition-all duration-700 ease-in-out",
                        status === 0 ? "right-[calc(100%-1.5rem)]" : status === 1 ? "right-1/2" : "right-6"
                    )} />

                    <div className="flex items-start justify-between z-10">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-2">
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-all duration-500 relative",
                                "bg-primary text-white",
                                status === 0 && "ring-4 ring-primary/20"
                            )}>
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wide">Accepted</span>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-2">
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-all duration-500 relative",
                                status >= 1 ? "bg-primary text-white" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border-2 border-zinc-200 dark:border-zinc-700",
                                status === 1 && "ring-4 ring-primary/20"
                            )}>
                                <Utensils className="w-4 h-4" />
                            </div>
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-wide transition-colors duration-500",
                                status >= 1 ? "text-primary" : "text-zinc-400"
                            )}>Preparing</span>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-2">
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-all duration-500 relative",
                                status === 2 ? "bg-primary text-white ring-4 ring-primary/20" : "bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border-2 border-zinc-200 dark:border-zinc-700"
                            )}>
                                <CheckCircle2 className="w-4 h-4" />
                            </div>
                            <span className={cn(
                                "text-[10px] font-bold uppercase tracking-wide transition-colors duration-500",
                                status === 2 ? "text-primary" : "text-zinc-400"
                            )}>Served</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-2xl p-4 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                    <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-zinc-100">
                        <Receipt className="w-4 h-4 text-primary" />
                        <h4 className="font-bold text-sm">Item Summary</h4>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                                <div className="w-4 h-4 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center text-[10px] font-bold text-zinc-500 mt-0.5">1</div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Jain Pav Bhaji</span>
                                    <span className="text-[10px] text-zinc-500">Extra Butter</span>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">₹119</span>
                        </div>
                        <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                                <div className="w-4 h-4 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center text-[10px] font-bold text-zinc-500 mt-0.5">1</div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Paneer Tikka</span>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">₹199</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
