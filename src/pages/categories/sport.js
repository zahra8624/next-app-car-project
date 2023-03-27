import React from 'react';
import CarList from '../../../components/templates/CarList';
import carsData from '../../../data/carsData';

function Sport() {
  const sportCar = carsData.filter (car => car.category === "sport");
  console.log(sportCar)
  return (
    <CarList data = {sportCar } />
  )
}

export default Sport;
