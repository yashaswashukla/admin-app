import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Layout from "./Components/Layouts/Layout";
import Calendar from "./Pages/Calendar/Calendar";

function App() {
  return (
    <div id = "dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="Dashboard" element={<Dashboard />}></Route>
            <Route path = "Calendar" element = {<Calendar />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;