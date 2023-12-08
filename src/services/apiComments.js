import supabase from './supabase';

export const postComment = async (comment) => {
  const { data, error } = await supabase
    .from('comments')
    .insert([comment])
    .select();

  if (error) throw new Error('Comment could not be added');

  return data;
};
