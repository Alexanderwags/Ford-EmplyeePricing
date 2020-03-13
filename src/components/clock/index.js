import React, { useState, useEffect } from "react";

const clock = () => {
  const [date, setDate] = useState(new Date("2016-06-01 5:00:00 PM"));
  const [Hour, setHour] = useState(0);
  const [Minutes, setMinutes] = useState(0);
  const [Seconds, setSeconds] = useState(0);
  var tiempo = {};
  var i = 0;

  function show_hour() {
    var now = new Date();
    tiempo.horas = date.getHours() - now.getHours();
    tiempo.minuto = date.getMinutes() + 60 - now.getMinutes();
    tiempo.segundos = "0" + date.getSeconds() + 60 - now.getSeconds();
    setHour(tiempo.horas);
    setMinutes(tiempo.minuto);
    setSeconds(tiempo.segundos);
  }
  function imprimirfecha() {
    return (
      <h1>
        <span>{Hour} </span>
        <span>{Minutes} </span>
        <span>{Seconds} </span>
      </h1>
    );
  }
  useEffect(() => {
    var intervalo = window.setInterval(show_hour, 1000); // Frecuencia de actualización
    //var timerID = setInterval( () => tick(), 1000 );

    return function cleanup() {
      // clearInterval(timerID);
    };
  });
  function tick() {
    setDate(new Date());
  }

  return (
    <>
      {imprimirfecha()}
    </>
  );
};

export default clock;
