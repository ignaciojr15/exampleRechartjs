import React, { useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

export const BarGraphic = () => {
  const [datos, setDatos] = useState([
    { dia: 'Lunes', repeticiones: 30 },
    { dia: 'Martes', repeticiones: 45 },
    { dia: 'Miércoles', repeticiones: 70 },
    { dia: 'Jueves', repeticiones: 20 },
    { dia: 'Viernes', repeticiones: 60 },
    { dia: 'Sábado', repeticiones: 85 },
    { dia: 'Domingo', repeticiones: 40 },
  ]);

  return (
    <div className='container'>
      {/* BarChart: Componente principal del gráfico */}
      <BarChart
        width={600}
        height={350}
        data={datos}
        background="transparent"
        classNameName="w-full lg:w-1/2 pr-0 lg:pr-2"
      >
        {/* Bar: Representa las barras en el gráfico 
        fill color de fondo  
        el stroke define el color del border de las filas mientras strokeWidth define su grososr */}
        <Bar dataKey="repeticiones" fill="rgba(0, 128, 0, 0.5)" stroke="#008000" strokeWidth={2} />
        
        {/* CartesianGrid: Muestra las líneas de la cuadrícula stroke :color de la linea  vertical horizontal son bool tu decides si quieres incluirlos o no */}
        <CartesianGrid stroke="#c6d2d0" vertical={false} horizontal={true} />
        
        {/* Tooltip: Muestra información en un tooltip al pasar el cursor sobre una barra importante poner el cursos en false para que te haga un hover que queda feo */}
        <Tooltip cursor={false} />

        {/* XAxis: Eje X con los nombres de los días */}
        <XAxis dataKey="dia" />

        {/* YAxis: Eje Y con los valores de repeticiones */}
        <YAxis dataKey="repeticiones" />
      </BarChart>
    </div>
  );
};
