import ImageComponent from "./components/Image";
import ProfileComponent from "./components/Profile";
import AboutComponent from "./components/About";
import FooterComponent from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ImageComponent />
      <ProfileComponent />
      <AboutComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
