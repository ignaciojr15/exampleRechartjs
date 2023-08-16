import React, { useState,PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const getIntroOfPage = (label) => {
    if (label === 'Page A') {
      return "Page A is about men's clothing";
    }
    if (label === 'Page B') {
      return "Page B is about women's dress";
    }
    if (label === 'Page C') {
      return "Page C is about women's bag";
    }
    if (label === 'Page D') {
      return 'Page D is about household goods';
    }
    if (label === 'Page E') {
      return 'Page E is about food';
    }
    if (label === 'Page F') {
      return 'Page F is about baby food';
    }
    return '';
  };
  
export const HexaGraphic = () => {
    const [opacity, setOpacity] = useState({
        uv: 1,
        pv: 1
      });
      // content={<CustomTooltip /> poniendo esto en el tooltip podriamos  acceder crear un tooltip personalizado}
      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip bg-slate-700" style={{backgroundColor:'#d5d6d7',borderRadius:"9%"}}>
           
              <div>
                {payload.map((pld) => (
                  <div style={{ display: "inline-block", padding: 10 }}>
                    <div style={{ color: pld.fill }}>{pld.value}</div>
                    <div>{pld.dataKey}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      
        return null;
      };
      
  return (
    <>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            {/* strokeDasharray="3 3 para poner las lineas punteadas  */}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip  content={<CustomTooltip /> }  />
            {/* fill:color de fondo stroke:border */}
            <Area type="monotone" dataKey="uv" stroke="#8884d8"  fill="#8844d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};


