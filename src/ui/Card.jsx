function Card({ children, className }) {
  return (
    <div
      className={`flex flex-col rounded-lg bg-neutral-white p-6 ${
        className ? className : null
      }`}
    >
      {children}
    </div>
  );
}

export default Card;
