import LoginForm from '../features/authentication/LoginForm';

function Login() {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <div className="hidden flex-[50%] bg-blue-periwinkle lg:flex lg:items-center">
          <img src="login.png" alt="Login illustration" className="p-16" />
        </div>
        <div className="grid flex-[50%] gap-7 px-12 py-11">
          <div>
            <h3 className="text-blue-dark md:text-2xl">Welcome back</h3>
            <p className="text-sm text-neutral-grey">
              Got a suggestion? We love hearing about new ideas to improve our
              app.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Login;
