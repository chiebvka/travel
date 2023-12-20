export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          category: string | null
          created_at: string
          id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      countries: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      journals: {
        Row: {
          [x: string]: any
          created_at: string
          dov: string | null
          experience: string | null
          id: string
          imageUrl: string | null
          place: string | null
          place_id: {
            title: string;
            peak: string;
            // other properties of the place_id
          };
          title: string | null
          user: string | null
          user_id:  {
            avatarUrl: string;
            trade: string;
            username: string;
            // other properties of the place_id
          };
        }
        Insert: {
          created_at?: string
          dov?: string | null
          experience?: string | null
          id?: string
          imageUrl?: string | null
          place?: string | null
          place_id: {
            title: string;
            peak: string;
            // other properties of the place_id
          };
          title?: string | null
          user?: string | null
          user_id:  {
            avatarUrl: string;
            trade: string;
            username: string;
            // other properties of the place_id
          };
        }
        Update: {
          created_at?: string
          dov?: string | null
          experience?: string | null
          id?: string
          imageUrl?: string | null
          place?: string | null
          place_id: {
            title: string;
            peak: string;
            // other properties of the place_id
          };
          title?: string | null
          user?: string | null
          user_id:  {
            avatarUrl: string;
            trade: string;
            username: string;
            // other properties of the place_id
          };
        }
        Relationships: [
          {
            foreignKeyName: "journals_place_id_fkey"
            columns: ["place_id"]
            isOneToOne: false
            referencedRelation: "places"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "journals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      places: {
        Row: {
          categorize: string | null
          category: string | null
          category_id: string | null
          created_at: string
          id: string
          peak: string | null
          title: string | null
        }
        Insert: {
          categorize?: string | null
          category?: string | null
          category_id?: string | null
          created_at?: string
          id?: string
          peak?: string | null
          title?: string | null
        }
        Update: {
          categorize?: string | null
          category?: string | null
          category_id?: string | null
          created_at?: string
          id?: string
          peak?: string | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "places_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          journals: any
          avatarUrl: string | null
          coverUrl: string | null
          email: string | null
          firstname: string | null
          id: string
          lastname: string | null
          trade: string | null
          username: string | null
        }
        Insert: {
          avatarUrl?: string | null
          coverUrl?: string | null
          email?: string | null
          firstname?: string | null
          id: string
          lastname?: string | null
          trade?: string | null
          username?: string | null
        }
        Update: {
          avatarUrl?: string | null
          coverUrl?: string | null
          email?: string | null
          firstname?: string | null
          id?: string
          lastname?: string | null
          trade?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}