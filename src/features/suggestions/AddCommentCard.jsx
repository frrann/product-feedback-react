import { useState } from 'react';

import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import SpinnerLarge from '../../ui/SpinnerLarge';

import { useSuggestion } from './useSuggestion';
import { useUser } from '../authentication/useUser';
import { useAddComment } from './useAddComment';

function AddCommentCard() {
  const [comment, setComment] = useState('');

  const { suggestion, isLoading: isSuggestionLoading } = useSuggestion();
  const { user, isLoading: isUserLoading } = useUser();
  const { addComment, isLoading: isCommentLoading } = useAddComment();

  function handleSubmit(e) {
    e.preventDefault();

    if (!comment.length) return;

    const newComment = {
      content: comment,
      suggestion_id: suggestion.id,
      user_id: user.id,
      thread_id: null,
      replied_username: null,
    };

    addComment(newComment);
    setComment('');
  }

  if (isSuggestionLoading || isUserLoading || isCommentLoading)
    return <SpinnerLarge />;

  return (
    <Card>
      <h3 className="text-blue-midnight">Add Comment</h3>
      <form className="pt-4" onSubmit={handleSubmit}>
        <Input
          placeholder="Type your comment here"
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="flex items-center justify-between pt-4">
          <p
            className={`custom-body-3 md:custom-body-2 font-normal ${
              comment.length >= 250 ? 'text-red' : 'text-neutral-grey'
            }`}
          >
            {comment.length >= 250 ? 0 : 250 - comment.length} Characters left
          </p>
          <Button disabled={comment.length >= 250}>Post Comment</Button>
        </div>
      </form>
    </Card>
  );
}

export default AddCommentCard;
