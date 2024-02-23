import CtaBox from "@/components/CtaBox";
import ListPageHero from "@/components/ListPageHero";

export default function Blog() {
    return (
        <main>
            <ListPageHero
                title="Blogs"
                description="Here you can find useful advice and tips for all your roofing needs"
                image={"null"}
            />
            <CtaBox />
        </main>
    );
}