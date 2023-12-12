import { useState } from 'react';

import Button from '../../ui/Button';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import SpinnerLarge from '../../ui/SpinnerLarge';

import { useFeedback } from './useFeedback';
import { useUser } from '../authentication/useUser';
import { useAddComment } from './useAddComment';

function AddCommentCard() {
  const [comment, setComment] = useState('');

  const { feedback, isLoading: isFeedbackLoading } = useFeedback();
  const { user, isLoading: isUserLoading } = useUser();
  const { addComment, isLoading: isCommentLoading } = useAddComment();

  function handleSubmit(e) {
    e.preventDefault();

    if (!comment.length) return;

    const newComment = {
      content: comment,
      feedback_request_id: feedback.id,
      user_id: user.id,
      replying_to_id: null,
      replying_to_username: null,
    };

    addComment(newComment);
    setComment('');
  }

  if (isFeedbackLoading || isUserLoading || isCommentLoading)
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
            className={`custom-body-2 ${
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
