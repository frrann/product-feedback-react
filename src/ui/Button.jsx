function Button({
  variant = 'primary',
  color = 'purple',
  size = 'medium',
  margin = 'my-2',
  children,
  ...rest
}) {
  const base =
    'focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-indigo focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40';
  // 'my-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-indigo focus-visible:ring-offset-2 disabled:cursor-not-allowed';
  // 'my-5 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-indigo focus-visible:ring-offset-2';

  const width = {
    small: 'w-25',
    medium: 'w-40',
    large: 'w-full',
    auto: 'w-auto',
  };

  const styles = {
    primary: `${base} btn ${color} ${width[size]} ${margin}`,
    secondary: `${base} btn-secondary ${color} ${width[size]} ${margin}`,
  };

  return (
    <button className={styles[variant]} {...rest}>
      {children}
    </button>
  );
}

export default Button;
