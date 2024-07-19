import "./App.css";
import Chanllenges from "./components/cards/chanllenges/Chanllenges";
import Situations from "./components/cards/situations/Situations";
import PopupRhino from "./components/rhino/PopupRhino";

function App() {
  return (
    <>
      {/* <Board /> */}
      <Situations />
      <Chanllenges />
      <PopupRhino />
    </>
  );
}

export default App;
