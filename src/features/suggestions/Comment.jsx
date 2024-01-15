import { useState } from 'react';

import Button from '../../ui/Button';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';

import { useSuggestion } from './useSuggestion';
import { useUser } from '../authentication/useUser';
import { useAddComment } from './useAddComment';

function Comment({ comment }) {
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState('');

  const { suggestion, isLoading: isSuggestionLoading } = useSuggestion();
  const { user, isLoading: isUserLoading } = useUser();
  const { addComment, isLoading: isCommentLoading } = useAddComment();

  function handleSubmit(e) {
    e.preventDefault();

    if (!reply.length) return;

    const newReply = {
      content: reply,
      suggestion_id: suggestion.id,
      user_id: user.id,
      thread_id: comment.thread_id || comment.id,
      replied_username: comment.user.username,
    };

    addComment(newReply);

    setReply('');
    setShowReply(false);
  }

  if (isSuggestionLoading || isUserLoading || isCommentLoading)
    return <Spinner />;

  return (
    <div
      className={
        comment.thread_id ? 'pb-6 pl-6 md:pb-8 md:pl-8' : 'py-6 md:py-8'
      }
      key={comment.id}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={comment.user.image}
            alt="profile"
            className="mr-4 w-10 rounded-full md:mr-8"
          />
          <div>
            <h4 className="text-blue-midnight">{comment.user.name}</h4>
            <p className="custom-body-3 font-normal text-neutral-grey md:text-sm">
              @{comment.user.username}
            </p>
          </div>
        </div>
        <div>
          <button
            className="custom-body-3 text-blue"
            onClick={() => setShowReply((show) => !show)}
          >
            Reply
          </button>
        </div>
      </div>
      <div>
        <p className="custom-body-3 md:custom-body-2 font-normal text-neutral-slate md:ml-[72px]">
          <span className="font-bold text-purple">
            {comment.thread_id ? `@${comment.replied_username} ` : ''}
          </span>
          {comment.content}
        </p>
      </div>
      {showReply && (
        <form
          className="flex items-start justify-between gap-4 pt-4 md:ml-[72px]"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Type your comment here"
            id="reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
          />
          <Button>Post Reply</Button>
        </form>
      )}
    </div>
  );
}

export default Comment;
