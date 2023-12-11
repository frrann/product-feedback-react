import Button from '../../ui/Button';
import Card from '../../ui/Card';
import SpinnerLarge from '../../ui/SpinnerLarge';
import Comment from './Comment';
import SuggestionCard from './SuggestionCard';
import Input from '../../ui/Input';

import ArrowBack from '../../assets/icon-arrow-back-blue.svg';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useFeedback } from './useFeedback';
import { useState } from 'react';
import { useUser } from '../authentication/useUser';
import { useComment } from './useComment';

function SuggestionDetail() {
  const moveBack = useMoveBack();
  const { feedback, isLoading: isFeedbackLoading } = useFeedback();
  const { user, isLoading: isUserLoading } = useUser();
  const [comment, setComment] = useState('');

  const { addComment, isLoading: isCommentLoading } = useComment();

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
    <div className="flex flex-col gap-6 p-6 md:p-8 lg:mx-auto lg:h-fit lg:w-[730px] lg:py-20">
      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          color="transparent"
          size="auto"
          onClick={moveBack}
        >
          <img src={ArrowBack} alt="Arrow back" />
          Go Back
        </Button>
        <Button color="blue">Edit Feedback</Button>
      </div>
      <SuggestionCard feedback={feedback} />
      <Card>
        <h3 className="text-blue-midnight">
          {feedback.comments.length} Comments
        </h3>
        {feedback.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </Card>
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
    </div>
  );
}

export default SuggestionDetail;
