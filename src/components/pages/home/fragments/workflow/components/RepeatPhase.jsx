import { cn } from "@/lib/utils";
import { CheckCircle2, Gift, ChevronRight } from "lucide-react";

export const RepeatPhase = ({ isActive }) => (
    <div className={cn(
        "absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 transition-all duration-700 p-6 text-center",
        isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95 pointer-events-none"
    )}>
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
        </div>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Thanks for dining!</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">We hope you enjoyed your meal.</p>

        <div className="w-full p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/10 border border-primary/20 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <Gift className="w-8 h-8 text-primary mb-3 mx-auto" />
            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">10% OFF</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4">Your next visit with us</p>
            <button className="w-full py-2 bg-primary text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-1 hover:bg-primary/90 transition-colors">
                Claim Offer <ChevronRight className="w-4 h-4" />
            </button>
        </div>
    </div>
);
