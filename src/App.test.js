import { fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, jest } from '@jest/globals';
import App from './App';
import {
  CARS_PER_PAGE,
  getPageCars,
  getTotalPages,
} from './pages/InventoryPage';

afterEach(() => {
  jest.restoreAllMocks();
  window.history.pushState({}, '', '/');
});

test('renders the RhydeHaus home page and vehicle inventory', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /good cars\. good people\. great drive\./i })
  ).toBeInTheDocument();
  expect(screen.getByText('Honda Accord')).toBeInTheDocument();
  expect(
    document.querySelector('main img[src="/images/honda-accord.jpg"]')
  ).toBeInTheDocument();
  expect(screen.getByText('₦38,441,968')).toBeInTheDocument();
  expect(document.querySelectorAll('[data-testid="featured-inventory"] article')).toHaveLength(3);
  expect(screen.getByRole('button', { name: /view all cars/i })).toBeInTheDocument();
});

test('opens a vehicle details page from inventory', () => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);
  fireEvent.click(screen.getAllByRole('link', { name: 'View details' })[0]);
  expect(
    screen.getByRole('heading', { name: 'Everything you need to know.' })
  ).toBeInTheDocument();
  expect(
    document.querySelector('main > section img[src="/images/honda-accord.jpg"]')
  ).toBeInTheDocument();
  expect(screen.getByAltText('Honda Accord rear view')).toHaveAttribute(
    'src',
    '/images/honda-accord-rear.jpg'
  );
  expect(screen.getByAltText('Honda Accord interior')).toHaveAttribute(
    'src',
    '/images/honda-accord-interior.jpg'
  );
  expect(screen.getByText('₦38,441,968')).toBeInTheDocument();
});

test('opens a dedicated About page from the main navigation', () => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'About' }));
  expect(
    screen.getByRole('heading', { name: /people first\. always\./i })
  ).toBeInTheDocument();
  expect(
    screen.getByAltText('Cars displayed at a dealership showroom')
  ).toHaveAttribute('src', '/images/showroom.jpg');
  expect(window.location.pathname).toBe('/about');
  expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
    'aria-current',
    'page'
  );
});

test('replaces the old navbar links with a dedicated Contact page', () => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);
  expect(screen.queryByRole('link', { name: 'Why RhydeHaus' })).not.toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'How it works' })).not.toBeInTheDocument();
  fireEvent.click(
    within(screen.getByRole('navigation', { name: 'Main navigation' })).getByRole(
      'link',
      { name: 'Contact' }
    )
  );
  expect(
    screen.getByRole('heading', { name: /talk about your next drive/i })
  ).toBeInTheDocument();
  expect(window.location.pathname).toBe('/contact');
});

test('shows the full inventory on its own page', () => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /view all cars/i }));
  expect(
    screen.getByRole('heading', { name: 'Find your next car.' })
  ).toBeInTheDocument();
  expect(document.querySelectorAll('[data-testid="full-inventory"] article')).toHaveLength(15);
  expect(
    Array.from(
      document.querySelectorAll('[data-testid="full-inventory"] article img'),
      (image) => image.getAttribute('src')
    )
  ).toEqual([
    '/images/honda-accord.jpg',
    '/images/toyota-camry.jpg',
    '/images/mercedes-c-class.jpg',
    '/images/tesla-model-3.jpg',
    '/images/honda-cr-v.jpg',
    '/images/toyota-corolla.jpg',
    '/images/honda-civic.jpg',
    '/images/honda-pilot.jpg',
    '/images/honda-hr-v.jpg',
    '/images/honda-odyssey.jpg',
    '/images/toyota-rav4.jpg',
    '/images/toyota-highlander.jpg',
    '/images/toyota-prius.jpg',
    '/images/mercedes-e-class.jpg',
    '/images/mercedes-glc.jpg',
  ]);
  expect(
    screen.getByText('15 cars per page · Page 1 of 2')
  ).toBeInTheDocument();
});

test('shows the remaining cars on the second inventory page', () => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /view all cars/i }));
  fireEvent.click(screen.getByRole('button', { name: 'Next page' }));

  expect(
    screen.getByText('15 cars per page · Page 2 of 2')
  ).toBeInTheDocument();
  expect(
    document.querySelectorAll('[data-testid="full-inventory"] article')
  ).toHaveLength(3);
  expect(screen.getByText('Mercedes-Benz GLB')).toBeInTheDocument();
  expect(screen.getByText('Tesla Model Y')).toBeInTheDocument();
  expect(screen.getByText('Tesla Model S')).toBeInTheDocument();
});

test('shows rear and interior photos on the 12 recently added car detail pages', () => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  const recentlyAddedCars = [
    ['honda-civic', 'Honda Civic'],
    ['honda-pilot', 'Honda Pilot'],
    ['honda-hr-v', 'Honda HR-V'],
    ['honda-odyssey', 'Honda Odyssey'],
    ['toyota-rav4', 'Toyota RAV4'],
    ['toyota-highlander', 'Toyota Highlander'],
    ['toyota-prius', 'Toyota Prius'],
    ['mercedes-benz-e-class', 'Mercedes-Benz E-Class'],
    ['mercedes-benz-glc', 'Mercedes-Benz GLC'],
    ['mercedes-benz-glb', 'Mercedes-Benz GLB'],
    ['tesla-model-y', 'Tesla Model Y'],
    ['tesla-model-s', 'Tesla Model S'],
  ];

  recentlyAddedCars.forEach(([carId, carName]) => {
    window.history.pushState({}, '', `/cars/${carId}`);
    const { unmount } = render(<App />);

    expect(screen.getByAltText(`${carName} rear view`)).toBeInTheDocument();
    expect(screen.getByAltText(`${carName} interior`)).toBeInTheDocument();
    unmount();
  });
});

test('limits inventory pages to 15 cars and calculates page counts', () => {
  const cars = Array.from({ length: 60 }, (_, index) => ({ id: index }));
  expect(CARS_PER_PAGE).toBe(15);
  expect(getTotalPages(cars.length)).toBe(4);
  expect(getPageCars(cars, 1)).toHaveLength(15);
  expect(getPageCars(cars, 4)).toHaveLength(15);
  expect(getPageCars(cars, 4)[0].id).toBe(45);
});
