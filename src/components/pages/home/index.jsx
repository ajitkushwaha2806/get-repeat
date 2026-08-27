import Faqs from "./fragments/faqs"
import { Hero } from "./fragments/hero"
import Testimonials from "./fragments/reviews";

const Home = () => {
    return (
        <div>
            <Hero />
            <Testimonials />
            <Faqs />
        </div>
    )
}

export default Home