import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export const OrderSuccessPhase = ({ isActive }) => (
    <div className={cn(
        "absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 transition-all duration-700 p-6 text-center",
        isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95 pointer-events-none"
    )}>
        <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping" />
            <CheckCircle2 className="w-10 h-10 text-green-500 relative z-10" />
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Order Placed!</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Sending to kitchen...</p>
    </div>
);
