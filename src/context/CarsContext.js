import { createContext, useContext } from 'react';

const CarsContext = createContext(null);

// Original USD catalog prices converted at 1 USD = NGN 1,330.171897 on 2026-10-12.
const cars = [
  {
    id: 'honda-accord',
    name: 'Honda Accord',
    year: 2022,
    make: 'Honda',
    model: 'Accord',
    body: 'Sedan',
    mileage: '24,600 mi',
    mileageValue: 24600,
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Platinum White',
    price: 38441968,
    badge: 'Just arrived',
    engine: '1.5L Turbocharged',
    drivetrain: 'Front-wheel drive',
    description:
      'A comfortable, well-equipped midsize sedan with a roomy cabin, smooth ride and practical features for everyday driving.',
  },
  {
    id: 'toyota-camry',
    name: 'Toyota Camry',
    year: 2023,
    make: 'Toyota',
    model: 'Camry',
    body: 'Sedan',
    mileage: '18,300 mi',
    mileageValue: 18300,
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Celestial Silver',
    price: 36579727,
    badge: 'Certified',
    engine: '2.5L 4-Cylinder',
    drivetrain: 'Front-wheel drive',
    description:
      'A dependable and efficient sedan with a comfortable interior, easy-to-use technology and plenty of room for everyday trips.',
  },
  {
    id: 'mercedes-benz-c-class',
    name: 'Mercedes-Benz C-Class',
    year: 2022,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    body: 'Sedan',
    mileage: '22,100 mi',
    mileageValue: 22100,
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Obsidian Black',
    price: 49083343,
    badge: 'Low mileage',
    engine: '2.0L Turbocharged',
    drivetrain: 'Rear-wheel drive',
    description:
      'A refined compact luxury sedan with a quiet cabin, comfortable ride and useful technology for everyday journeys.',
  },
  {
    id: 'tesla-model-3',
    name: 'Tesla Model 3',
    year: 2023,
    make: 'Tesla',
    model: 'Model 3',
    body: 'Sedan',
    mileage: '16,400 mi',
    mileageValue: 16400,
    transmission: 'Automatic',
    fuel: 'Electric',
    color: 'Pearl White',
    price: 43762655,
    badge: 'Electric',
    engine: 'Single Motor Electric',
    drivetrain: 'Rear-wheel drive',
    description:
      'An all-electric sedan with a quiet drive, responsive acceleration and a clean, spacious interior.',
  },
  {
    id: 'honda-cr-v',
    name: 'Honda CR-V',
    year: 2021,
    make: 'Honda',
    model: 'CR-V',
    body: 'SUV',
    mileage: '31,800 mi',
    mileageValue: 31800,
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Modern Steel',
    price: 33121280,
    badge: 'Great value',
    engine: '1.5L Turbocharged',
    drivetrain: 'All-wheel drive',
    description:
      'A practical compact SUV with flexible cargo space, a comfortable cabin and useful features for family and daily life.',
  },
  {
    id: 'toyota-corolla',
    name: 'Toyota Corolla',
    year: 2022,
    make: 'Toyota',
    model: 'Corolla',
    body: 'Sedan',
    mileage: '27,500 mi',
    mileageValue: 27500,
    transmission: 'Automatic',
    fuel: 'Petrol',
    color: 'Classic Silver',
    price: 29130765,
    badge: 'Reliable choice',
    engine: '2.0L 4-Cylinder',
    drivetrain: 'Front-wheel drive',
    description:
      'A fuel-efficient compact sedan with a straightforward interior, comfortable ride and a reputation for dependable everyday motoring.',
  },
];

function CarsProvider({ children }) {
  return (
    <CarsContext.Provider value={{ cars }}>{children}</CarsContext.Provider>
  );
}

function useCars() {
  const context = useContext(CarsContext);
  if (!context) {
    throw new Error('useCars must be used within a CarsProvider');
  }
  return context;
}

export { CarsProvider, useCars };
