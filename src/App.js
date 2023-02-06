import "./App.css";
import Door from "./components/door/door.components";
import Navigation from "./components/navigation/navigation.components";
function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <div className="doors-container">
        <Door className="door-left" />
        <Door className="door-right" />
      </div>
    </>
  );
}

export default App;
