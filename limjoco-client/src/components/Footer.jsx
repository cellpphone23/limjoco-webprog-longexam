import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-4 border-[#1B2A4A] bg-[#E8B800]">

      {/* Main footer content */}
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

            {/* Brand */}
            <div className="max-w-xs">
              <p className="text-xl font-black uppercase tracking-wide text-[#1B2A4A]">
                Bulldogs Exchange
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1B2A4A]/60">
                National University · Campus Store
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#1B2A4A]/70">
                Campus essentials, simple ordering. Pick up your items right on campus.
              </p>
            </div>

            {/* Nav links */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1B2A4A]/50">
                Navigate
              </p>
              <div className="flex flex-col gap-1.5">
                <Link
                  to="/products"
                  className="text-sm font-semibold text-[#1B2A4A] transition hover:text-[#1B2A4A]/60"
                >
                  Products
                </Link>
                <Link
                  to="/cart"
                  className="text-sm font-semibold text-[#1B2A4A] transition hover:text-[#1B2A4A]/60"
                >
                  Cart
                </Link>
                <Link
                  to="/pickup"
                  className="text-sm font-semibold text-[#1B2A4A] transition hover:text-[#1B2A4A]/60"
                >
                  Pickup
                </Link>
              </div>
            </div>

            {/* Account links */}
            <div className="flex flex-col gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1B2A4A]/50">
                Account
              </p>
              <div className="flex flex-col gap-1.5">
                <Link
                  to="/auth/signin"
                  className="text-sm font-semibold text-[#1B2A4A] transition hover:text-[#1B2A4A]/60"
                >
                  Log In
                </Link>
                <Link
                  to="/auth/signup"
                  className="text-sm font-semibold text-[#1B2A4A] transition hover:text-[#1B2A4A]/60"
                >
                  Sign Up
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1B2A4A]/20 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1B2A4A]/60">
            © {new Date().getFullYear()} Bulldogs Exchange · All rights reserved
          </p>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1B2A4A]/60">
            National University Philippines
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;