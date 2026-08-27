"use client";
import { BentoCard } from "./components/BentoCard";
import { ScanPhase } from "./components/ScanPhase";
import { OrderPhase } from "./components/OrderPhase";
import { RepeatPhase } from "./components/RepeatPhase";
import { OrderSuccessPhase } from "./components/OrderSuccessPhase";
import { QrCode, ShoppingCart, CheckCircle2, Gift } from "lucide-react";

export const Workflow = () => {
    return (
        <section className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4 tracking-tight">How it works</h2>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">A seamless dining experience from scan to repeat visits.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

                    <BentoCard
                        step="1"
                        title="Scan to Order"
                        description="Point your camera at the table QR"
                        icon={QrCode}
                        contentClassName="items-center justify-center p-8 min-h-[300px]"
                    >
                        <ScanPhase isActive={true} />
                    </BentoCard>

                    <BentoCard
                        step="2"
                        title="Build Your Cart"
                        description="Browse the menu and add items"
                        icon={ShoppingCart}
                        className="row-span-2"
                        contentClassName="items-end justify-center py-5 px-4"
                    >
                        <div className="relative w-full aspect-[9/16] bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] border-[6px] border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden shrink-0 mt-auto">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded-b-xl z-20" />
                            <OrderPhase isActive={true} />
                        </div>
                    </BentoCard>

                    <BentoCard
                        step="3"
                        title="Instant Processing"
                        description="Seamlessly syncs to the kitchen"
                        icon={CheckCircle2}
                        contentClassName="items-center justify-center p-8 min-h-[300px]"
                    >
                        <OrderSuccessPhase isActive={true} />
                    </BentoCard>

                    <BentoCard
                        step="4"
                        title="Drive Retention"
                        description="Turn guests into regulars"
                        icon={Gift}
                        className="lg:col-span-2"
                        contentClassName="items-end justify-center pt-10 px-4 -mb-8"
                    >
                        <div className="relative w-full aspect-[9/19] bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] border-[6px] border-zinc-200 dark:border-zinc-800 shadow-xl overflow-hidden shrink-0 mt-auto">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-300 dark:bg-zinc-700 rounded-b-xl z-20" />
                            <RepeatPhase isActive={true} />
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
};
