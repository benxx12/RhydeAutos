const values = [
  {
    number: '01',
    title: 'People before pressure',
    description:
      'We listen first, answer honestly, and give you room to make the decision that feels right for you.',
  },
  {
    number: '02',
    title: 'Quality with intention',
    description:
      'Every vehicle earns its place in our collection through careful selection and a thorough inspection.',
  },
  {
    number: '03',
    title: 'Clear is kind',
    description:
      'Straightforward pricing, real vehicle details, and no surprises hidden in the fine print.',
  },
];

const containerClass =
  'mx-auto w-[calc(100%-32px)] max-w-content sm:w-[calc(100%-40px)] min-[721px]:w-[calc(100%-56px)] lg:w-[calc(100%-96px)]';
const eyebrowClass =
  'inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-muted before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#90bd45] before:content-[""]';
const buttonClass =
  'inline-flex min-h-[52px] items-center justify-center gap-3 rounded border border-transparent bg-accent px-[22px] text-[13px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#d5ff88]';

function AboutPage({ onNavigate }) {
  return (
    <>
      <section className="bg-paper py-[52px] md:py-[75px]">
        <div className={`${containerClass} grid items-center gap-7 md:grid-cols-[.9fr_1.1fr] md:gap-[8%]`}>
          <div>
            <span className={eyebrowClass}>A little about us</span>
            <h1 className="my-5 font-heading text-[clamp(50px,14vw,72px)] font-semibold leading-[.98] tracking-[-.075em] md:text-[clamp(52px,7vw,82px)]">
              People first.
              <br />
              <span className="text-accent-green">Always.</span>
            </h1>
            <p className="max-w-[490px] text-sm leading-[1.85] text-muted">
              We started RhydeHaus with a simple thought: finding your next
              car can feel better. More considered, more personal, and a lot
              more human.
            </p>
          </div>
          <div className="relative min-h-[240px] bg-[#e5e9df] md:min-h-[370px]">
            <img
              src="/images/showroom.jpg"
              alt="Cars displayed at a dealership showroom"
              className="h-[clamp(240px,68vw,350px)] w-full border-0 object-cover md:h-[370px]"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute bottom-3 right-2.5 bg-white px-5 py-4 text-[11px] font-bold shadow-[0_14px_40px_rgba(23,25,22,0.09)] md:bottom-[22px] md:right-[-18px]">
              Good journeys start with good people.
            </span>
          </div>
        </div>
      </section>

      <section className="py-[66px] md:py-24">
        <div className={`${containerClass} grid gap-7 md:grid-cols-[.9fr_1.1fr] md:gap-[8%]`}>
          <div>
            <span className={eyebrowClass}>Why RhydeHaus</span>
            <h2 className="mt-[14px] max-w-[460px] font-heading text-[clamp(36px,4.5vw,56px)] font-semibold leading-[1.08] tracking-[-.06em]">
              A better kind of car-buying experience.
            </h2>
          </div>
          <div className="max-w-[490px] space-y-4 text-sm leading-[1.85] text-muted">
            <p className="mt-0">
              Buying a car is about more than getting from one place to
              another. It’s about the moments and milestones along the way. We
              believe the experience of finding that car should be just as
              thoughtful.
            </p>
            <p>
              So we built a dealership around what matters: a handpicked
              collection, honest information, and a team who treats you like a
              person—not a sale. From your first question to the first drive
              home, we’re here to make the details feel easy.
            </p>
            <button
              className={`group ${buttonClass} mt-2.5 bg-ink text-white hover:bg-[#30352d]`}
              onClick={() => onNavigate('/inventory')}
            >
              Explore our collection <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-paper py-[62px] md:py-[82px]">
        <div className={containerClass}>
          <div className="mb-[25px] flex flex-col items-start justify-between gap-[18px] md:mb-[34px] md:flex-row md:items-end md:gap-7">
            <div>
              <span className={eyebrowClass}>What we believe</span>
              <h2 className="mt-[13px] font-heading text-[clamp(34px,9vw,46px)] font-semibold leading-[1.08] tracking-[-.055em] md:text-[clamp(34px,4vw,52px)]">
                Good business feels personal.
              </h2>
            </div>
            <p className="text-sm leading-[1.7] text-muted">
              The way we do things matters as much as what we do.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-3.5">
            {values.map((value) => (
              <article className="min-h-[170px] border border-line bg-white p-[22px] md:min-h-[210px] md:p-[27px]" key={value.number}>
                <span className="font-heading text-xs font-extrabold tracking-[.12em] text-accent-green-dark">
                  {value.number}
                </span>
                <h3 className="mb-[9px] mt-[22px] font-heading text-[17px] font-bold tracking-[-.025em] md:mt-8">
                  {value.title}
                </h3>
                <p className="max-w-[300px] text-xs leading-[1.75] text-muted">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${containerClass} py-[62px] md:py-[82px]`}>
        <div className="flex flex-col items-start justify-between gap-8 bg-ink px-[25px] py-8 text-white md:flex-row md:items-center md:px-[54px] md:py-12">
          <div>
            <span className={`${eyebrowClass} text-[#bbc1b5]`}>Come say hello</span>
            <h2 className="mt-[13px] max-w-[570px] font-heading text-[35px] font-semibold leading-[1.1] tracking-[-.055em] md:text-[clamp(30px,4vw,47px)]">
              Your next great drive starts with a conversation.
            </h2>
          </div>
          <a className={`group ${buttonClass}`} href="tel:+2349165293766">
            Talk to our team <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
