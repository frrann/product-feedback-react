import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <>
      <div className="mt-10 h-max overflow-hidden rounded-lg bg-neutral-white md:mt-16 xl:mt-0">
        <div className="flex flex-col lg:flex-row">
          {/* <div className="flex px-6 py-11 md:px-[42px] md:pt-[52px]"> */}
          {/* <div className="hidden flex-[50%] bg-gradient-to-r from-blue via-purple to-orange lg:flex lg:items-center"> */}
          <div className="hidden flex-[50%] bg-blue-periwinkle lg:flex lg:items-center">
            {/* <div className="hidden flex-[50%] bg-gradient-to-r from-blue-indigo to-neutral-pinky lg:flex lg:items-center"> */}
            <img src="login.png" alt="Login illustration" className="p-16" />
          </div>
          <div className="grid flex-[50%] gap-7 px-12 py-11">
            <div>
              <h3 className="text-blue-dark md:text-2xl">Welcome back</h3>
              <p className="text-sm text-neutral-grey">Share your feedback!</p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
