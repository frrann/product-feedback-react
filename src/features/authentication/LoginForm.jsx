import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import FormRow from './FormRow';
import FormButtons from './FormButtons';
import Button from '../../ui/Button';

import { useLogin } from './useLogin';

function LoginForm() {
  const methods = useForm();
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSettled: () => methods.reset(),
      },
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-2">
        <FormRow
          label="Email address"
          name="email"
          rules={{
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          }}
          disabled={isLoading}
        />

        <FormRow
          label="Password"
          name="password"
          type="password"
          rules={{
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Passwords needs a minimum of 8 characters',
            },
          }}
          disabled={isLoading}
        />

        <FormButtons>
          <Button
            type="submit"
            variant="primary"
            color="purple"
            size="large"
            disabled={isLoading}
          >
            Sign in
          </Button>
          <Button
            type="button"
            variant="secondary"
            color="transparent"
            size="large"
            disabled={isLoading}
            onClick={() => navigate('/register')}
          >
            Sign up
          </Button>
        </FormButtons>
      </form>
    </FormProvider>
  );
}

export default LoginForm;
