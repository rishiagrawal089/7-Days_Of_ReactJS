import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Component/Header";
import LoginPage from "./Component/LoginPage";
import PaymentDetails from "./Component/PaymentDetails";
import ProcessList from "./Component/ProcessList";
import ScholarCreate from "./Component/ScholarCreate";
import ScholarList from "./Component/ScholarList";
import ScholarUpdate from "./Component/ScholarUpdate";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<LoginPage />}></Route>
            <Route exact path="/scholar" element={<ScholarList />}></Route>
            <Route
              exact
              path="/scholar/create"
              element={<ScholarCreate />}
            ></Route>
            <Route
              exact
              path="/scholar/update/:schId"
              element={<ScholarUpdate />}
            ></Route>
            <Route exact path="/process" element={<ProcessList />}></Route>
            <Route
              exact
              path="/process/paymentDetails/:schId"
              element={<PaymentDetails />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
