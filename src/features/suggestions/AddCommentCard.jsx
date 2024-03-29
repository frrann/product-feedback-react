import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import SpinnerLarge from '../../ui/SpinnerLarge';

import { useSuggestion } from './useSuggestion';
import { useAddComment } from './useAddComment';
import { useUser } from '../authentication/useUser';

function AddCommentCard() {
  const { register, setValue, control, reset, handleSubmit } = useForm();

  const comment = useWatch({
    control,
    name: 'comment',
    defaultValue: '',
  });

  const { suggestion, isLoading: isSuggestionLoading } = useSuggestion();
  const { addComment, isLoading: isCommentLoading } = useAddComment();
  const { user, isLoading: isUserLoading } = useUser();

  useEffect(() => {
    register('comment', {
      required: "Can't be empty",
    });
  }, [register]);

  function onSubmit({ comment }) {
    addComment(
      {
        content: comment,
        suggestion_id: suggestion.id,
        user_id: user.id,
        thread_id: null,
        replied_username: null,
      },
      {
        onSuccess: () => reset(),
      },
    );
  }

  if (isSuggestionLoading || isUserLoading || isCommentLoading)
    return <SpinnerLarge />;

  return (
    <Card>
      <h3 className="text-blue-midnight">Add Comment</h3>
      <form className="pt-4" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Type your comment here"
          id="comment"
          onChange={(e) => setValue('comment', e.target.value)}
        />

        <div className="flex items-center justify-between pt-4">
          <p
            className={`custom-body-3 md:custom-body-2 font-normal ${
              comment.length >= 250 ? 'text-red' : 'text-neutral-grey'
            }`}
          >
            {comment.length >= 250 ? 0 : 250 - comment.length} Characters left
          </p>

          <Button
            type="submit"
            disabled={comment.length < 1 || comment.length >= 250}
          >
            Post Comment
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default AddCommentCard;
