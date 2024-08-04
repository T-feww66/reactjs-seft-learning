import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Program from "./components/Program/Program";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/Video";
import { useState } from "react";

function App() {
    const [playVideo, setPlayVideo] = useState(true);

    return (
        <div>
            <Header />
            <Hero />
            <main>
                <div className="container">
                    <Program />
                    <About setPlayVideo={setPlayVideo} />
                    <Campus />
                    <Testimonials />
                    <Contact />
                    <Footer />
                </div>
                <Video playVideo={playVideo} setPlayVideo={setPlayVideo} />
            </main>
        </div>
    );
}

export default App;
