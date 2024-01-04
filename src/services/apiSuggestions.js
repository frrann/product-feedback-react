import supabase from './supabase';

export const getSuggestions = async ({ filterBy }) => {
  let query = supabase.from('suggestions').select(`*, comments (*)`);

  if (filterBy && filterBy !== 'all') query = query.eq('category', filterBy);

  const { data: suggestions, error } = await query;

  if (error) throw new Error('Suggestions could not be loaded');

  return suggestions;
};

export const getSuggestion = async (id) => {
  let { data: suggestion, error } = await supabase
    .from('suggestions')
    .select(`*, comments (*)`)
    .eq('id', id)
    .single();

  if (error) throw new Error('Suggestion could not be loaded');

  const commentPromises = suggestion?.comments.map(async (comment) => {
    const { data: user, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', comment.user_id)
      .single();

    if (error) throw new Error('Profiles could not be loaded');

    return { ...comment, user: { ...user } };
  });

  suggestion.comments = await Promise.all(commentPromises);

  return suggestion;
};

export const createSuggestion = async (suggestion) => {
  const { data, error } = await supabase
    .from('suggestions')
    .insert([suggestion])
    .select();

  if (error) throw new Error('Suggestion could not be created');

  return data;
};