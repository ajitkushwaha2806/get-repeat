import { cn } from "@/lib/utils";

export const BentoCard = ({ step, title, description, icon: Icon, className, contentClassName, children }) => {
    return (
        <div className={cn("flex flex-col bg-white dark:bg-zinc-900/50 rounded-xl border border-zinc-200/80 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group", className)}>
            <div className="flex justify-between items-start w-full relative z-10 p-6 md:p-8">
                <div className="text-left pr-4">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{step}. {title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{description}</p>
                </div>
                {/* {Icon && (
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                )} */}
            </div>
            <div className={cn("flex-1 w-full relative bg-zinc-50/80 dark:bg-zinc-950/50 flex z-10 overflow-hidden group-hover:-translate-y-1 transition-transform duration-500 border-t border-zinc-100 dark:border-zinc-800/50", contentClassName)}>
                {children}
            </div>
        </div>
    );
};
