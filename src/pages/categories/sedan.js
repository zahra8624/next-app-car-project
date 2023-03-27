import React from 'react';
import CarList from '../../../components/templates/CarList';
import carsData from '../../../data/carsData';

function Sedan() {
  const sedanCar = carsData.filter (car => car.category === "sedan");
  console.log(sedanCar)
  return (
    <CarList data = {sedanCar } />
  )
}

export default Sedan;
