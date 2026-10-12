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
  expect(screen.getByText('₦38,441,968')).toBeInTheDocument();
});

test('opens a dedicated About page from the main navigation', () => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  render(<App />);
  fireEvent.click(screen.getByRole('link', { name: 'About' }));
  expect(
    screen.getByRole('heading', { name: /people first\. always\./i })
  ).toBeInTheDocument();
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
  expect(document.querySelectorAll('[data-testid="full-inventory"] article')).toHaveLength(6);
  expect(
    screen.getByText('15 cars per page · Page 1 of 1')
  ).toBeInTheDocument();
});

test('limits inventory pages to 15 cars and calculates page counts', () => {
  const cars = Array.from({ length: 60 }, (_, index) => ({ id: index }));
  expect(CARS_PER_PAGE).toBe(15);
  expect(getTotalPages(cars.length)).toBe(4);
  expect(getPageCars(cars, 1)).toHaveLength(15);
  expect(getPageCars(cars, 4)).toHaveLength(15);
  expect(getPageCars(cars, 4)[0].id).toBe(45);
});
