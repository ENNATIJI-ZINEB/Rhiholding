import { createClient } from '@supabase/supabase-js';

// Lazy initialization to avoid errors at module load time
function getSupabaseConfig() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables. Some features may not work.');
    // Return dummy values to prevent crashes, but operations will fail gracefully
    return {
      url: supabaseUrl || 'https://placeholder.supabase.co',
      anonKey: supabaseAnonKey || 'placeholder-key',
    };
  }

  return { url: supabaseUrl, anonKey: supabaseAnonKey };
}

const config = getSupabaseConfig();

// Client for client-side operations (uses anon key)
export const supabase = createClient(config.url, config.anonKey);

// Server-side client with service role key (bypasses RLS)
export function createServerClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  
  if (!serviceRoleKey || !supabaseUrl) {
    throw new Error('Missing Supabase environment variables. Please check your .env.local file.');
  }
  
  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

