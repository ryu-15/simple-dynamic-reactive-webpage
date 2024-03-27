
import './App.css'
import NavBar from "./components/Navbar/Navbar.tsx";
import TabHeading from "./components/TabHeading/TabHeading.tsx";
import LandingPage from "./components/LandingPage/LandingPage.tsx";

function App() {

  return (
    <>
        <div>
                <NavBar/>
                <LandingPage/>

                <section className="tab-page">
                    <TabHeading/>
                </section>
        </div>
        </>
        )
        }

        export default App
