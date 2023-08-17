import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export const HexaGraphicTrue = () => {
  return (
    <>
    <div className="question">
    <div className="question-container">
      {/* es importante que el responsiveContainer tenga un contenedor padre sino no se renderiza */}
        <ResponsiveContainer width="100%" height="100%">

    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Mike" dataKey="B" stroke="#479731" strokeWidth={2} fill="#42CA1D" fillOpacity={0.3} />
    </RadarChart>
    </ResponsiveContainer>
    </div>
</div>
</>
  )
}
