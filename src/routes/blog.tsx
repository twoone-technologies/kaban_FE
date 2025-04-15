import Headline from "~/components/aboutUsSection/Headline";
import BlogHeader from "~/components/blog/BlogHeader";
import BlogSorter from "~/components/blog/BlogSorter";
import Container from "~/components/reusable/Container";

export default function Blog() {
    return (
        <Container element="section" className="flex items-center flex-col">
            <BlogHeader />
            <BlogSorter />
           <div className="w-full mt-4 flex justify-center flex-col px-7">
            {[...Array(5)].map((_, i) => (
                 <Headline id={i} key={i}/>
            ))}
           </div>
        </Container>
    )
}
