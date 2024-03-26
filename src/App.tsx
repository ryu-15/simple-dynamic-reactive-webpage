
import './App.css'
import NavBar from "./components/Navbar/Navbar.tsx";
import TextSection from "./components/TextSection/TextSection.tsx";
import BackgroundSection from "./components/BackgroundSection/BackgroundSection.tsx";
import TabHeading from "./components/TabHeading/TabHeading.tsx";

function App() {

  return (
    <>
        <div>
            <header>
                <NavBar/>
            </header>
            <main>
                <section className="landing-page">
                    <div className="landing-page-content">
                        <TextSection/>
                    </div>
                    <div className="landing-graphics">
                        <BackgroundSection/>
                    </div>
                </section>
                <section className="tab-page">
                    <TabHeading/>
                </section>
            </main>
        </div>
        </>
        )
        }

        export default App
