function Input({ ...rest }) {
  const styles =
    'text-sm my-2 w-full rounded border-0 bg-neutral-silver px-5 py-3 text-blue-dark transition duration-300 focus:outline-none focus:ring-1 focus:ring-blue';
  // 'text-sm my-2 w-64 rounded border-0 bg-neutral-silver px-5 py-3 text-blue-dark transition duration-300 focus:outline-none focus:ring-1 focus:ring-blue';

  return <input className={styles} {...rest} />;
}

export default Input;
