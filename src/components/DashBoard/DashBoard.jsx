import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Assignment-1',
       result: 60,
    },
    {
      name: 'Assignment-2',
      result: 50,
    },
    {
      name: 'Assignment-3',
      result: 55,
    },
    {
      name: 'Assignment-4',
      result: 40,
    },
    {
      name: 'Assignment-5',
      result: 60,
    },
    {
      name: 'Assignment-6',
      result: 55,
    },
    {
      name: 'Assignment-7',
      result: 50,
    },
    {
      name: 'Assignment-8',
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