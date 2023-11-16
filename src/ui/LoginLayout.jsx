import { Outlet } from 'react-router-dom';

function LoginLayout() {
  return (
    <div className="grid h-screen overflow-auto bg-neutral-silver px-6 pb-12 pt-[34px] md:px-[114px] md:pb-[54px] md:pt-14 xl:px-[450px] xl:pb-[147px] xl:pt-[180px]">
      <div className="mt-10 h-max overflow-hidden rounded-lg bg-neutral-white md:mt-16 xl:mt-0">
        <Outlet />
      </div>
    </div>
  );
}

export default LoginLayout;
