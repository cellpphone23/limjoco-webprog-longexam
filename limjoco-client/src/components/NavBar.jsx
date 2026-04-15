import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-nu-blue-900 bg-nu-blue-900 text-nu-yellow'
      : 'border-transparent text-nu-blue-900 hover:border-nu-blue-900 hover:bg-nu-yellow-100 hover:text-nu-blue-900',
  ].join(' ');

const buttonClass =
  'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition';

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-nu-yellow bg-nu-yellow backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-9 w-9 rounded-full border-2 border-nu-blue-900 bg-white object-contain"
          />
          <p className="text-xl font-bold text-nu-blue-900">
            BulldogEx Shop
          </p>
        </NavLink>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              [
                buttonClass,
                isActive
                  ? 'border-nu-blue-900 bg-nu-blue-900 text-nu-yellow'
                  : 'border-nu-blue-900 text-nu-blue-900 hover:bg-nu-blue-900 hover:text-nu-yellow',
              ].join(' ')
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/signup"
            className={({ isActive }) =>
              [
                buttonClass,
                isActive
                  ? 'border-nu-blue-800 bg-nu-blue-800 text-nu-yellow'
                  : 'border-nu-blue-900 bg-nu-blue-900 text-nu-yellow hover:bg-nu-blue-800',
              ].join(' ')
            }
          >
            Sign Up
          </NavLink>
        </div>

      </div>
    </header>
  );
};

export default NavBar;
