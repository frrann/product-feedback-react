function Input({ type, name }) {
  const styles =
    'test-sm my-3 w-64 rounded border-0 bg-neutral-silver px-5 py-3 text-blue-dark transition duration-300 focus:outline-none focus:ring-1 focus:ring-blue';

  return <input className={styles} type={type} id={name} name={name} />;
}

export default Input;
