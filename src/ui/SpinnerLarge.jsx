function SpinnerLarge() {
  return (
    <div className="grid h-max gap-4 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center rounded-md bg-purple-light/20 backdrop-blur-lg">
        <div className="loader"></div>
      </div>
    </div>
  );
}
export default SpinnerLarge;
