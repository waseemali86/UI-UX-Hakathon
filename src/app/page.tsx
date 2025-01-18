import Top4 from "@/components/Arrival";
import Blogs from "@/components/Blog";
import Hero from "@/components/Hero";
import Top2 from "@/components/HeroOne";
import Insta from "@/components/insta";
import ProductShop from "@/components/shop";
import TopPicks from "@/components/Toppicks";

function HomePage() {
    return(
        <>
        <Hero />
        <Top2 />
        <ProductShop />
        <TopPicks />
        <Top4 />
        <Blogs />
        <Insta />
        
        </>
    )
}

export default HomePage;