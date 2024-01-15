import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';

import FormRow from './FormRow';
import FormButtons from './FormButtons';
import Button from '../../ui/Button';

import { useSignUp } from './useSignUp';

function generateUsernameWithRandomNumber(fullName) {
  const initials = fullName
    .split(' ')
    .map((name) => name.toLowerCase())
    .join('');

  const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);

  return `${initials}${randomFourDigitNumber}`;
}

function RegisterForm() {
  const methods = useForm();
  const navigate = useNavigate();
  const { signup, isLoading } = useSignUp();

  function onSubmit({ name, email, password }) {
    signup(
      {
        email,
        password,
        profile: {
          name,
          username: generateUsernameWithRandomNumber(name),
          image: 'https://shorturl.at/flC12',
        },
      },
      {
        onSettled: () => {
          methods.reset('');
        },
      },
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-2">
        <FormRow
          label="Full Name"
          name="name"
          rules={{
            required: 'This field is required',
          }}
          disabled={isLoading}
        />

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

        <FormRow
          label="Confirm password"
          name="passwordConfirm"
          type="password"
          rules={{
            required: 'This field is required',
            validate: (value, formValues) =>
              value === formValues.password || 'Passwords need to match',
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
            Sign up
          </Button>
          <Button
            type="button"
            variant="secondary"
            color="transparent"
            size="large"
            onClick={() => navigate('/login')}
            disabled={isLoading}
          >
            Sign in
          </Button>
        </FormButtons>
      </form>
    </FormProvider>
  );
}

export default RegisterForm;
