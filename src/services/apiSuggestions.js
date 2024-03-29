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

export const createEditSuggestion = async (suggestion, id) => {
  let query = supabase.from('suggestions');

  if (!id) query = query.insert([{ ...suggestion }]);

  if (id) query = query.update({ ...suggestion }).eq('id', id);

  const { data, error } = await query.select().single();

  if (error) throw new Error('Suggestion could not be created');

  return data;
};

export const deleteSuggestion = async (id) => {
  const { error: commentsError } = await supabase
    .from('comments')
    .delete()
    .eq('suggestion_id', id);

  if (commentsError) throw new Error('Comments could not be deleted');

  const { data, error: suggestionError } = await supabase
    .from('suggestions')
    .delete()
    .eq('id', id);

  if (suggestionError) throw new Error('Suggestion could not be deleted');

  return data;
};

export const getGroupedSuggestions = async () => {
  const { data, error } = await supabase
    .from('grouped_status_view')
    // .from('grouped_suggestions')
    .select('*');

  if (error) throw new Error('Suggestions could not be loaded');

  return data;
};

export const updateUpvotes = async (upvotes, id) => {
  const { data, error } = await supabase
    .from('suggestions')
    .update({ upvotes: upvotes })
    .eq('id', id)
    .select()
    .single();

  if (error) throw new Error('Suggestion could not be updated');

  return data;
};
