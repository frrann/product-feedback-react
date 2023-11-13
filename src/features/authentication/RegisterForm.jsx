import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { useState } from 'react';
// import { useLogin } from './useLogin';

function RegisterForm() {
  const [email, setEmail] = useState('ada.fran92@gmail.com');
  const [password, setPassword] = useState('12345678');
  // const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    // login(
    //   { email, password },
    //   {
    //     onSettled: () => {
    //       setEmail('');
    //       setPassword('');
    //     },
    //   },
    // );

    // Navigate to suggestions page
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-2">
      <div className="flex flex-col gap-[0.5rem] px-0">
        <label htmlFor="email" className="text-sm">
          Email address
        </label>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-[0.5rem] px-0">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-[0.5rem] px-0">
        <label htmlFor="password" className="text-sm">
          Confirm password
        </label>
        <Input
          type="password"
          id="passwordConfirm"
          autoComplete="current-password"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
          // disabled={isLoading}
        />
      </div>
      <div className="flex items-center">
        <Button
          type="primary"
          color="purple"
          size="large"
          // disabled={isLoading}
        >
          Sign up
        </Button>
        <Button
          type="secondary"
          color="transparent"
          size="large"
          // disabled={isLoading}
        >
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
