function Header() {
  return (
    <header className="lg:max-w-1/3 bg-neutral-silver md:flex md:justify-between md:gap-[10px] md:px-10 md:pb-10 md:pt-14 lg:grid lg:w-1/3 lg:gap-6 lg:pl-[165px] lg:pr-[30px] lg:pt-24">
      <div className="bg-mobile md:bg-tablet lg:bg-desktop bg-cover md:flex-1 md:rounded-lg">
        <div className="pb-4 pl-6 pt-4 text-neutral-white md:pb-6 md:pt-[103px] lg:pt-[62px]">
          <h2 className="">Frontend Mentor</h2>
          <h4 className="font-normal">Feedback Board</h4>
        </div>
      </div>
      {/* <!-- Sidebar --> */}
      <div className="hidden bg-neutral-white md:grid md:flex-1 md:rounded-lg">
        <div>
          <div>
            <span>All</span>
            <span>UI</span>
            <span>UX</span>
            <span>Enhancement</span>
            <span>Bug</span>
            <span>Feature</span>
          </div>
        </div>
      </div>
      <div className="hidden bg-neutral-white md:grid md:flex-1 md:rounded-lg">
        <div>
          <div>
            <h3>Roadmap</h3>
            <button>View</button>
            <span>Planned</span> {/*  <!-- Add number here --> */}
            <span>In-Progress</span> {/*  <!-- Add number here --> */}
            <span>Live</span> {/*  <!-- Add number here --> */}
          </div>
        </div>
      </div>
      {/* <!-- Sidebar end --> */}
    </header>
  );
}

export default Header;
