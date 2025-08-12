import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Temporary mock until Supabase is connected
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

export interface NewsletterSubscription {
  id?: string
  email: string
  created_at?: string
}

export interface ContactSubmission {
  id?: string
  full_name: string
  email: string
  phone_number?: string
  subject: string
  message?: string
  created_at?: string
}