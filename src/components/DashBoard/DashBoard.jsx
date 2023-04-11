import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Assignment One',
       result: 60,
    },
    {
      name: 'Assignment Two',
      result: 50,
    },
    {
      name: 'Assignment Three',
      result: 55,
    },
    {
      name: 'Assignment Four',
      result: 40,
    },
    {
      name: 'Assignment Five',
      result: 55,
    },
    {
      name: 'Assignment Six',
      result: 55,
    },
    {
      name: 'Assignment Seven',
      result: 50,
    },
    {
      name: 'Assignment Eight',
      result: 60,
    },
  ];

const DashBoard = () => { 
    return (
        <div className='pt-10 flex justify-center'>
        <AreaChart
          width={1300}
          height={450}
          data={data} 
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area dataKey="result" stroke="#646cff" fill="#8884d8" fillOpacity={0.3} /> 
        </AreaChart>
        </div>
    );
};

export default DashBoard;