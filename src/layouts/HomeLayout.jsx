import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import LatestNews from "../components/LatestNews"
import LeftNavBar from "../components/LeftNavBar"
import Navbar from "../components/Navbar"
import RightNavBar from "../components/RightNavBar"
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import Loading from "../pages/Loading"

const HomeLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">
          <LeftNavBar></LeftNavBar>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightNavBar></RightNavBar>
        </aside>
      </main>
    </div>
  )
}

export default HomeLayout