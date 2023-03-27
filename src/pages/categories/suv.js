import React from 'react';
import CarList from '../../../components/templates/CarList';
import carsData from '../../../data/carsData';

function Suv() {
  const suvCar = carsData.filter (car => car.category === "suv");
  console.log(suvCar)
  return (
    <CarList data = {suvCar } />
  )
}

export default Suv;
