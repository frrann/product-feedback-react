function Button({
  type = 'primary',
  color = 'purple',
  size = 'medium',
  children,
  ...rest
}) {
  const base =
    'my-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-indigo focus-visible:ring-offset-2';
  // 'my-5 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-indigo focus-visible:ring-offset-2';

  const width = {
    small: 'w-25',
    medium: 'w-40',
    large: 'w-full',
  };

  const styles = {
    primary: `${base} btn ${color} ${width[size]}`,
    secondary: `${base} btn-secondary ${color} ${width[size]}`,
  };

  return (
    <button className={styles[type]} {...rest}>
      {children}
    </button>
  );
}

export default Button;
