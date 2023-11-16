import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://odsjwiwanwxdfyxrjadq.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kc2p3aXdhbnd4ZGZ5eHJqYWRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzQ0MzcsImV4cCI6MjAxNDg1MDQzN30.idJFhwkD7HyjmhIFvMNx59z7Jhri0IogLvJrPecpdT8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
