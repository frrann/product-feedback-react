function Button({ type = 'primary', color = 'purple', children }) {
  const base =
    'm-5 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-indigo focus-visible:ring-offset-2';

  const styles = {
    primary: `${base} btn ${color}`,
    secondary: `${base} btn-secondary ${color}`,
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
