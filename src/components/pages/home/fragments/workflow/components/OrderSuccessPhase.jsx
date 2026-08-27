import { cn } from "@/lib/utils";

export const OrderSuccessPhase = ({ isActive }) => (
    <div className={cn(
        "relative w-full max-w-[320px] flex flex-col items-center justify-center transition-all duration-1000",
        isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95 pointer-events-none"
    )}>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-[3rem] -z-10" />

        <div className="w-48 h-48 mb-8 relative z-10 flex items-center justify-center rounded-[3rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(34,197,94,0.2)]">
            <img src="/assets/images/order-success.gif" alt="Order Success Animation" className="w-full h-full object-cover scale-110" />
        </div>

        <h3 className="text-3xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">Order Placed!</h3>

        <div className="flex items-center justify-center gap-3 text-sm text-zinc-600 dark:text-zinc-300 bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md py-2.5 px-5 rounded-full font-semibold border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm">
            <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            Sending to kitchen...
        </div>
    </div>
);
