import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {IUser} from "./models/IUser";
import {ITrip} from "./models/ITrip";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Tripdetails from "./components/Tripdetails";
import LoginPage from "./components/LoginPage";
import Registration from "./components/Registration";

function App() {
  const mockdata = require("./mockdata/mock_trips.json");
  const [trips, setTrips] = useState<ITrip[]>(mockdata)

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Dashboard trips={trips}/>}></Route>
              <Route path={"/trips"} element={<Tripdetails trip={trips[0]}/>}/>
              <Route path={"/login"} element={<LoginPage/>}></Route>
              <Route path={"/registration"} element={<Registration/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
