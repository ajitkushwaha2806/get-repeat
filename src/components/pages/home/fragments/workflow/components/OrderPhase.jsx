import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { CATEGORIES, PRODUCTS } from "../constants";
import { Menu, Bell, Search, SlidersHorizontal, Home, ClipboardList, ShoppingCart, HeadphonesIcon, User, ChevronRight } from "lucide-react";

export const OrderPhase = ({ isActive }) => {
    const [addedIndices, setAddedIndices] = useState([]);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (!isActive) {
            setAddedIndices([]);
            if (scrollRef.current) scrollRef.current.scrollTop = 0;
            return;
        }
        const t1 = setTimeout(() => setAddedIndices([0]), 600);
        const t2 = setTimeout(() => {
            if (scrollRef.current) scrollRef.current.scrollTo({ top: 120, behavior: 'smooth' });
        }, 1500);
        const t3 = setTimeout(() => setAddedIndices([0, 3]), 2200);
        const t4 = setTimeout(() => {
            if (scrollRef.current) scrollRef.current.scrollTo({ top: 280, behavior: 'smooth' });
        }, 3200);
        const t5 = setTimeout(() => setAddedIndices([0, 3, 5]), 3900);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            clearTimeout(t5);
        };
    }, [isActive]);

    const addedCount = addedIndices.length;

    return (
        <div className={cn(
            "absolute inset-0 flex flex-col bg-zinc-50 dark:bg-zinc-950 transition-all duration-700",
            isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105 pointer-events-none"
        )}>
            <div className="px-3 pt-6 pb-2 flex items-center justify-between bg-white dark:bg-zinc-900 z-10">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                        <Menu className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                    </div>
                    <img src="/assets/images/bite-logo.png" className="w-8 h-8 rounded-lg object-contain shadow-sm" alt="Logo" />
                    <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 font-medium leading-none">Hi, Ajit Kushwaha 👋</span>
                        <span className="text-xs font-bold text-zinc-900 dark:text-white leading-tight">Bite - Food & Bev...</span>
                    </div>
                </div>
                <div className="relative p-1.5 border border-zinc-200 dark:border-zinc-700 rounded-lg">
                    <Bell className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">3</div>
                </div>
            </div>

            <div className="px-3 py-2 bg-white dark:bg-zinc-900 flex gap-2 z-10">
                <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl">
                    <Search className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="text-xs text-zinc-400">Search your favorite meal...</span>
                </div>
                <div className="p-2 border border-zinc-200 dark:border-zinc-700 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center">
                    <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-300" />
                </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto flex flex-col px-3 py-3 gap-4 pb-24 no-scrollbar relative">
                <div className="w-full h-32 rounded-xl overflow-hidden shrink-0 relative shadow-sm">
                    <img src="/assets/images/storefront-banner.avif" alt="Promo" className="w-full h-full object-cover" />
                </div>

                <div>
                    <h4 className="font-bold text-sm text-zinc-900 dark:text-white mb-3">Explore Categories</h4>
                    <div className="flex gap-3 overflow-hidden">
                        {CATEGORIES.map((cat, i) => (
                            <div key={i} className="flex flex-col items-center gap-1 shrink-0">
                                <div className="w-14 h-14 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 p-0.5 flex items-center justify-center shadow-sm overflow-hidden">
                                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover rounded-md" />
                                </div>
                                <span className="text-[10px] font-medium text-zinc-600 dark:text-zinc-400">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {PRODUCTS.map((prod, i) => (
                        <div key={i} className="bg-white dark:bg-zinc-900 rounded-xl p-2 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col gap-2 relative">
                            <div className="w-full aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden relative">
                                <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                                <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded flex items-center justify-center border border-green-500 z-10">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                            </div>
                            <div className="flex flex-col pb-6">
                                <span className="font-bold text-[11px] text-zinc-900 dark:text-white leading-tight truncate">{prod.name}</span>
                                <span className="text-primary font-bold text-[10px]">₹{prod.base_price}</span>
                            </div>
                            <div className={cn(
                                "absolute bottom-2 right-2 border border-primary text-primary px-3 py-1 rounded text-[10px] font-bold uppercase transition-all duration-300",
                                addedIndices.includes(i) && "bg-primary text-white scale-95 shadow-inner"
                            )}>
                                {addedIndices.includes(i) ? "Added" : "Add"}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={cn(
                "absolute bottom-[60px] left-3 right-3 bg-white dark:bg-zinc-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-zinc-200 dark:border-zinc-700 p-2 flex items-center justify-between z-20 transition-all duration-500",
                addedCount > 0 ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
            )}>
                <div className="flex items-center pl-1">
                    <div className="flex -space-x-2">
                        {addedCount > 0 && (
                            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-100 flex items-center justify-center z-20 shadow-sm overflow-hidden animate-in zoom-in duration-300">
                                <img src={PRODUCTS[addedIndices[0]].image} alt="Cart item" className="w-full h-full object-cover" />
                            </div>
                        )}
                        {addedCount > 1 && (
                            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-100 flex items-center justify-center z-10 shadow-sm overflow-hidden animate-in zoom-in duration-300">
                                <img src={PRODUCTS[addedIndices[1]].image} alt="Cart item" className="w-full h-full object-cover" />
                            </div>
                        )}
                        {addedCount > 2 && (
                            <div className="w-7 h-7 rounded-full border-2 border-white dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center z-0 shadow-sm animate-in zoom-in duration-300">
                                <span className="text-[9px] font-bold text-zinc-600 dark:text-zinc-300">+{addedCount - 2}</span>
                            </div>
                        )}
                    </div>
                    <span className="ml-2 text-xs font-black text-zinc-900 dark:text-white tracking-wide">{addedCount} {addedCount === 1 ? 'ITEM' : 'ITEMS'}</span>
                </div>
                <button className="bg-[#ff6b00] text-white px-3 py-1.5 rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-md hover:bg-[#e66000] transition-colors">
                    Continue <ChevronRight className="w-3.5 h-3.5" />
                </button>
            </div>

            <div className="w-full bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 pb-2 pt-2 px-4 flex justify-between shrink-0">
                <div className="flex flex-col items-center gap-0.5 text-primary">
                    <Home className="w-4 h-4" />
                    <span className="text-[9px] font-bold">HOME</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-zinc-400">
                    <ClipboardList className="w-4 h-4" />
                    <span className="text-[9px] font-medium">MENU</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-zinc-400">
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-[9px] font-medium">CART</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-zinc-400">
                    <HeadphonesIcon className="w-4 h-4" />
                    <span className="text-[9px] font-medium">SUPPORT</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-zinc-400">
                    <User className="w-4 h-4" />
                    <span className="text-[9px] font-medium">PROFILE</span>
                </div>
            </div>
        </div>
    );
};
