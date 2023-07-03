import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";
function App() {
  return (
    <div className="App">
      {/* Ctrl + maj+/ */}

      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* posts & side menu container */}
        <div style={{ display: "flex" }}>
          {/* POSTS CONTAINER */}
          <div style={{ width: "70%" }}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          {/* ==POSTS CONTAINER ==*/}
          {/* SIDE MENU CONTAINER  */}
          <div style={{ width: "30%" }}>
            <SideMenu />
          </div>
          {/* == SIDE MENU CONTAINER  ==*/}
        </div>
        {/* ==posts & side menu container==*/}
      </div>
    </div>
  );
}

export default App;
