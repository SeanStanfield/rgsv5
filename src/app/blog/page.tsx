import BlogList from "@/components/BlogList";
import CtaBox from "@/components/CtaBox";
import ListPageHero from "@/components/ListPageHero";

const mockBlogPosts = [
    {
        id: 1,
        title: "The Future of Sustainable Roofing",
        introduction:
            "Discover the new trends in eco-friendly roofing materials...",
        image: "null",
        author: "jane",
        publishedAt: "2021-07-16T19:30",
        slug: "future-sustainable-roofing",
    },
    // ...add two more example posts
];

export default function Blog() {
    return (
        <main>
            <ListPageHero
                title="Blogs"
                description="Here you can find useful advice and tips for all your roofing needs"
                image={"null"}
            />
            <BlogList blogPosts={mockBlogPosts} />
            <CtaBox />
        </main>
    );
}
