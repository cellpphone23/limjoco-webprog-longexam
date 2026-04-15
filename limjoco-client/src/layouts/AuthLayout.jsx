import { Outlet } from 'react-router-dom';
import bulldogsImage from '../assets/img/login.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-[#1B2A4A] text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">

        {/* Left image panel */}
        <div className="relative flex items-center justify-center overflow-hidden bg-black border-b-2 border-[#E8B800] lg:border-b-0 lg:border-r-2 lg:border-[#E8B800]">

          {/* Background image */}
          <img
            src={bulldogsImage}
            alt="National University Bulldogs"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          {/* Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

          {/* Bottom branding */}
          <div className="absolute bottom-0 left-0 right-0 px-10 py-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E8B800]">
              National University
            </p>
            <h2 className="mt-1 text-3xl font-black uppercase tracking-widest text-white">
              Bulldogs Exchange
            </h2>
            <p className="mt-2 text-xs uppercase tracking-widest text-white/50">
              Your Campus Store
            </p>
            <div className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-[#E8B800]" />
          </div>
        </div>

        {/* Right form panel */}
        <main className="flex items-center bg-white px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>

      </div>
    </section>
  );
};

export default AuthLayout;