import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import Solutions from "./components/solutions";
import AboutUs from "./components/aboutUs";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Solutions />
      <AboutUs />
      <Contact/>
      <Footer />
    </>
  );
}
