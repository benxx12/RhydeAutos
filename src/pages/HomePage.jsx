import { useCars } from '../context/CarsContext';
import CarCard from '../components/CarCard';
import exteriorImage from '../assets/Exterior.svg';

const FEATURED_CAR_COUNT = 3;
const containerClass =
  'mx-auto w-[calc(100%-32px)] max-w-content sm:w-[calc(100%-40px)] min-[721px]:w-[calc(100%-56px)] lg:w-[calc(100%-96px)]';
const eyebrowClass =
  'inline-flex items-center gap-[9px] text-[11px] font-bold uppercase leading-[1.3] tracking-[.15em] text-muted before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#90bd45] before:content-[""]';
const buttonClass =
  'inline-flex min-h-[52px] items-center justify-center gap-3 rounded border border-transparent bg-accent px-[22px] text-[13px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#c7f76f]';
const textLinkClass = 'inline-flex items-center gap-2.5 text-[13px] font-bold';

const benefits = [
  {
    icon: '✳',
    title: 'Every car, carefully chosen',
    copy: 'A hand-selected collection, inspected with care before it reaches you.',
  },
  {
    icon: '↗',
    title: 'A refreshingly easy process',
    copy: 'Clear answers, no pressure, and support from first look to handover.',
  },
  {
    icon: '◇',
    title: 'Confidence comes standard',
    copy: 'Vehicle history and condition details, shared openly from day one.',
  },
  {
    icon: '◎',
    title: 'Here when you need us',
    copy: 'Real people who know their cars and are happy to help you find yours.',
  },
];

const trustItems = [
  {
    title: 'Quality checked',
    copy: 'Every detail, looked over',
    icon: <path d="m5 12.5 4.2 4.2L19 7" />,
  },
  {
    title: 'Honest history',
    copy: 'No surprises, just clarity',
    icon: (
      <>
        <path d="m12 3 8 4.5v5c0 4.3-3.2 7.5-8 8.5-4.8-1-8-4.2-8-8.5v-5L12 3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-4.8" />
      </>
    ),
  },
  {
    title: 'Easy from day one',
    copy: 'Good people, here to help',
    icon: <path d="M7 17 17 7M8 7h9v9" />,
  },
  {
    title: 'Ready for the road',
    copy: 'Confidence comes standard',
    icon: <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8m0-12.8L5.6 18.4" />,
  },
];

function HomePage({ onNavigate }) {
  const { cars } = useCars();
  const featuredCars = cars.slice(0, FEATURED_CAR_COUNT);

  return (
    <>
      <section className="relative grid min-h-[min(690px,calc(100vh-82px))] items-center bg-[#eff1eb] after:absolute after:bottom-0 after:right-0 after:top-0 after:w-[47%] after:bg-[linear-gradient(135deg,#dfe3da,#cdd2c7)] after:content-[''] max-[720px]:min-h-0 max-[720px]:after:h-[35%] max-[720px]:after:w-full max-[720px]:after:top-auto">
        <div className={`${containerClass} relative z-[1] grid min-h-[inherit] grid-cols-2 items-center max-[720px]:grid-cols-1`}>
          <div className="relative z-[2] max-w-[650px] py-[58px] md:py-[74px] max-[720px]:pb-[22px]">
            <span className={eyebrowClass}>A better way to find your next car</span>
            <h1 className="mb-[22px] mt-[23px] max-w-[650px] font-heading text-[clamp(48px,13vw,76px)] font-semibold leading-[.99] tracking-[-.075em] md:text-[clamp(52px,7vw,92px)]">
              Good cars.
              <br />
              <span className="text-accent-green">Good people.</span>
              <br />
              Great drive.
            </h1>
            <p className="max-w-[430px] text-[13px] leading-[1.8] text-[#656a61] md:text-[15px]">
              The right car should feel right from the very first hello. Explore
              a handpicked collection, with people who make finding it simple.
            </p>
            <div className="mt-[26px] flex flex-wrap items-center gap-[18px] md:mt-8 md:gap-[26px]">
              <button
                className={`group ${buttonClass} bg-ink text-white hover:bg-[#30352d]`}
                onClick={() => onNavigate('/inventory')}
              >
                Explore our cars <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
              </button>
              <a className={`group ${textLinkClass}`} href="tel:+2349165293766">
                Talk to our team <span className="text-[19px] leading-none transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-[37px] flex gap-[17px] sm:gap-[25px] md:mt-14 md:gap-[clamp(24px,4vw,58px)]" aria-label="RhydeHaus at a glance">
              <div>
                <strong className="block font-heading text-lg font-bold tracking-[-.05em] md:text-[23px]">250+</strong>
                <span className="mt-1 block text-[10px] text-muted">happy drivers</span>
              </div>
              <div>
                <strong className="block font-heading text-lg font-bold tracking-[-.05em] md:text-[23px]">4.9/5</strong>
                <span className="mt-1 block text-[10px] text-muted">customer rating</span>
              </div>
              <div>
                <strong className="block font-heading text-lg font-bold tracking-[-.05em] md:text-[23px]">100%</strong>
                <span className="mt-1 block text-[10px] text-muted">hand selected</span>
              </div>
            </div>
          </div>
          <div className="relative flex h-full min-h-[275px] items-center justify-center max-[720px]:bg-[linear-gradient(135deg,#dfe3da,#cdd2c7)] md:min-h-[410px]">
            <img
              src={exteriorImage}
              alt=""
              className="relative z-[1] h-[250px] min-h-0 w-full border-0 object-contain drop-shadow-[0_20px_32px_rgba(23,25,22,0.12)] max-[720px]:h-[260px] md:-ml-4 md:h-[min(410px,48vw)] md:min-h-[280px] md:w-[calc(100%+32px)]"
            />
            <div className="absolute bottom-[15px] right-1 z-[2] flex items-center gap-3 bg-white px-3 py-2.5 text-[11px] shadow-[0_14px_40px_rgba(23,25,22,0.09)] md:bottom-[12%] md:px-5 md:py-4">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-base" aria-hidden="true">↗</span>
              <div>
                <strong>Find the one</strong>
                <div>Made for your next chapter</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={`${containerClass} grid grid-cols-2 border-b border-line bg-white md:grid-cols-4`} aria-label="Our promises">
        {trustItems.map((item, index) => (
          <div
            className={`flex min-h-[88px] items-center justify-start gap-2 px-3 py-[15px] md:min-h-28 md:justify-center md:gap-[13px] md:p-5 ${index > 0 ? 'border-l border-line' : ''} ${index >= 2 ? 'max-[720px]:border-t max-[720px]:border-line' : ''} ${index === 2 ? 'max-[720px]:border-l-0' : ''}`}
            key={item.title}
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f1f4eb] text-muted md:h-12 md:w-12">
              <svg className="h-[14px] w-[14px] stroke-current stroke-[1.5] md:h-4 md:w-4" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {item.icon}
              </svg>
            </span>
            <div>
              <strong className="block text-xs">{item.title}</strong>
              <span className="mt-[5px] block text-[10px] text-muted">{item.copy}</span>
            </div>
          </div>
        ))}
      </div>

      <section className="py-[66px] md:py-24" data-testid="featured-inventory">
        <div className={containerClass}>
          <div className="mb-[25px] flex flex-col items-start justify-between gap-[18px] md:mb-[34px] md:flex-row md:items-end md:gap-7">
            <div>
              <span className={eyebrowClass}>The collection</span>
              <h2 className="mt-[13px] font-heading text-[clamp(34px,9vw,46px)] font-semibold leading-[1.08] tracking-[-.055em] md:text-[clamp(34px,4vw,52px)]">Meet your next car.</h2>
              <p className="mt-[13px] text-sm leading-[1.7] text-muted">Thoughtfully selected. Ready for wherever life takes you.</p>
            </div>
            <span className={textLinkClass}>{featuredCars.length} featured vehicles</span>
          </div>
          <div className="grid grid-cols-1 gap-4 min-[721px]:grid-cols-2 min-[1001px]:grid-cols-3 min-[1001px]:gap-6">
            {featuredCars.length ? (
              featuredCars.map((car) => (
                <CarCard key={car.id} car={car} onNavigate={onNavigate} />
              ))
            ) : (
              <div className="col-span-full border border-dashed border-line px-6 py-11 text-center text-sm text-muted">
                Our next good drive is on its way.
              </div>
            )}
          </div>
          <div className="mt-6 flex justify-center md:mt-8">
            <button
              className={`group ${buttonClass} border-line bg-transparent hover:border-ink hover:bg-transparent`}
              onClick={() => onNavigate('/inventory')}
            >
              View all cars <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-paper py-[66px] md:py-24" id="why-rhyder">
        <div className={`${containerClass} grid items-center gap-8 md:grid-cols-[.9fr_1.1fr] md:gap-[10%]`}>
          <div>
            <span className={eyebrowClass}>The RhydeHaus difference</span>
            <h2 className="mb-[18px] mt-4 max-w-[480px] font-heading text-[clamp(40px,11vw,56px)] font-semibold leading-[1.04] tracking-[-.065em] md:text-[clamp(38px,5vw,62px)]">Car buying, with the good parts brought forward.</h2>
            <p className="max-w-[430px] text-sm leading-[1.8] text-muted">
              Finding a car is a big decision. It should feel exciting, not
              overwhelming. We keep the process thoughtful, transparent, and
              refreshingly human.
            </p>
            <a
              className={`group ${buttonClass} mt-[13px] border-line bg-transparent hover:border-ink hover:bg-transparent`}
              href="/about"
              onClick={(event) => {
                event.preventDefault();
                onNavigate('/about');
              }}
            >
              Get to know us <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-2.5 md:gap-3">
            {benefits.map((benefit) => (
              <article className="min-h-40 border border-[#e2e5dc] bg-white p-[19px] md:min-h-[178px] md:p-[26px]" key={benefit.title}>
                <span className="grid h-[39px] w-[39px] place-items-center rounded-full bg-[#f0f5e8] text-lg" aria-hidden="true">{benefit.icon}</span>
                <h3 className="mb-[7px] mt-[15px] font-heading text-sm font-bold md:mt-5">{benefit.title}</h3>
                <p className="text-[11px] leading-[1.6] text-muted">{benefit.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${containerClass} py-[66px] md:py-[90px]`} id="how-it-works">
        <div className="mb-[25px] flex flex-col items-start justify-between gap-[18px] md:mb-[34px] md:flex-row md:items-end md:gap-7">
          <div>
            <span className={eyebrowClass}>Simple by design</span>
            <h2 className="mt-[13px] font-heading text-[clamp(34px,9vw,46px)] font-semibold leading-[1.08] tracking-[-.055em] md:text-[clamp(34px,4vw,52px)]">Three steps to your next drive.</h2>
          </div>
          <p className="text-sm leading-[1.7] text-muted">A little less paperwork. A lot more looking forward.</p>
        </div>
        <div className="mt-7 grid grid-cols-1 gap-[23px] md:mt-[38px] md:grid-cols-3 md:gap-7">
          {[
            ['01 / EXPLORE', 'Find your kind of car', 'Browse the collection and get in touch when something feels right.'],
            ['02 / GET TO KNOW IT', 'Ask us anything', 'We’ll walk you through the details and arrange a time to see it.'],
            ['03 / HIT THE ROAD', 'Make it yours', 'We’ll take care of the final details so you can enjoy the drive.'],
          ].map(([step, title, copy]) => (
            <article className="border-t border-line pt-[14px] md:pt-5" key={step}>
              <span className="font-heading text-xs font-extrabold tracking-[.1em] text-[#91aa6b]">{step}</span>
              <h3 className="mb-[9px] mt-[10px] text-[17px] font-bold md:mb-2 md:mt-4">{title}</h3>
              <p className="max-w-[300px] text-xs leading-[1.7] text-muted">{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${containerClass} pb-[66px] md:pb-[92px]`}>
        <div className="flex flex-col items-start justify-between gap-8 bg-ink px-[25px] py-8 text-white md:flex-row md:items-center md:px-[54px] md:py-12">
          <div>
            <span className={`${eyebrowClass} text-[#bbc1b5]`}>Your next chapter starts here</span>
            <h2 className="mt-[13px] max-w-[570px] font-heading text-[35px] font-semibold leading-[1.1] tracking-[-.055em] md:text-[clamp(30px,4vw,47px)]">Let’s find the one that feels like you.</h2>
          </div>
          <button className={`group ${buttonClass}`} onClick={() => onNavigate('/inventory')}>
            Explore the collection <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
          </button>
        </div>
      </section>
    </>
  );
}

export default HomePage;
