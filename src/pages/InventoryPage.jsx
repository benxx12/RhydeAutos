import { useMemo, useState } from 'react';
import { useCars } from '../context/CarsContext';
import CarCard from '../components/CarCard';

export const CARS_PER_PAGE = 15;
const MAX_VISIBLE_PAGES = 5;
const containerClass =
  'mx-auto w-[calc(100%-32px)] max-w-content sm:w-[calc(100%-40px)] min-[721px]:w-[calc(100%-56px)] lg:w-[calc(100%-96px)]';
const buttonClass =
  'inline-flex h-[46px] min-w-[46px] items-center justify-center gap-2 rounded-[7px] border border-[#dedfd9] bg-white px-3 text-xs transition hover:border-[#aeb5a5] disabled:cursor-not-allowed disabled:text-[#a5a69f]';

export function getTotalPages(totalCars, pageSize = CARS_PER_PAGE) {
  return Math.max(1, Math.ceil(totalCars / pageSize));
}

export function getPageCars(cars, page, pageSize = CARS_PER_PAGE) {
  return cars.slice((page - 1) * pageSize, page * pageSize);
}

function getVisiblePages(totalPages, currentPage) {
  const visibleCount = Math.min(totalPages, MAX_VISIBLE_PAGES);
  const firstPage = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(visibleCount / 2),
      totalPages - visibleCount + 1
    )
  );
  return Array.from({ length: visibleCount }, (_, index) => firstPage + index);
}

function InventoryPage({ onNavigate }) {
  const { cars } = useCars();
  const [search, setSearch] = useState('');
  const [bodyFilter, setBodyFilter] = useState('All body styles');
  const [sortBy, setSortBy] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCars = useMemo(() => {
    const query = search.trim().toLowerCase();
    const result = cars.filter((car) => {
      const matchesSearch = `${car.name} ${car.make} ${car.model}`
        .toLowerCase()
        .includes(query);
      return (
        matchesSearch &&
        (bodyFilter === 'All body styles' || car.body === bodyFilter)
      );
    });
    if (sortBy === 'Price: low to high') result.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Price: high to low') result.sort((a, b) => b.price - a.price);
    else if (sortBy === 'Newest') result.sort((a, b) => b.year - a.year);
    return result;
  }, [bodyFilter, cars, search, sortBy]);

  const totalPages = getTotalPages(filteredCars.length);
  const page = Math.min(currentPage, totalPages);
  const pageCars = getPageCars(filteredCars, page);
  const visiblePages = getVisiblePages(totalPages, page);
  const firstCar = filteredCars.length ? (page - 1) * CARS_PER_PAGE + 1 : 0;
  const lastCar = Math.min(page * CARS_PER_PAGE, filteredCars.length);
  const filterClass =
    'h-12 w-full rounded border border-line bg-white px-[15px] text-xs text-ink outline-none focus:border-accent-green';

  const resetPage = (setFilter, value) => {
    setFilter(value);
    setCurrentPage(1);
  };

  return (
    <section className="min-h-[62vh] py-[66px] md:py-24" data-testid="full-inventory">
      <div className={containerClass}>
        <div className="mb-[25px] md:mb-[34px]">
          <span className="inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-muted before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#90bd45] before:content-['']">
            The full collection
          </span>
          <h1 className="mt-[13px] font-heading text-[clamp(34px,9vw,46px)] font-semibold leading-[1.08] tracking-[-.055em] md:text-[52px]">
            Find your next car.
          </h1>
          <p className="mt-[13px] text-sm leading-[1.7] text-muted">
            Every car in our collection, thoughtfully selected for the road ahead.
          </p>
        </div>

        <div className="mb-[26px]  grid grid-cols-2 items-center gap-2.5 md:flex">
          <label className="relative col-span-2 flex h-12 w-full items-center gap-2.5 rounded border border-line bg-white px-[15px] md:max-w-[330px]">
            <span className="text-lg text-muted" aria-hidden="true">⌕</span>
            <input
              className="w-full bg-transparent text-xs text-ink outline-none placeholder:text-[#969a93]"
              type="search"
              value={search}
              onChange={(event) => resetPage(setSearch, event.target.value)}
              placeholder="Search make or model"
              aria-label="Search make or model"
            />
          </label>
          <select
            className={`${filterClass} md:w-auto md:min-w-[165px] pr-[10px]`}
            value={bodyFilter}
            onChange={(event) => resetPage(setBodyFilter, event.target.value)}
            aria-label="Filter by body style"
          >
            <option>All body styles</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Coupe</option>
          </select>
          <select
            className={`${filterClass} md:w-auto md:min-w-[165px]`}
            value={sortBy}
            onChange={(event) => resetPage(setSortBy, event.target.value)}
            aria-label="Sort vehicles"
          >
            <option>Featured</option>
            <option>Newest</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
          </select>
        </div>

        <div className="mb-[18px] flex justify-between gap-4 text-[11px] text-muted">
          <span aria-live="polite">
            {filteredCars.length
              ? `Showing ${firstCar}–${lastCar} of ${filteredCars.length} cars`
              : 'No cars found'}
          </span>
          <span>{CARS_PER_PAGE} cars per page</span>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[721px]:grid-cols-2 min-[1001px]:grid-cols-3 min-[1001px]:gap-6">
          {pageCars.length ? (
            pageCars.map((car) => (
              <CarCard key={car.id} car={car} onNavigate={onNavigate} />
            ))
          ) : (
            <div className="col-span-full border border-dashed border-line px-6 py-11 text-center text-sm text-muted">
              No cars match those filters. Try a different search or body style.
            </div>
          )}
        </div>

        <nav
          className="mt-9 flex min-h-[72px] flex-col items-start justify-center gap-2.5 bg-[#f5f4f0] p-[15px] md:flex-row md:items-center md:justify-between md:gap-5 md:px-5 md:py-2.5"
          aria-label="Inventory pages"
        >
          <span className="whitespace-nowrap text-xs text-muted">
            {CARS_PER_PAGE} cars per page · Page {page} of {totalPages}
          </span>
          <div className="flex w-full items-center justify-between gap-1 md:w-auto md:gap-2">
            <button
              className={`${buttonClass} border-transparent bg-transparent px-1.5 md:px-3`}
              type="button"
              aria-label="Previous page"
              disabled={page === 1}
              onClick={() => setCurrentPage(page - 1)}
            >
              <span className="text-xl leading-none" aria-hidden="true">‹</span>
              Previous
            </button>
            {visiblePages.map((pageNumber) => (
              <button
                className={`${buttonClass} min-w-[38px] px-2 md:min-w-[46px] md:px-3 ${
                  pageNumber === page
                    ? 'border-accent bg-accent font-bold'
                    : ''
                }`}
                key={pageNumber}
                type="button"
                aria-label={`Page ${pageNumber}`}
                aria-current={pageNumber === page ? 'page' : undefined}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
            <button
              className={`${buttonClass} border-transparent bg-transparent px-1.5 md:px-3`}
              type="button"
              aria-label="Next page"
              disabled={page === totalPages}
              onClick={() => setCurrentPage(page + 1)}
            >
              Next <span className="text-xl leading-none" aria-hidden="true">›</span>
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default InventoryPage;
