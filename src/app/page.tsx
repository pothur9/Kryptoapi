import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Features from "./components/features";
import Howitworks from "./components/howitworks";
import Apis from "./components/apis";
import Footer from "./components/footer";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <Features/>
   <Howitworks/>
   <Apis/>
   <Footer/>
   </>
  );
}
