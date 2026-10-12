import { useState } from 'react';

function Header({ onNavigate, pathname }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activePath =
    pathname.startsWith('/cars/') ? '/inventory' : pathname;
  const navLinkClass =
    'relative py-2 text-xs font-semibold text-[#555a52] transition-colors after:absolute after:bottom-px after:left-0 after:right-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent-green-dark after:transition-transform hover:text-accent-green focus-visible:outline-2 focus-visible:outline-offset-[5px] focus-visible:outline-accent-green-dark hover:after:scale-x-100 focus-visible:after:scale-x-100 aria-[current=page]:text-accent-green aria-[current=page]:after:scale-x-100 max-[720px]:border-b max-[720px]:border-[#f0f1ee] max-[720px]:py-[13px] last:max-[720px]:border-b-0';

  const navigate = (event, target) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white">
      <div className="mx-auto flex min-h-[70px] w-[calc(100%-40px)] max-w-content items-center justify-between gap-5 sm:w-[calc(100%-56px)] md:min-h-[82px] md:gap-8 lg:w-[calc(100%-96px)]">
        <a
          className="flex shrink-0 flex-col gap-[3px]"
          href="/"
          aria-label="RhydeHaus home"
          onClick={(event) => navigate(event, '/')}
        >
          <span className="font-heading text-[15px] font-extrabold leading-none tracking-[.12em] md:text-[17px]">
            RHYDE<span className="text-[#739839]">HAUS</span>
          </span>
          <span className="text-[8px] font-bold uppercase tracking-[.22em] text-muted">
            A better way to drive
          </span>
        </a>
        <nav
          className={`max-[720px]:absolute ${menuOpen ? 'max-[720px]:flex' : 'max-[720px]:hidden'} max-[720px]:left-0 max-[720px]:right-0 max-[720px]:top-[69px] max-[720px]:z-20 max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:gap-0 max-[720px]:border-b max-[720px]:border-line max-[720px]:bg-white max-[720px]:px-5 max-[720px]:pb-[18px] max-[720px]:pt-2 max-[720px]:shadow-[0_14px_20px_rgba(23,25,22,0.06)] flex items-center gap-5 md:gap-[clamp(22px,3.2vw,46px)]`}
          aria-label="Main navigation"
        >
          <a
            className={navLinkClass}
            href="/"
            aria-current={activePath === '/' ? 'page' : undefined}
            onClick={(event) => navigate(event, '/')}
          >
            Home
          </a>
          <a
            className={navLinkClass}
            href="/about"
            aria-current={activePath === '/about' ? 'page' : undefined}
            onClick={(event) => navigate(event, '/about')}
          >
            About
          </a>
          <a
            className={navLinkClass}
            href="/inventory"
            aria-current={activePath === '/inventory' ? 'page' : undefined}
            onClick={(event) => navigate(event, '/inventory')}
          >
            Inventory
          </a>
          <a
            className={navLinkClass}
            href="/contact"
            aria-current={activePath === '/contact' ? 'page' : undefined}
            onClick={(event) => navigate(event, '/contact')}
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2.5 md:gap-5">
          <a className="hidden whitespace-nowrap text-xs font-bold min-[1001px]:block" href="tel:+2349165293766">
            09165293766
          </a>
          <a
            className="group inline-flex min-h-11 items-center justify-center gap-3 rounded border border-transparent bg-accent px-[17px] text-xs font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#d5ff88] max-[720px]:hidden"
            href="/inventory"
            onClick={(event) => navigate(event, '/inventory')}
          >
            Find your car <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
          </a>
          <button
            className="hidden h-[42px] w-[42px] items-center justify-center rounded border border-line bg-transparent text-xl max-[720px]:inline-flex min-[721px]:hidden"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
