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
import TripOverview from "./components/TripOverview";
import ShoppingList from "./components/ShoppingList";
import {IOrder} from "./models/IOrder";
import CreateOrder from "./components/CreateOrder";
import CreateTrip from "./components/CreateTrip";

function App() {
  const [trips, setTrips] = useState<ITrip[]>(null);

    useEffect(() => {
        axios.get("http://localhost:3003/trip/all")
            .then(response => {
                setTrips(response.data);
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
              <Route path={"/tripOverview"} element={<TripOverview/>}></Route>
              <Route path={"/createOrder/:id"} element={<CreateOrder/>}></Route>
              <Route path={"/createTrip"} element={<CreateTrip/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
