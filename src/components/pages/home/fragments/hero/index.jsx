"use client";
import { cn } from "@/lib/utils";
import Button from "@/components/global/button";
import { PhoneAnimation } from "./phone-animation";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { GridPattern } from "@/components/ui/grid-pattern";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-30 md:pt-32 pb-16 overflow-hidden">
            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "absolute inset-0 h-full w-full stroke-gray-300/40 fill-gray-300/40 dark:stroke-gray-800/60 dark:fill-gray-800/60 z-0",
                    "[mask-image:linear-gradient(to_bottom,white,transparent_90%)]",
                )}
            />

            <div className="relative z-10 w-[95%] max-w-6xl mx-auto px-3 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                            🚀 Introducing GetRepeat.in
                        </span>
                    </div>

                    <h1 className="mt-8 pb-2 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                        <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.2] text-gray-900 dark:text-white">
                            Turn <span className="text-primary">Every Diner</span> Into{" "}
                            <span className="inline-flex -rotate-1 transform transition-transform hover:rotate-0 duration-500 hover:scale-105 cursor-default mt-2 mx-1 align-middle">
                                <Highlighter action="highlight" color="var(--primary)">
                                    <span className="text-white relative z-10 px-3 py-1 rounded-lg whitespace-nowrap">
                                        Repeat
                                    </span>
                                </Highlighter>
                            </span>{" "}
                            Customer.
                        </div>
                    </h1>

                    <p className="mt-8 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                        Turn every table into a repeat customer. QR ordering that doesn't just take orders — it brings guests back.
                    </p>

                    <div className="mt-10 p-3 flex flex-row items-center gap-3 sm:gap-4 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
                        <Button
                            text="Live Demo"
                            variant="secondary"
                            size="lg"
                            href="https://bite.getrepeat.in"
                            icon={{ icon: PlayCircle, position: "start" }}
                            className="flex-1 sm:w-auto sm:flex-none font-medium rounded-full bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex justify-center px-1 sm:px-8 text-sm sm:text-base whitespace-nowrap"
                        />
                        <Button
                            text="Get Started"
                            variant="primary"
                            size="lg"
                            href="https://app.getrepeat.in"
                            icon={{ icon: ArrowRight, position: "end" }}
                            className="flex-1 sm:w-auto sm:flex-none font-semibold rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex justify-center px-1 sm:px-8 text-sm sm:text-base whitespace-nowrap"
                        />
                    </div>
                </div>

                <div className="lg:col-span-4 relative w-full flex items-center justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-700 delay-700">
                    <PhoneAnimation />
                </div>
            </div>
        </section>
    );
};