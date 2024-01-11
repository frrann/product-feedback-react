import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { signup as signupApi } from '../../services/apiAuth';

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password }) => signupApi({ email, password }),
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address.",
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { signup, isLoading };
}
