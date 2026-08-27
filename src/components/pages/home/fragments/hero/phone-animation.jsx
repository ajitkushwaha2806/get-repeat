"use client";
import { useState, useEffect } from "react";
import { ScanPhase } from "./phone-components/ScanPhase";
import { OrderPhase } from "./phone-components/OrderPhase";
import { OrderSuccessPhase } from "./phone-components/OrderSuccessPhase";
import { OrderStatusPhase } from "./phone-components/OrderStatusPhase";
import { RepeatPhase } from "./phone-components/RepeatPhase";

export const PhoneAnimation = () => {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        let isMounted = true;
        let timeout;

        const runPhases = () => {
            const durations = [2500, 4500, 2000, 4000, 4500];
            let current = 0;

            const next = () => {
                if (!isMounted) return;
                timeout = setTimeout(() => {
                    current = (current + 1) % durations.length;
                    setPhase(current);
                    next();
                }, durations[current]);
            };
            next();
        };

        runPhases();
        return () => {
            isMounted = false;
            clearTimeout(timeout);
        };
    }, []);

    return (
        <div className="relative w-full max-w-[280px] sm:max-w-[280px] aspect-[9/18.5] bg-white dark:bg-zinc-950 rounded-[2.5rem] border-[8px] border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-visible mx-auto">
            {/* Phone Notch/Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-b-2xl z-50 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-900/20 dark:bg-black/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-900/20 dark:bg-black/40" />
            </div>

            {/* Screen Content Wrapper */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                <ScanPhase isActive={phase === 0} />
                <OrderPhase isActive={phase === 1} />
                <OrderSuccessPhase isActive={phase === 2} />
                <OrderStatusPhase isActive={phase === 3} />
                <RepeatPhase isActive={phase === 4} />
            </div>

            {/* Hardware Buttons */}
            <div className="absolute top-24 -left-[11px] w-1 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-l-md" />
            <div className="absolute top-40 -left-[11px] w-1 h-12 bg-zinc-300 dark:bg-zinc-700 rounded-l-md" />
            <div className="absolute top-32 -right-[11px] w-1 h-16 bg-zinc-300 dark:bg-zinc-700 rounded-r-md" />
        </div>
    );
};
