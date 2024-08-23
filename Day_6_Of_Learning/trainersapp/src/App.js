import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import TrainersDetail from "./Component/TrainersDetail";
import TrainersList from "./Component/TrainersList";
import trainersMock from "./Component/trainersmock";

function App() {
  return (
    <div style={{marginLeft:20}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/trainers" element={<TrainersList trainers={trainersMock} />}/>
          <Route path="/trainers/:Id" element={<TrainersDetail/>} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
