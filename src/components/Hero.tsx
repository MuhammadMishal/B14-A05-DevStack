export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-20 md:min-h-[600px] md:grid-cols-[1.15fr_.85fr] lg:px-8">
        <div className="mx-auto max-w-2xl text-center md:mx-0 md:text-left">
          <h1 className="text-[34px] font-extrabold leading-[1.12] tracking-[-0.045em] text-[#10182b] sm:text-5xl md:text-[54px] lg:text-[64px]">
            Build Your Ideal
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-slate-600 sm:max-w-xl sm:text-lg sm:leading-8 md:mx-0 md:mt-7">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3 md:mt-10 md:justify-start">
            <a
              href="#technologies"
              className="btn border-0 bg-gradient-to-r from-orange-500 to-pink-500 px-5 text-white shadow-none hover:brightness-95"
            >
              Explore Technologies
            </a>
            <a
              href="#technologies"
              className="btn border-slate-200 bg-white px-8 font-medium text-slate-600 shadow-none hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div
          className="stack-visual relative mx-auto flex w-full max-w-[480px] items-center justify-center"
          aria-label="Isometric illustration of a layered technology stack"
        >
          <img
            src="/images/banner-stack.png"
            alt="3D layered tech stack illustration"
            className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_35px_rgba(168,85,247,0.25)]"
          />
        </div>
      </div>
    </section>
  );
}
