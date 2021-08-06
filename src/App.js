import Header from "./components/Header/Header.js";
import SideBar from "./components/SideBar/SideBar.js";
import Recommended from "./components/RecommendedVideos/Recommended.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="middle">
        <SideBar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
