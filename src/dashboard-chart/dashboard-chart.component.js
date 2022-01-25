import React, { Fragment } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';



export default function DashBoardChart({ tollData }) {
  

  return (
    <div className="chartApp">
        <BarChart width={1200} height={550} data={tollData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Bus" fill="#8884d8" />
          <Bar dataKey="Car" fill="#82ca9d" />
        </BarChart>
    </div>
  );
}
