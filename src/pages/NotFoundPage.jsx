function NotFoundPage({ onNavigate }) {
  return (
    <section className="mx-auto grid min-h-[58vh] w-[calc(100%-32px)] max-w-content place-items-center py-[70px] text-center sm:w-[calc(100%-40px)] min-[721px]:w-[calc(100%-56px)] lg:w-[calc(100%-96px)]">
      <div>
        <span className="inline-flex items-center gap-[9px] text-[11px] font-bold uppercase tracking-[.15em] text-muted before:h-[7px] before:w-[7px] before:rounded-full before:bg-[#90bd45] before:content-['']">
          Wrong turn?
        </span>
        <h1 className="my-[15px] font-heading text-[clamp(38px,6vw,64px)] font-semibold tracking-[-.06em]">
          We can get you back on the road.
        </h1>
        <p className="mb-6 text-sm text-muted">That page isn’t here, but your next car might be.</p>
        <button
          className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded bg-ink px-[22px] text-[13px] font-bold text-white transition hover:bg-[#30352d]"
          onClick={() => onNavigate('/')}
        >
          Back to home <span className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
}

export default NotFoundPage;
