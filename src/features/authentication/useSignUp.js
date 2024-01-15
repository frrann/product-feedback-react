import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signup as signupApi } from '../../services/apiAuth';

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, profile }) =>
      signupApi({ email, password, profile }),
    onSuccess: () => {
      toast.success(
        'Account successfully created! Please check your email inbox for a verification link.',
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { signup, isLoading };
}
