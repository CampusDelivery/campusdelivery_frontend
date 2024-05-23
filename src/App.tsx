import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {IUser} from "./models/IUser";
import {ITrip} from "./models/ITrip";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Tripdetails from "./components/Tripdetails";
import LoginPage from "./components/LoginPage";
import Registration from "./components/Registration";
import axios from "axios";

function App() {
  const mockdata = require("./mockdata/mock_trips.json");
  const [trips, setTrips] = useState<ITrip[]>(null);

    useEffect(() => {
        axios.get("http://localhost:3003/trip/all")
            .then(respose => {
                setTrips(respose.data);
            })
        trips? console.log(trips) : console.log("no trips");
    }, []);

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Dashboard trips={trips}/>}></Route>
              <Route path={"/login"} element={<LoginPage/>}></Route>
              <Route path={"/registration"} element={<Registration/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
