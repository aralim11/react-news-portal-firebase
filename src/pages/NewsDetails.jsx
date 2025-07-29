import { useLoaderData } from "react-router-dom"
import Header from "../components/Header"
import RightNavBar from "../components/RightNavBar"
import NewsDetailsCard from "../components/NewsDetailsCard";
import Navbar from "../components/Navbar";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];

    return (
        <div>
            <header className="py-3">
                <Header></Header>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
                <section className="col-span-9">
                    <h2 className="font-bold mb-5">News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className="col-span-3">
                    <RightNavBar></RightNavBar>
                </aside>
            </main>
        </div>
    )
}

export default NewsDetails