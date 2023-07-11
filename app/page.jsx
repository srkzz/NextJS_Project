import Feed from "@components/Feed";
import Link from 'next/link';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">

            <h1 className="head_text text_center">
                Rúben Silva
                <br className="max-md:hidden" />
                <Link href="/cv"><span className="junior_gradient text-center">Junior Developer</span></Link>
            </h1>

            <Feed />
        </section>
    )
}

export default Home;