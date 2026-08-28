import Faqs from "./fragments/faqs";
import { Hero } from "./fragments/hero";
import Testimonials from "./fragments/reviews";
import PricingSection from "./fragments/pricing";

const Home = () => {
    return (
        <div>
            <Hero />
            <PricingSection />
            <Testimonials />
            <Faqs />
        </div>
    )
}

export default Home;