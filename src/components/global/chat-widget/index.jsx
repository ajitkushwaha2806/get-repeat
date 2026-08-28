"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! 👋 How can we help you today?", isBot: true },
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        setMessages((prev) => [...prev, { id: Date.now(), text: message, isBot: false }]);
        setMessage("");

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, text: "Thanks for reaching out! A support agent will be with you shortly.", isBot: true },
            ]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col bg-white dark:bg-[#10101a]/95 backdrop-blur-xl border border-neutral-200 dark:border-neutral-800 rounded-md shadow-2xl shadow-black/20 overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-[#f2715b] to-[#ff8c78] p-6 flex items-center justify-between text-white relative overflow-hidden shrink-0">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16" />
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 bg-white/20 rounded-md flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
                                    <Bot className="w-6 h-6 text-white" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-bold text-xl leading-tight">Support</h3>
                                    <p className="text-sm text-white/80 font-medium truncate">We typically reply in minutes</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/20 transition-colors relative z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-6 scroll-smooth bg-neutral-50/50 dark:bg-transparent">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-end gap-3 max-w-[85%] ${msg.isBot ? "self-start" : "self-end flex-row-reverse"}`}
                                >
                                    <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 shadow-sm ${msg.isBot ? "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-100 dark:border-neutral-700" : "bg-[#f2715b] text-white"}`}>
                                        {msg.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                                    </div>
                                    <div
                                        className={`p-4 rounded-md text-[15px] leading-relaxed shadow-sm ${msg.isBot
                                            ? "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-bl-none border border-neutral-100 dark:border-neutral-700"
                                            : "bg-gradient-to-br from-[#f2715b] to-[#fa5e43] text-white rounded-br-none shadow-md shadow-[#f2715b]/20"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-4 bg-white/80 dark:bg-black/40 border-t border-neutral-100 dark:border-neutral-800 backdrop-blur-md shrink-0">
                            <form onSubmit={handleSend} className="relative flex items-center">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-neutral-100 dark:bg-neutral-900/80 border border-transparent dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md py-4 pl-6 pr-14 focus:outline-none focus:ring-2 focus:ring-[#f2715b]/50 focus:bg-white dark:focus:bg-neutral-900 transition-all placeholder:text-neutral-400 font-medium"
                                />
                                <button
                                    type="submit"
                                    disabled={!message.trim()}
                                    className="absolute right-2 w-10 h-10 flex items-center justify-center bg-[#f2715b] text-white rounded-md hover:bg-[#ff8c78] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-gradient-to-tr from-[#f2715b] to-[#ff8c78] text-white rounded-full shadow-xl shadow-[#f2715b]/30 flex items-center justify-center transition-all hover:shadow-2xl hover:shadow-[#f2715b]/40 border-2 border-white/20"
            >
                {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7 fill-current" />}
            </motion.button>
        </div>
    );
}
