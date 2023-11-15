import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { useLogin } from './useLogin';

function LoginForm() {
  const [email, setEmail] = useState('ada.fran92@gmail.com');
  const [password, setPassword] = useState('12345678');

  const navigate = useNavigate();
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
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
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="flex items-center gap-2">
        <Button type="primary" color="purple" size="large" disabled={isLoading}>
          Sign in
        </Button>
        <Button
          type="secondary"
          color="transparent"
          size="large"
          disabled={isLoading}
          onClick={() => navigate('/register')}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
