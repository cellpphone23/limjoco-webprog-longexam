import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400 focus:border-[#1B2A4A] focus:bg-white focus:ring-2 focus:ring-[#1B2A4A]/10 hover:border-zinc-300';

const actionButtonClassName = 'w-full rounded-xl py-3.5 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
          Log In
        </h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Access your store account to review orders, saved items, and pickup details.
        </p>
      </div>

      <form className="space-y-5">
        {/* Email */}
        <div>
          <label htmlFor="signin-email" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="signin-password" className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-400">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        {/* Remember me + Forgot Password */}
        <div className="flex items-center justify-between gap-4 pt-1 text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-zinc-500 transition hover:text-zinc-700">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 accent-[#1B2A4A]"
            />
            <span className="text-xs">Remember me</span>
          </label>
          <button
            type="button"
            className="text-xs font-semibold text-[#1B2A4A] transition hover:text-[#E8B800]"
          >
            Forgot Password?
          </button>
        </div>

        {/* Primary CTA */}
        <div className="pt-1">
          <Button type="submit" variant="primary" className={actionButtonClassName}>
            Log In
          </Button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">or</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        {/* Social logins */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Apple
          </Button>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-8 border-t border-zinc-100 pt-6 text-xs text-zinc-500">
        No account yet?{' '}
        <Link
          to="/signup"
          className="font-semibold text-[#1B2A4A] transition hover:text-[#E8B800]"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;