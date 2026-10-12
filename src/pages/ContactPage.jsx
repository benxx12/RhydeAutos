const contactOptions = [
  {
    icon: '↗',
    label: 'WhatsApp us',
    value: '09165293766',
    href: 'https://wa.me/2349165293766?text=Hi%2C%20I%27d%20like%20to%20get%20in%20touch%20with%20RhydeHaus.',
    note: 'Mon – Sat, 9am – 6pm',
    external: true,
  },
  {
    icon: '✉',
    label: 'Send us an email',
    value: 'RhydehausGlobal@gmail.com',
    href: 'mailto:RhydehausGlobal@gmail.com',
    note: 'We usually reply within one business day.',
  },
];

const containerClass =
  'mx-auto w-[calc(100%-32px)] max-w-content sm:w-[calc(100%-40px)] min-[721px]:w-[calc(100%-56px)] lg:w-[calc(100%-96px)]';
const eyebrowClass =
  'inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-muted before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#90bd45] before:content-[""]';
const buttonClass =
  'inline-flex min-h-[52px] items-center justify-center gap-3 rounded border border-transparent bg-accent px-[22px] text-[13px] font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#d5ff88]';

function ContactPage({ onNavigate }) {
  return (
    <>
      <section className="bg-paper px-4 py-[60px] text-center md:px-0 md:py-[86px]">
        <div className="mx-auto flex max-w-[720px] flex-col items-center">
          <span className={eyebrowClass}>We’re here to help</span>
          <h1 className="my-5 font-heading text-[clamp(44px,12vw,62px)] font-semibold leading-none tracking-[-.075em] md:text-[clamp(48px,7vw,78px)]">
            Let’s talk about
            <br />
            <span className="text-accent-green">your next drive.</span>
          </h1>
          <p className="max-w-[550px] text-sm leading-[1.8] text-muted">
            Have a question about a car, want to arrange a visit, or just
            figuring out what’s next? We’d be happy to hear from you.
          </p>
        </div>
      </section>

      <section className="py-[58px] md:py-[82px]">
        <div className={`${containerClass} grid gap-7 md:grid-cols-[1.1fr_.9fr] md:gap-[10%]`}>
          <div className="min-w-0">
            <span className={eyebrowClass}>Get in touch</span>
            <h2 className="mb-5 mt-[14px] font-heading text-[clamp(30px,4vw,43px)] font-semibold leading-[1.1] tracking-[-.055em] md:mb-[26px]">
              Good conversations start here.
            </h2>
            <div className="grid gap-3">
              {contactOptions.map((option) => (
                <a
                  className="group flex min-h-[100px] min-w-0 items-center gap-4 border border-line p-[18px] transition hover:-translate-y-0.5 hover:border-[#b5c49e]"
                  href={option.href}
                  key={option.label}
                  target={option.external ? '_blank' : undefined}
                  rel={option.external ? 'noopener noreferrer' : undefined}
                >
                  <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-[#f1f4eb] text-[17px]" aria-hidden="true">
                    {option.icon}
                  </span>
                  <span className="grid min-w-0 gap-1">
                    <span className="text-[10px] text-muted">{option.label}</span>
                    <strong className="break-words text-sm">{option.value}</strong>
                    <small className="text-[10px] text-muted">{option.note}</small>
                  </span>
                  <span className="ml-auto text-base transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>

          <aside className="self-start bg-paper p-6 md:p-[30px]">
            <span className={eyebrowClass}>Come say hello</span>
            <h2 className="mb-[18px] mt-[14px] font-heading text-[clamp(30px,4vw,43px)] font-semibold leading-[1.1] tracking-[-.055em]">
              Visit RhydeHaus.
            </h2>
            <p className="mt-4 text-sm font-semibold leading-[1.7] text-ink">
              Abuja, Nigeria
            </p>
            <p className="mt-3 text-xs leading-[1.8] text-muted">
              We welcome visits by appointment. Get in touch and we’ll find a
              time that works for you.
            </p>
            <a
              className={`group ${buttonClass} mt-3 bg-ink text-white hover:bg-[#30352d]`}
              href="mailto:RhydehausGlobal@gmail.com?subject=Arrange%20a%20visit"
            >
              Arrange a visit <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      </section>

      <section className={`${containerClass} pb-[62px] md:pb-[82px]`}>
        <div className="flex flex-col items-start justify-between gap-8 bg-ink px-[25px] py-8 text-white md:flex-row md:items-center md:px-[54px] md:py-12">
          <div>
            <span className={`${eyebrowClass} text-[#bbc1b5]`}>Already have a car in mind?</span>
            <h2 className="mt-[13px] max-w-[570px] font-heading text-[35px] font-semibold leading-[1.1] tracking-[-.055em] md:text-[clamp(30px,4vw,47px)]">
              We’d love to tell you more about it.
            </h2>
          </div>
          <a
            className={`group ${buttonClass}`}
            href="/inventory"
            onClick={(event) => {
              event.preventDefault();
              onNavigate('/inventory');
            }}
          >
            Explore the collection <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
