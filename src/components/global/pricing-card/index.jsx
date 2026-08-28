"use client";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingCard({ plan, index }) {
    const { title, description, price, duration, billingCycle, isPopular, badge, features } = plan;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className={cn(
                "relative flex flex-col p-8 rounded-xl transition-all duration-300",
                isPopular
                    ? "bg-white dark:bg-neutral-900 border-2 border-primary shadow-2xl shadow-primary/20 md:scale-105 z-10"
                    : "bg-white/50 dark:bg-neutral-900/50 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10"
            )}
        >
            {badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className={cn(
                        "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg",
                        isPopular ? "bg-primary" : "bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900"
                    )}>
                        {badge}
                    </span>
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">{description}</p>
            </div>

            <div className="mb-8 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">₹{price}</span>
            </div>

            <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wide mb-8">
                {billingCycle}
            </p>

            <div className="flex-1">
                <ul className="space-y-4 mb-8">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <div className={cn(
                                "mt-0.5 rounded-full p-1 flex-shrink-0",
                                isPopular ? "bg-primary/10 text-primary" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                            )}>
                                <Check className="w-4 h-4 stroke-[3]" />
                            </div>
                            <span className="text-neutral-700 dark:text-neutral-300 text-[15px] font-medium leading-tight">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <button
                className={cn(
                    "w-full py-4 rounded-xl font-bold text-center transition-all duration-300",
                    isPopular
                        ? "bg-primary text-white hover:bg-[#e0614c] hover:shadow-lg hover:shadow-primary/30"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700"
                )}
            >
                Get Started
            </button>
        </motion.div>
    );
}
