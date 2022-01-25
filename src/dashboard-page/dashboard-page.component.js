import React, { useState, useEffect } from "react";
import DashBoardChart from "../dashboard-chart/dashboard-chart.component.js";
import axios from "axios";



export default function DashBoardPage() {
	
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
  },
  {
    "name": "12-01-2022",
    "Bus": 270,
    "Car": 450
  },
  {
    "name": "13-01-2022",
    "Bus": 570,
    "Car": 350
  }
];                       

  const [tollData, setTollData] = useState( []);

  /*useEffect(() => {
    const getTollData = () => {
      const response = axios.get('http://34.124.216.252:8900/vehicle/getAllVehicles')
      .then(function (response) {
        //console.log(response);
        setTollData(response.data);
      })}
    getTollData();
  }, []);*/

 setTollData(data);

  return (
    <div>
      <div className="flex">
        <div className="p-6">
            <DashBoardChart
              tollData={tollData}
            />
        </div>
       
      </div>
    </div>
  );

 
  
}


