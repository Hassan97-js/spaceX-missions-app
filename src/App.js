import Navbar from "./components/Global/Navbar/Navbar";
import ExploreSpaceX from "./components/ExploreSpaceX/ExploreSpaceX";
// import WelcomeSpaceX from "./components/WelcomeSpaceX";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <WelcomeSpaceX /> */}
      <ExploreSpaceX />
    </div>
  );
}

export default App;
