function Footer({ onNavigate }) {
  const navigate = (event, target) => {
    event.preventDefault();
    onNavigate(target);
  };

  return (
    <footer className="bg-[#f5f6f3] pt-[42px] md:pt-[58px]" id="contact">
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-content grid-cols-2 gap-x-5 gap-y-8 pb-[35px] sm:w-[calc(100%-56px)] md:w-[calc(100%-96px)] md:grid-cols-4 md:gap-[42px] md:pb-12">
        <div className="col-span-2 md:col-span-1">
          <a
            className="flex shrink-0 flex-col gap-[3px]"
            href="/"
            aria-label="RhydeHaus home"
            onClick={(event) => navigate(event, '/')}
          >
            <span className="font-heading text-[17px] font-extrabold leading-none tracking-[.12em]">
              RHYDE<span className="text-[#739839]">HAUS</span>
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[.22em] text-muted">
              A better way to drive
            </span>
          </a>
          <p className="mt-[18px] max-w-[290px] text-xs leading-[1.8] text-muted">
            A more considered way to find your next car. Quality vehicles,
            honest advice, and a team that makes it easy.
          </p>
        </div>
        <div>
          <h3 className="mb-[18px] mt-0.5 text-[11px] font-bold uppercase tracking-[.04em]">Explore</h3>
          <a className="mt-3 block w-fit text-[11px] leading-[1.6] text-muted hover:text-ink" href="/about" onClick={(event) => navigate(event, '/about')}>
            About RhydeHaus
          </a>
          <a className="mt-3 block w-fit text-[11px] leading-[1.6] text-muted hover:text-ink" href="/inventory" onClick={(event) => navigate(event, '/inventory')}>
            Our inventory
          </a>
          <a className="mt-3 block w-fit text-[11px] leading-[1.6] text-muted hover:text-ink" href="/contact" onClick={(event) => navigate(event, '/contact')}>
            Contact
          </a>
        </div>
        <div>
          <h3 className="mb-[18px] mt-0.5 text-[11px] font-bold uppercase tracking-[.04em]">Get in touch</h3>
          <a className="mt-3 block w-fit text-[11px] leading-[1.6] text-muted hover:text-ink" href="https://wa.me/2349165293766" target="_blank" rel="noopener noreferrer">09165293766</a>
          <a className="mt-3 block w-fit max-w-full break-words text-[11px] leading-[1.6] text-muted hover:text-ink" href="mailto:RhydehausGlobal@gmail.com">RhydehausGlobal@gmail.com</a>
          <span className="mt-3 block w-fit text-[11px] leading-[1.6] text-muted">Mon – Sat, 9am – 6pm</span>
        </div>
        <div>
          <h3 className="mb-[18px] mt-0.5 text-[11px] font-bold uppercase tracking-[.04em]">Visit us</h3>
          <span className="mt-3 block w-fit text-[11px] leading-[1.6] text-muted">Abuja, Nigeria</span>
          <span className="mt-3 block w-fit text-[11px] leading-[1.6] text-muted">By appointment, always welcome</span>
        </div>
      </div>
      <div className="mx-auto flex min-h-[58px] w-[calc(100%-40px)] flex-col justify-center gap-1 border-t border-[#e1e3de] py-3 text-[10px] text-muted sm:w-[calc(100%-56px)] md:w-[calc(100%-96px)] md:flex-row md:items-center md:justify-between md:gap-[18px]">
        <span>© {new Date().getFullYear()} RhydeHaus. All rights reserved.</span>
        <span>Thoughtfully driven.</span>
      </div>
    </footer>
  );
}

export default Footer;
