export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          created_at: string
          name: string
          industry: string
          location: string
          contact_name: string
          contact_email: string
          status: string
          user_id: string
          notes: string | null
          phone: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          industry: string
          location: string
          contact_name: string
          contact_email: string
          status: string
          user_id: string
          notes?: string | null
          phone?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          industry?: string
          location?: string
          contact_name?: string
          contact_email?: string
          status?: string
          user_id?: string
          notes?: string | null
          phone?: string | null
        }
      }
      appointments: {
        Row: {
          id: string
          created_at: string
          client_id: string
          date: string
          start_time: string
          end_time: string
          type: string
          location: string
          status: string
          notes: string | null
          user_id: string
        }
        Insert: {
          id?: string
          created_at?: string
          client_id: string
          date: string
          start_time: string
          end_time: string
          type: string
          location: string
          status: string
          notes?: string | null
          user_id: string
        }
        Update: {
          id?: string
          created_at?: string
          client_id?: string
          date?: string
          start_time?: string
          end_time?: string
          type?: string
          location?: string
          status?: string
          notes?: string | null
          user_id?: string
        }
      }
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          first_name: string | null
          last_name: string | null
          role: string | null
          bio: string | null
          avatar_url: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          first_name?: string | null
          last_name?: string | null
          role?: string | null
          bio?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          first_name?: string | null
          last_name?: string | null
          role?: string | null
          bio?: string | null
          avatar_url?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

