import { useRouter } from 'next/router';
import React from 'react';
import CarList from '../../../components/templates/CarList';
import carsData from '../../../data/carsData';


function FilteredCars() {
    const router = useRouter();
    const [min, max] = router.query.slug || [];
    const filteredData = carsData.filter(item => item.price>min && item.price<max)

    if (!filteredData.length) return <h3>Not Found!</h3>

  return <CarList data={filteredData} />
}

export default FilteredCars;
