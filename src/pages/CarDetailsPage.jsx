import CarCard from '../components/CarCard';
import { useCars } from '../context/CarsContext';

function formatPrice(price) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(price);
}

const containerClass =
  'mx-auto w-[calc(100%-32px)] max-w-content sm:w-[calc(100%-40px)] min-[721px]:w-[calc(100%-56px)] lg:w-[calc(100%-96px)]';
const eyebrowClass =
  'inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-muted before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#90bd45] before:content-[""]';
const buttonClass =
  'inline-flex min-h-[52px] items-center justify-center gap-3 rounded border border-transparent bg-accent px-[22px] text-[13px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#d5ff88]';
const textLinkClass = 'inline-flex items-center gap-2.5 text-[13px] font-bold';

function CarDetailsPage({ car, onNavigate }) {
  const { cars } = useCars();
  const similarCars = cars.filter((item) => item.id !== car.id).slice(0, 3);
  const additionalImages = [
    { src: car.rearImage, label: 'Rear view', alt: `${car.name} rear view` },
    {
      src: car.interiorImage,
      label: 'Interior',
      alt: `${car.name} interior`,
    },
  ].filter((image) => image.src);
  const specs = [
    ['Year', car.year],
    ['Mileage', car.mileage],
    ['Transmission', car.transmission],
    ['Fuel type', car.fuel],
    ['Engine', car.engine],
    ['Drivetrain', car.drivetrain],
    ['Exterior', car.color],
    ['Body style', car.body],
  ];
  const specClass =
    'min-h-[78px] border-b border-line p-[15px] md:min-h-[88px] md:p-[18px_20px]';

  return (
    <>
      <section className="bg-paper py-6 md:pb-[76px] md:pt-[35px]">
        <div className={containerClass}>
          <div className="mb-6 flex items-center gap-2.5 text-[11px] text-muted md:mb-[34px]">
            <button className="bg-transparent p-0 hover:text-ink" type="button" onClick={() => onNavigate('/')}>Home</button>
            <span aria-hidden="true">/</span>
            <button className="bg-transparent p-0 hover:text-ink" type="button" onClick={() => onNavigate('/inventory')}>Inventory</button>
            <span aria-hidden="true">/</span>
            <span>{car.name}</span>
          </div>
          <div className="grid grid-cols-1 items-start gap-7 min-[721px]:grid-cols-[minmax(0,1.3fr)_minmax(310px,.7fr)] min-[721px]:gap-9 min-[1001px]:gap-[58px]">
            <div className="grid gap-3">
              <div className="relative min-h-[250px] overflow-hidden bg-[#e7eae2] md:min-h-[390px]">
                <img
                  src={car.image}
                  alt={`${car.name} exterior`}
                  className="h-[clamp(250px,68vw,380px)] w-full border-0 object-cover md:h-[390px]"
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute left-[15px] top-[15px] rounded-sm bg-white px-[10px] py-[7px] text-[9px] font-bold uppercase tracking-[.06em]">{car.badge}</span>
              </div>
              {additionalImages.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {additionalImages.map((image) => (
                    <figure className="relative m-0 min-w-0 overflow-hidden bg-[#e7eae2]" key={image.label}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-[clamp(120px,20vw,185px)] w-full border-0 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <figcaption className="absolute bottom-2 left-2 rounded-sm bg-white/95 px-2.5 py-1.5 text-[10px] font-bold">
                        {image.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
            <div className="pt-0 md:pt-2">
              <span className={eyebrowClass}>{car.year} · {car.body}</span>
              <h1 className="mt-[13px] font-heading text-[clamp(36px,4vw,53px)] font-semibold leading-[1.08] tracking-[-.055em]">{car.name}</h1>
              <p className="mt-3 text-[13px] text-muted">{car.mileage} <span aria-hidden="true">·</span> {car.color}</p>
              <div className="my-5 font-heading text-[32px] font-extrabold tracking-[-.055em] md:my-7">
                {formatPrice(car.price)}
                <span className="mt-[5px] block font-sans text-[10px] font-normal tracking-normal text-muted">Transparent pricing. No surprises.</span>
              </div>
              <div className="grid gap-2.5">
                <a className={`group ${buttonClass} w-full bg-ink text-white hover:bg-[#30352d]`} href={`mailto:RhydehausGlobal@gmail.com?subject=${encodeURIComponent(`I'm interested in the ${car.name}`)}`}>
                  Ask us about this car <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
                </a>
                <a className={`${buttonClass} w-full border-line bg-transparent hover:border-ink hover:bg-transparent`} href={`https://wa.me/2349165293766?text=${encodeURIComponent(`Hi, I'm interested in the ${car.name}`)}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp 09165293766
                </a>
              </div>
              <p className="mt-[22px] flex gap-2.5 text-[11px] leading-[1.6] text-muted">
                <span aria-hidden="true">✓</span>
                Every vehicle is carefully inspected and comes with a vehicle
                history report.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${containerClass} py-[53px] md:py-[75px] md:pb-[95px]`}>
        <span className={eyebrowClass}>The details</span>
        <h2 className="mt-[13px] font-heading text-[clamp(28px,4vw,40px)] font-semibold leading-[1.08] tracking-[-.055em]">Everything you need to know.</h2>
        <div className="mt-7 grid grid-cols-2 border border-line md:grid-cols-4">
          {specs.map(([label, value], index) => (
            <div
              className={`${specClass} ${
                index % 2 === 0 ? 'border-l-0' : 'border-l border-line'
              } ${index >= 2 ? 'border-t md:border-t-0' : ''} ${
                index >= 4 ? 'md:border-t' : ''
              } ${index > 0 && index % 4 !== 0 ? 'md:border-l' : 'md:border-l-0'}`}
              key={label}
            >
              <span className="block text-[10px] text-muted">{label}</span>
              <strong className="mt-2 block text-[13px]">{value}</strong>
            </div>
          ))}
        </div>
        <div className="mt-[38px] max-w-[720px] md:mt-[52px]">
          <h2 className="mb-3 font-heading text-[25px] tracking-[-.04em]">A little more about this {car.make}.</h2>
          <p className="text-[13px] leading-[1.8] text-muted">{car.description}</p>
        </div>
      </section>
      <section className={`${containerClass} py-[66px] md:py-24`}>
        <div className="mb-[25px] flex flex-col items-start justify-between gap-[18px] md:mb-[34px] md:flex-row md:items-end md:gap-7">
          <div>
            <span className={eyebrowClass}>Keep looking</span>
            <h2 className="mt-[13px] font-heading text-[clamp(34px,9vw,46px)] font-semibold leading-[1.08] tracking-[-.055em] md:text-[clamp(34px,4vw,52px)]">More good drives.</h2>
          </div>
          <a
            className={`group ${textLinkClass}`}
            href="/inventory"
            onClick={(event) => {
              event.preventDefault();
              onNavigate('/inventory');
            }}
          >
            All inventory <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">→</span>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-4 min-[721px]:grid-cols-2 min-[1001px]:grid-cols-3 min-[1001px]:gap-6">
          {similarCars.map((item) => (
            <CarCard key={item.id} car={item} onNavigate={onNavigate} />
          ))}
        </div>
      </section>
    </>
  );
}

export default CarDetailsPage;
