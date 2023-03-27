import React from 'react';  
import { useRouter } from 'next/router';
import carsData from '../../../data/carsData';
import CarDetails from '../../../components/templates/CarDetails';

function CarDetail() {
    const router = useRouter();
    const {carId} = router.query;
    const carDetails = carsData[carId -1]

    console.log(carDetails)
   
  return (
    <div>
   
   <CarDetails { ...carDetails }/>
   </div>
    

  )
}

export default CarDetail;
