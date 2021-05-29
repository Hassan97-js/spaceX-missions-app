import Navbar from "./components/Global/Navbar/Navbar";
import ExploreSpaceX from "./components/ExploreSpaceX/ExploreSpaceX";
// import WelcomeSpaceX from "./components/WelcomeSpaceX";
import Footer from "./components/Global/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content-wrap">
        <Navbar />
        {/* <WelcomeSpaceX /> */}
        <ExploreSpaceX />
      </div>
      <Footer />
    </div>
  );
}

export default App;
