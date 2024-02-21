import CtaBox from "@/components/CtaBox";
import ListPageHero from "@/components/ListPageHero";
import ServicesGrid, { Tservice } from "@/components/ServicesGrid";
import TestimonialGrid from "@/components/TestimonialGrid";
import Image from "next/image";

const defaultServices: Tservice[] = [
    {
        title: "Roof repair",
        image: "https://res.cloudinary.com/ddnkaqqhe/image/upload/v1685797820/Whats_App_Image_2023_05_25_at_9_13_31_PM_afeac8d337.jpg",
        introduction: "roof repair intro",
        overview: "overview",
        slug: "roof-repair",
    },
];

export default function Services() {
    return (
        <main>
            <ListPageHero
                title="Services"
                description="wagwan"
                image={"null"}
            />
            <ServicesGrid services={defaultServices} />
            <TestimonialGrid testimonials={[{image: '', quote: 'quote', title: 'Best in class materials'}, {image: '', quote: 'quote', title: 'Best in class materials'}]}/>
            <CtaBox />
        </main>
    );
}
