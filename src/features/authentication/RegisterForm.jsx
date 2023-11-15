import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { useSignUp } from './useSignUp';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigate = useNavigate();
  const { signup, isLoading } = useSignUp();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !passwordConfirm) return;

    if (password !== passwordConfirm) return;

    signup(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
          setPasswordConfirm('');
        },
      },
    );

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
          disabled={isLoading}
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
          disabled={isLoading}
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
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="flex items-center">
        <Button type="primary" color="purple" size="large" disabled={isLoading}>
          Sign up
        </Button>
        <Button
          type="secondary"
          color="transparent"
          size="large"
          onClick={() => navigate('/login')}
          disabled={isLoading}
        >
          Sign in
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
