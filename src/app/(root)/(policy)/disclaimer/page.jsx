import Template from "@/components/global/template";

export const metadata = {
    title: "Disclaimer | GetRepeat",
    description: "Legal disclaimer for GetRepeat.",
};

import { DISCLAIMER_POLICY_DATA } from "@/constants/policies";

export default function DisclaimerPage() {
    return (
        <Template
            title="Disclaimer"
            heading="Legal Disclaimer & Terms"
            description="Important information regarding the use of GetRepeat's platform, website, and services."
            infoData={DISCLAIMER_POLICY_DATA.infoData}
            contactData={DISCLAIMER_POLICY_DATA.contactData}
            GradText={true}
        />
    );
}
