import { PRICING_DATA } from "@/constants/pricing";
import { Highlighter } from "@/components/ui/highlighter";
import PricingCard from "@/components/global/pricing-card";
import SectionWrapper from "@/components/global/section-wrapper";

export default function PricingSection() {
    return (
        <div id="pricing">
            <SectionWrapper
                title={
                    <>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-6">
                            Simple, transparent{" "}
                            <Highlighter action="highlight" color="var(--primary)">
                                <span className="relative z-10 px-2 text-white">pricing</span>
                            </Highlighter>
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
                            Choose the perfect plan for your restaurant. No hidden fees, no surprises.
                        </p>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
                    {PRICING_DATA.map((plan, index) => (
                        <PricingCard key={plan.id} plan={plan} index={index} />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}
