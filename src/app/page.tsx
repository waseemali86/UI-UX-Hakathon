import Top4 from "@/components/Arrival";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Section2 from "@/components/HeroOne";
import Insta from "@/components/insta";
import TopPicks from "@/components/Toppicks";

function HomePage() {
    return(
        <>
        <Hero />
        <Section2 />
        <TopPicks />
        <Top4 />
        <Blog />
        <Insta />
        
        </>
    )
}

export default HomePage;