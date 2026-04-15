import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* Hero error section */}
      <section className="border-y-2 border-[#1B2A4A] bg-[#1B2A4A] px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8B800]">
            Error
          </p>
          <h1 className="text-6xl font-bold leading-tight text-white sm:text-8xl">
            404
          </h1>
          <div className="mt-3 h-[3px] w-16 rounded-full bg-[#E8B800]" />
          <p className="mt-5 text-lg leading-7 text-white/60">
            Page not found. The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/">Back Home</Button>
            <Button to="/products">View Products</Button>
          </div>
        </div>
      </section>

      {/* Quick links section */}
      <section className="border-y-2 border-[#1B2A4A] bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E8B800]">
            Quick Links
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#1B2A4A]">Explore the site</h2>

          <div className="mt-6 space-y-3">
            <div className="rounded-3xl border-2 border-[#1B2A4A] bg-white p-5 transition hover:bg-zinc-50">
              <h3 className="font-bold text-[#1B2A4A]">Home</h3>
              <p className="mt-1 text-sm text-zinc-500">Return to the homepage</p>
              <Button to="/" className="mt-4">Go Home</Button>
            </div>

            <div className="rounded-3xl border-2 border-[#1B2A4A] bg-white p-5 transition hover:bg-zinc-50">
              <h3 className="font-bold text-[#1B2A4A]">Products</h3>
              <p className="mt-1 text-sm text-zinc-500">Browse all featured store items</p>
              <Button to="/products" className="mt-4">View Products</Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NotFoundPage;