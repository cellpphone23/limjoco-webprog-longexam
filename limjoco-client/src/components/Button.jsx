import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-[#1a2a6e] text-white hover:bg-[#152060]',
  secondary: 'bg-[#F5C518] text-[#1a2a6e] hover:bg-[#e0b200]',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 border-[#1a2a6e] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;