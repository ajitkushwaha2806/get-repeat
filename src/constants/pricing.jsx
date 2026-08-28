export const PRICING_DATA = [
    {
        id: "1-month",
        title: "Monthly Plan",
        description: "Perfect for testing the waters.",
        price: 999,
        duration: "month",
        billingCycle: "Billed every month",
        isPopular: false,
        features: [
            "Unlimited QR Code Scans",
            "Real-time Analytics Dashboard",
            "Digital Menu Management",
            "Standard Customer Support",
            "Standard QR Designs"
        ]
    },
    {
        id: "3-month",
        title: "Quarterly Plan",
        description: "Great balance of commitment and value.",
        price: 1499,
        duration: "3 months",
        billingCycle: "Billed every 3 months (₹499/mo equivalent)",
        isPopular: true,
        badge: "Most Popular",
        features: [
            "Everything in Monthly",
            "Advanced Customer Insights",
            "Priority Email Support",
            "Custom Branded QR Codes",
            "Marketing Toolkit Access"
        ]
    },
    {
        id: "1-year",
        title: "Annual Plan",
        description: "Maximum savings for established restaurants.",
        price: 3999,
        duration: "year",
        billingCycle: "Billed annually (₹333/mo equivalent)",
        isPopular: false,
        badge: "Best Value",
        features: [
            "Everything in Quarterly",
            "Dedicated Account Manager",
            "24/7 Phone & Priority Support",
            "API Access & Integrations",
            "Free Hardware Replacements"
        ]
    }
];

export const PRICING_FAQ = [
    {
        question: "Are there any hidden fees or setup costs?",
        answer: "No, we believe in complete transparency. The price you see is the price you pay. There are no setup fees, hidden charges, or per-scan limits."
    },
    {
        question: "Can I switch plans later?",
        answer: "Yes! You can upgrade your plan at any time to take advantage of longer-term savings. The unused portion of your current plan will be prorated towards your new plan."
    },
    {
        question: "What happens to my QR codes if I cancel?",
        answer: "If you decide to cancel, your QR codes will remain active until the end of your current billing cycle. After that, they will safely deactivate."
    },
    {
        question: "Do you offer refunds?",
        answer: "Yes, we offer a 7-day money-back guarantee for first-time subscribers. If you're not completely satisfied, just let us know within the first week for a full refund."
    }
];
