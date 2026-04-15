import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-[#1B2A4A] focus:bg-white focus:ring-2 focus:ring-[#1B2A4A]/10 hover:border-zinc-300';

const actionButtonClassName = 'w-full rounded-xl py-3.5 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
          Sign Up
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Create a store account for faster checkout, order updates, and pickup details.
        </p>
      </div>

      <form className="space-y-5">
        {/* First + Last Name */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="signup-email" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="signup-password" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-400">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="pt-1">
          <Button type="submit" variant="primary" className={actionButtonClassName}>
            Create Account
          </Button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">or</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        {/* Social sign-ups */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-8 border-t border-zinc-100 pt-6 text-xs text-zinc-500">
        Already have an account?{' '}
        <Link
          to="/auth/signin"
          className="font-semibold text-[#1B2A4A] transition hover:text-[#E8B800]"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;