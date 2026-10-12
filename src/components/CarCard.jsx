function formatPrice(price) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price);
}

function CarCard({ car, onNavigate }) {
  const href = `/cars/${car.id}`;

  return (
    <article className="overflow-hidden rounded-[5px] border border-line bg-white transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(23,25,22,0.08)] motion-reduce:transition-none">
      <a
        className="group relative block h-[clamp(190px,22vw,260px)] overflow-hidden bg-[#ecefe8]"
        href={href}
        aria-label={`View ${car.name}`}
        onClick={(event) => {
          event.preventDefault();
          onNavigate(href);
        }}
      >
        <img alt="" className="h-full w-full border-0 object-cover [&:not([src])]:invisible" />
        <span className="absolute left-[15px] top-[15px] rounded-sm bg-white px-[10px] py-[7px] text-[9px] font-bold uppercase tracking-[.06em]">{car.badge}</span>
      </a>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3 text-[10px] text-muted">
          <span>{car.body}</span>
          <span>{car.year}</span>
        </div>
        <h3 className="mb-[14px] mt-2.5 font-heading text-lg font-bold tracking-[-.04em]">{car.name}</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-b border-line pb-[17px] text-[10px] text-[#676c64]" aria-label="Vehicle specifications">
          <span>{car.mileage}</span>
          <span>{car.transmission}</span>
          <span>{car.fuel}</span>
        </div>
        <div className="flex items-center justify-between gap-3.5 pt-4">
          <span className="font-heading text-[19px] font-extrabold tracking-[-.04em]">{formatPrice(car.price)}</span>
          <a
            className="group inline-flex items-center gap-2.5 text-[11px] font-bold"
            href={href}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(href);
            }}
          >
            View details <span className="text-[19px] leading-none transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default CarCard;
