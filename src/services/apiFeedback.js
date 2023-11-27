import supabase from './supabase';

export const getFeedbacks = async ({ filterBy }) => {
  let query = supabase.from('feedbacks').select(`*, comments (*)`);

  if (filterBy && filterBy !== 'all') query = query.eq('category', filterBy);

  const { data: feedbacks, error } = await query;

  if (error) throw new Error('Feedbacks could not be loaded');

  return feedbacks;
};
