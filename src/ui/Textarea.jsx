function Textarea(props) {
  const styles =
    'text-sm mt-2 w-full rounded border-0 bg-neutral-silver px-5 py-3 text-blue-dark transition duration-300 focus:outline-none focus:ring-1 focus:ring-blue aria-[invalid=true]:border-[1px] aria-[invalid=true]:border-red';

  return <textarea className={styles} {...props} />;
}

export default Textarea;
