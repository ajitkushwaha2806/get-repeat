"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "./helpers/constants";
import Title from "@/components/global/Title"
import { AnimatePresence, motion } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";
import SectionWrapper from "@/components/global/section-wrapper";

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <SectionWrapper
            id="faqs"
            title={
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "200px" }}
                    className="mx-auto mb-12 max-w-3xl text-center"
                >
                    <Title
                        title={
                            <span className="text-3xl md:text-6xl leading-tight inline-block">
                                Frequently Asked <br />
                                <span className="inline-block mt-2 md:mt-4">
                                    <Highlighter action="highlight" color="var(--primary)">
                                        <span className="text-white relative z-10 px-2 py-1">
                                            Questions
                                        </span>
                                    </Highlighter>
                                </span>
                            </span>
                        }
                        description=""
                    />
                </motion.div>
            }
        >
            <div className="space-y-4">
                {FAQS.map((faq, i) => {
                    const Icon = faq.icon;
                    const isOpen = openIndex === i;

                    return (
                        <motion.div
                            key={i}
                            className={`rounded-md border border-neutral-200 dark:border-neutral-700 shadow-lg dark:shadow-black/20 bg-white/70 dark:bg-[#10101a]/70 backdrop-blur transition-colors overflow-hidden`}
                            whileHover={{ scale: 1.01 }}
                        >
                            <button
                                onClick={() => toggle(i)}
                                className={`w-full flex items-center justify-between px-5 py-4 text-left font-medium text-md md:text-lg transition-all duration-300 ${isOpen
                                    ? "bg-primary/10 dark:bg-[#1a183b]/60"
                                    : "hover:bg-primary/5 dark:hover:bg-[#16142f]/40"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className="w-5 h-5 text-primary shrink-0" />
                                    <span className="text-neutral-900 dark:text-white">
                                        {faq.question}
                                    </span>
                                </div>
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                                </motion.div>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-5 text-start py-5 text-sm sm:text-base text-neutral-700 dark:text-gray-300">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}