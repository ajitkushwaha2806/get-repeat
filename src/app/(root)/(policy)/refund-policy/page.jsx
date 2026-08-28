import Template from "@/components/global/template";
import { REFUND_POLICY_DATA } from "@/constants/policies";

export const metadata = {
    title: "Refund Policy | GetRepeat",
    description: "Refund policy for GetRepeat digital services.",
};

export default function RefundPolicyPage() {
    return (
        <Template
            title="Refund Policy"
            heading="Subscription Refunds"
            description="Clear guidelines on refunds and cancellations for your GetRepeat account."
            infoData={REFUND_POLICY_DATA.infoData}
            contactData={REFUND_POLICY_DATA.contactData}
            GradText={true}
        />
    );
}
