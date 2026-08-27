"use client";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { QrCode, ExternalLink, Menu, Bell, Search, SlidersHorizontal, Home, ClipboardList, ShoppingCart, HeadphonesIcon, User, ChevronRight, CheckCircle2, Gift } from "lucide-react";

const CATEGORIES = [
    { name: "Soups", image: "/assets/images/restaurant/6a8b470d36d4bd6b16b77a72/menu/items/item-1787767283718-48f2bcdb-0853-4dc4-935d-6bd55e093300_card.avif" },
    { name: "Starters", image: "/assets/images/restaurant/6a8b470d36d4bd6b16b77a72/menu/items/item-1787767281989-c8a5a7df-9748-4a97-bdf5-2237ef396bc1_card.avif" },
    { name: "Snacks", image: "/assets/images/restaurant/6a8b470d36d4bd6b16b77a72/menu/items/item-1787767365677-c2e72b89-e104-4bc2-a7a5-6e8b857a5dcc_card.avif" },
    { name: "Dessert", image: "/assets/images/restaurant/6a8b470d36d4bd6b16b77a72/menu/items/item-1787767370169-20889373-ac8b-46a1-8803-22e00072467a_card.avif" }
];
const PRODUCTS = [
    { name: "Jain Pav Bhaji", base_price: 119, image: "/assets/images/restaurant/6a893abad09a8433937c8305/menu/items/item-1787379165606-ee4eb113-eea1-443c-a118-e764ea16f307_thumbnail.avif" },
    { name: "Sweet Corn Pizza", base_price: 99, image: "/assets/images/restaurant/6a8b470d36d4bd6b16b77a72/menu/items/item-1787767276639-372a5163-d3dc-4e97-b5ec-c90758e99fb5_card.avif" },
    { name: "Cheese Burger", base_price: 249, image: "/assets/images/restaurant/6a8b470d36d4bd6b16b77a72/menu/items/item-1787767277664-3e418b00-b325-4ba1-9ffe-75539b241988_card.avif" },
    { name: "Paneer Tikka", base_price: 199, image: "/assets/images/restaurant/6a8b470d36d4bd6b16b77a72/menu/items/item-1787767282330-0ab0087e-f217-475b-ab74-f691b83bed1f_card.avif" },
    { name: "Chole Bhature", base_price: 129, image: "/assets/images/restaurant/6a8b470d36d4bd6b16b77a72/menu/items/item-1787767286825-16f0a001-0537-426c-a4f5-debc8e35bf83_card.avif" },
    { name: "Fried Rice", base_price: 89, image: "/assets/images/restaurant/6a8b470d36d4bd6b16b77a72/menu/items/item-1787767352062-61a94fe4-a0bd-4d4a-8f97-3a6652748678_card.avif" }
];

const ScanPhase = ({ isActive }) => {
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
            "relative flex flex-col items-center justify-center transition-all duration-700",
            isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95 pointer-events-none"
        )}>
            <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">1. Scan to Order</h3>
                <p className="text-base text-zinc-500 dark:text-zinc-400">Point your camera at the table QR</p>
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

const OrderPhase = ({ isActive }) => {
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

const RepeatPhase = ({ isActive }) => (
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

const OrderSuccessPhase = ({ isActive }) => (
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

export const Workflow = () => {
    return (
        <section className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950 overflow-hidden border-t border-zinc-200/50 dark:border-zinc-800/50 min-h-[600px] flex flex-row flex-wrap gap-12 lg:gap-16 items-start justify-center px-4">

            <div className="flex flex-col items-center w-full max-w-[320px]">
                <ScanPhase isActive={true} />
            </div>

            <div className="flex flex-col items-center w-full max-w-[320px]">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">2. Build Your Cart</h3>
                    <p className="text-base text-zinc-500 dark:text-zinc-400">Browse the menu and add items</p>
                </div>
                <div className="relative w-full max-w-[280px] aspect-[9/18.5] bg-white dark:bg-zinc-950 rounded-[2.5rem] border-[8px] border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden shrink-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-b-2xl z-20" />
                    <OrderPhase isActive={true} />
                </div>
            </div>

            <div className="flex flex-col items-center w-full max-w-[320px]">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">3. Instant Processing</h3>
                    <p className="text-base text-zinc-500 dark:text-zinc-400">Seamlessly syncs to the kitchen</p>
                </div>
                <div className="w-full h-[575px] flex items-start justify-center shrink-0 pt-8">
                    <OrderSuccessPhase isActive={true} />
                </div>
            </div>

            <div className="flex flex-col items-center w-full max-w-[320px]">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">4. Drive Retention</h3>
                    <p className="text-base text-zinc-500 dark:text-zinc-400">Turn guests into regulars</p>
                </div>
                <div className="relative w-full max-w-[280px] aspect-[9/18.5] bg-white dark:bg-zinc-950 rounded-[2.5rem] border-[8px] border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden shrink-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-b-2xl z-20" />
                    <RepeatPhase isActive={true} />
                </div>
            </div>

        </section>
    );
};
