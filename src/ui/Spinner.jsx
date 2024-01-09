function Spinner() {
  return (
    <div className="grid h-max gap-4 overflow-hidden">
      <div className="inset-0 flex h-[300px] items-center justify-center rounded-md">
        <div className="loader"></div>
      </div>
    </div>
  );
}
export default Spinner;
