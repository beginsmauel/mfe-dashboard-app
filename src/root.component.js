import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
//import DashBoardPage from "./dashboard-page/dashboard-page.component.js";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';


export default function Root(props) {

const data = [
  {
    "name": "05-01-2022",
    "Bus": 400,
    "Car": 250
  },
  {
    "name": "06-01-2022",
    "Bus": 308,
    "Car": 402
  },
  {
    "name": "07-01-2022",
    "Bus": 257,
    "Car": 291
  },
  {
    "name": "08-01-2022",
    "Bus": 508,
    "Car": 230
  },
  {
    "name": "09-01-2022",
    "Bus": 190,
    "Car": 264
  },
  {
    "name": "10-01-2022",
    "Bus": 443,
    "Car": 654
  },
  {
    "name": "11-01-2022",
    "Bus": 470,
    "Car": 450
  }];

   let isLoggedIn  = false;
   let temp = localStorage.getItem("loggedIn");
   if(temp == "true"){
     isLoggedIn = true;
   }

    return (

      {
        
        isLoggedIn
       ? (
          <div className="chartApp">
           <BarChart width={1200} height={550} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bus" fill="#8884d8" />
          <Bar dataKey="Car" fill="#82ca9d" />
            </BarChart>
         </div>
        )
      : (
          <div> Please Login </div>
        )
    }

  );


}
