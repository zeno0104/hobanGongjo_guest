import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yawgyrcyxhdbgzjsbtqe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhd2d5cmN5eGhkYmd6anNidHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MjMxNTUsImV4cCI6MjA1NDQ5OTE1NX0.QX-LxbFJBLQkdXvdFt1aT1o8WC2_0Bl5hcnMXwAXVM4";

// Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
