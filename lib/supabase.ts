import { createClient } from "@supabase/supabase-js"
import type { Database } from "./database.types"

// Create a single supabase client for the server
export const createServerSupabaseClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL!
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  return createClient<Database>(supabaseUrl, supabaseKey)
}

// Create a singleton client for the browser
let clientInstance: ReturnType<typeof createBrowserSupabaseClient> | null = null

export const createBrowserSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  return createClient<Database>(supabaseUrl, supabaseKey)
}

export const getSupabaseBrowserClient = () => {
  if (!clientInstance) {
    clientInstance = createBrowserSupabaseClient()
  }
  return clientInstance
}

