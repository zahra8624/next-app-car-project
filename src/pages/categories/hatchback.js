import React from 'react';
import CarList from '../../../components/templates/CarList';
import carsData from '../../../data/carsData';

function Hatchback() {
  const hatchBackCar = carsData.filter (car => car.category === "hatchback");
  console.log(hatchBackCar)
  return (
    <CarList data = {hatchBackCar } />
  )
}

export default Hatchback
