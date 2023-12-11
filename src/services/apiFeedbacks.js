import supabase from './supabase';

export const getFeedbacks = async ({ filterBy }) => {
  let query = supabase.from('feedbacks').select(`*, comments (*)`);

  if (filterBy && filterBy !== 'all') query = query.eq('category', filterBy);

  const { data: feedbacks, error } = await query;

  if (error) throw new Error('Feedbacks could not be loaded');

  return feedbacks;
};

export const getFeedback = async (id) => {
  let { data: feedback, error } = await supabase
    .from('feedbacks')
    .select(`*, comments (*)`)
    .eq('id', id)
    .single();

  if (error) throw new Error('Feedback could not be loaded');

  const commentPromises = feedback?.comments.map(async (comment) => {
    const { data: user, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', comment.user_id)
      .single();

    if (error) throw new Error('Profiles could not be loaded');

    return { ...comment, user: { ...user } };
  });

  feedback.comments = await Promise.all(commentPromises);

  return feedback;
};
