import logo from "./logo.svg";
import "./App.css";
import Weather from "./currentLocation";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Weather />
      </div>
    </div>
  );
}

export default App;
