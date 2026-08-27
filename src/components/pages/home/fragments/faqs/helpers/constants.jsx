import { QrCode, Smartphone, Zap, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export const FAQS = [
    {
        question: "What is GetRepeat?",
        answer: (
            <>
                GetRepeat is a seamless, <span className="text-primary font-semibold">QR-code based dining experience</span> designed for restaurants. It allows customers to scan, order, and pay directly from their phones <span className="text-primary font-semibold">without downloading an app</span>, while helping you build customer loyalty and drive repeat visits.
            </>
        ),
        icon: Smartphone
    },
    {
        question: "Do my customers need to download an app?",
        answer: (
            <>
                <span className="text-primary font-semibold">No, they don't!</span> The entire experience works directly in their mobile browser. They just scan the QR code on the table, view the digital menu, place their order, and pay seamlessly.
            </>
        ),
        icon: QrCode
    },
    {
        question: "How fast is the setup process?",
        answer: (
            <>
                You can get your restaurant up and running with GetRepeat in <span className="text-primary font-semibold">less than 24 hours</span>. Just upload your menu, generate the QR codes for your tables, and you're ready to start taking orders.
            </>
        ),
        icon: Zap
    },
    {
        question: "Does it integrate with my existing POS system?",
        answer: (
            <>
                <span className="text-primary font-semibold">Yes</span>, GetRepeat is designed to work alongside most modern POS systems. Orders are sent directly to your kitchen display or printer, ensuring smooth operations.
            </>
        ),
        icon: Clock
    },
    {
        question: "Is customer data secure?",
        answer: (
            <>
                <span className="text-primary font-semibold">Absolutely.</span> We use industry-standard encryption to protect all customer and payment data. We do not sell data to third parties.
            </>
        ),
        icon: ShieldCheck
    },
    {
        question: "What if I need help or technical support?",
        answer: (
            <>
                We offer <span className="text-primary font-semibold">24/7 dedicated support</span> for all our restaurant partners. You can reach out to us via email, phone, or live chat anytime you need assistance.
            </>
        ),
        icon: HelpCircle
    }
];
